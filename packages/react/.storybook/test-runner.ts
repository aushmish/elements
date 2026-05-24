import type { TestRunnerConfig } from '@storybook/test-runner';

/**
 * Storybook test-runner config — a browser smoke test over every story.
 *
 * For each story page it asserts two things:
 *   1. No JavaScript errors — uncaught exceptions (`pageerror`) or app-level
 *      `console.error` calls. Network/resource failures (e.g. the YouTube
 *      thumbnails and example.com images used in stories, which 404 in CI)
 *      are deliberately ignored — they aren't component bugs.
 *   2. The component actually painted — `#storybook-root` has at least one
 *      visible descendant with a non-zero box. Catches the failure mode where
 *      a component throws or renders nothing and the page is silently blank.
 *
 * Runs against both `storybook dev` and the static `storybook build` output
 * (see the `test-storybook` / `test-storybook:ci` scripts).
 */

const ERRORS_KEY = '__unlayerStoryErrors';
const LISTENERS_KEY = '__unlayerListenersAttached';

// Resource-load / network noise that is not a component regression.
const RESOURCE_NOISE =
  /(Failed to load resource|net::ERR|ERR_[A-Z_]+|the server responded with a status of [45]\d\d|favicon)/i;

const config: TestRunnerConfig = {
  async preVisit(page) {
    const anyPage = page as any;

    // The test-runner reuses one page per worker across stories, so attach the
    // listeners exactly once and just reset the buffer on each visit.
    if (!anyPage[LISTENERS_KEY]) {
      anyPage[LISTENERS_KEY] = true;

      page.on('console', (msg) => {
        if (msg.type() !== 'error') return;
        const text = msg.text();
        if (RESOURCE_NOISE.test(text)) return;
        (anyPage[ERRORS_KEY] ??= []).push(`console.error: ${text}`);
      });

      page.on('pageerror', (err) => {
        (anyPage[ERRORS_KEY] ??= []).push(`pageerror: ${err.message}`);
      });
    }

    anyPage[ERRORS_KEY] = [];
  },

  async postVisit(page, context) {
    const id = `${context.title} › ${context.name}`;

    const hasVisibleContent = await page.evaluate(() => {
      const root = document.querySelector('#storybook-root');
      if (!root) return false;
      // Media elements count as rendered even when their remote asset 404s in
      // CI (no network) and the box collapses to 0×0 — the component still
      // emitted its UI. Everything else must actually paint a non-zero box.
      const MEDIA = new Set(['IMG', 'IFRAME', 'VIDEO', 'PICTURE', 'SVG', 'CANVAS']);
      for (const el of Array.from(root.querySelectorAll('*'))) {
        const style = getComputedStyle(el);
        if (style.visibility === 'hidden' || style.display === 'none') continue;
        if (MEDIA.has(el.tagName)) return true;
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) return true;
      }
      return false;
    });

    if (!hasVisibleContent) {
      throw new Error(
        `[${id}] rendered nothing visible — #storybook-root has no painted content`,
      );
    }

    const errors: string[] = (page as any)[ERRORS_KEY] ?? [];
    if (errors.length > 0) {
      throw new Error(`[${id}] browser errors:\n  ${errors.join('\n  ')}`);
    }
  },
};

export default config;
