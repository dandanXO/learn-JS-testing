const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('DAN',23);
    expect(text).toBe('DAN (23 years old)');
});