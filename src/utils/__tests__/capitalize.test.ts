import { capitalize } from '../capitalize';

describe('capitalize util', () => {
  it('should not crash for empty string', () => {
    expect(capitalize('')).toBe('');
  });
  it('should capitalize single letter string', () => {
    expect(capitalize('a')).toBe('A');
  });
  it('should capitalize string', () => {
    expect(capitalize('some string')).toBe('Some string');
    expect(capitalize('Some string')).toBe('Some string');
  });
});
