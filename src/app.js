const { boolean } = require('yargs')

function greet(names) {
    if (Array.isArray(names)) {
        return handleArray(names)
    }
    if (isIllegalArgument(names)) return 'Hello, my friend.'
    if (isUpper(names)) return 'HELLO, ' + names + '!'

    return 'Hello, ' + names + '.'
}

function handleArray(names) {
    if (names.length === 2)
        return 'Hello, ' + names[0] + ' and ' + names[1] + '.'
    let str = 'Hello'
    let hello = ' AND HELLO '
    let up = false
    for (let index = 0; index < names.length; index++) {
        if (index === names.length - 1) {
            if (up) return str + ' and ' + names[index] + '.' + hello + '!'
            return str + ' and ' + names[index] + '.'
        } else if (isUpper(names[index])) {
            hello += names[index]
            up = true
        } else {
            str += ', ' + names[index]
        }
    }
}
function isIllegalArgument(names) {
    return !names || names.trim() === ''
}
function isUpper(names) {
    return names === names.toUpperCase()
}

module.exports = greet
