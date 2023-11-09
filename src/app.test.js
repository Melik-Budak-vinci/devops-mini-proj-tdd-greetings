const greet = require('./app')

test('should to be return one name in table', () => {
  const result = greet(['Jean-Kevin'])
  expect(result).toEqual("Hello, Jean-Kevin")
})
