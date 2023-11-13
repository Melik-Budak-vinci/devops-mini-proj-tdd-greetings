function greet(names) {
    if (!names || names.trim() === '') {
        return 'Hello, my friend.'
    }
    if (names === names.toUpperCase()) return 'HELLO, ' + names + '!'
    return 'Hello, ' + names + '.'
}
module.exports = greet
