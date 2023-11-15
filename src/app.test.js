const greet = require('./app')

test('should to be return Hello, (name in table)', () => {
    const result = greet('Jean-Kevin')
    expect(result).toEqual('Hello, Jean-Kevin.')
}),
    test('should to be return Hello, my friend when array is null', () => {
        const result = greet(null)
        expect(result).toEqual('Hello, my friend.')
    }),
    test('should to be return Hello, my friend when array is undefind ', () => {
        const result = greet(undefined)
        expect(result).toEqual('Hello, my friend.')
    }),
    test('should to be return Hello, my friend when the string in array is empty ', () => {
        const result = greet('     ')
        expect(result).toEqual('Hello, my friend.')
    }),
    test('should to be return HELLO, NAME when the name on upper ', () => {
        const result = greet('KENOBI')
        expect(result).toEqual('HELLO, KENOBI!')
    }),
    test('should to be return Hello, name and second name when we have two name in array ', () => {
        const result = greet(['Kratos', 'Thanathos'])

        expect(result).toEqual('Hello, Kratos and Thanathos.')
    }),
    test('should to be return Hello, name and second name when we have more than two name in array ', () => {
        const result = greet(['Kratos', 'Thanathos', 'Hypnos'])

        expect(result).toEqual('Hello, Kratos, Thanathos and Hypnos.')
    })
test('should to be return Hello, name on lowercase and HELLO name on uppercase when we have one name on upper in this array', () => {
    const result = greet(['KRATOS', 'Thanathos', 'Hypnos'])
    expect(result).toEqual('Hello, Thanathos and Hypnos. AND HELLO KRATOS!')
})
