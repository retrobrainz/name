import { name } from '.';

describe('name', () => {
  it('normal', async () => {
    expect(name('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(name('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
