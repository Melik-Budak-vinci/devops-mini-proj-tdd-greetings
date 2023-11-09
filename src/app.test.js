const greet = require('./app')

test('should to be return one name in table', () => {
    const result = greet([])
    expect(result).toEqual([])
})
