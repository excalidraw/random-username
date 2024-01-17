import { getRandomUsername } from '../src';

describe('getRandomUsername', () => {
  it('get a string', () => {
    expect(typeof getRandomUsername()).toBe('string');
  });
});
