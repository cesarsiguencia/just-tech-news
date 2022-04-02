const { format_date , format_plural, format_url } = require('../utils/helpers');


test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns a pluralized word', () => {
    const word = ("Tiger")
    const amount = ("2")

    expect(format_plural(word, amount)).toBe("Tigers")
})

test('format_url() returns a simplified url string', () => {
    const url1 = 'http://test.com/page/1';
    const url2 = 'https://www.coolstuff.com/abcdefg/';
    const url3 = 'https://www.google.com?q=hello';
  
    expect(format_url(url1)).toBe('test.com');
    expect(format_url(url2)).toBe('coolstuff.com');
    expect(format_url(url3)).toBe('google.com');
});