const text = "Hola Mundo";

test('Jest is working correctly', () => {
    expect(text).toMatch(/Mundo/);
})
