import { describe, it, expect } from 'vitest';
import { version } from './lib/elements-angular';

describe('@unlayer/angular-elements', () => {
  it('should export version as a string', () => {
    expect(version).toBeDefined();
    expect(typeof version).toBe('string');
    expect(version).toBe('0.0.0');
  });
});
