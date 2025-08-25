import { describe, it, expect } from 'vitest';
import { version } from './index';

describe('Svelte Elements', () => {
  it('exports version', () => {
    expect(version).toBe('0.0.0');
  });
});
