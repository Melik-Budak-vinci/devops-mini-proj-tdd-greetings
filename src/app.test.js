const greet = require('./app')

test('should to be return Hello, (name in table)', () => {
  const result = greet(['Jean-Kevin'])
  expect(result).toEqual("Hello, Jean-Kevin.")
}),
test('should to be return Hello, my friend when array is null', () => {
  const result = greet(null)
  expect(result).toEqual("Hello, my friend.")
}),
test('should to be return Hello, my friend when array is undefind ', () => {
  const result = greet(undefined)
  expect(result).toEqual("Hello, my friend.")
})
