<script lang="ts">
  export let variant: 'default' | 'minimal' | 'full' = 'default';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let className = '';
  export let style = '';

  $: classes = [
    'unlayer-branding',
    `unlayer-branding--${variant}`,
    `unlayer-branding--${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');
</script>

{#if variant === 'minimal'}
  <div class={classes} style={style}>
    <span>Made with Unlayer</span>
  </div>
{:else if variant === 'full'}
  <div class={classes} style={style}>
    <span>Made with</span>
    <strong> Unlayer</strong>
  </div>
{:else}
  <div class={classes} style={style}>
    <span>Made with </span>
    <strong>Unlayer</strong>
  </div>
{/if}

<style>
  .unlayer-branding {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .unlayer-branding--small {
    font-size: 0.875rem;
  }

  .unlayer-branding--medium {
    font-size: 1rem;
  }

  .unlayer-branding--large {
    font-size: 1.125rem;
  }

  .unlayer-branding strong {
    font-weight: 600;
  }
</style>
