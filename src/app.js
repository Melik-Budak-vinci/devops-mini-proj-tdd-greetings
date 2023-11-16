const { boolean } = require('yargs')

function greet(names) {
    if (Array.isArray(names)) {
        const greetInLower = handleArray(filterInLower(names),(names[names.length-1]))
        const filterUpper = filterInUpper(names)

        if (filterUpper.length === 0) {
            return greetInLower
        }
        const greetInUpper = handleArray(filterUpper)
        return greetInLower + greetInUpper
    }
    if (isIllegalArgument(names)) return 'Hello, my friend.'
    if (isUpper(names)) return 'HELLO, ' + names + '!'

    return 'Hello, ' + names + '.'
}

function filterInLower(names) {
    return names.filter((name) => !isUpper(name) && (name !== 'fr' && name !== 'nl'))
}
function filterInUpper(names) {
    return names.filter((name) => isUpper(name) && (name !== 'fr' && name !== 'nl'))
}

function handleArray(names,language) {
    let str = 'Hello'
    let and = ' and '
    let point = '.'
    let comma=', '
    let isUp = isUpper(names[0])
     if(language==='fr'){
        str='Bonjour'
        and=' et '
     }
     if(language==='nl'){
        str='Hallo'
        and=' en '
     }
    if (isUp) {
        lowerToUpper()
    }
    if (names.length === 1) {
        return str + comma + names[0] + point
    }
    for (let index = 0; index < names.length; index++) {
        if (index === names.length - 1) {
            return str + and + names[index] + point
        } else if (index>0) {
            str += ', ' + names[index]
        } else {
            str += comma + names[index]
        }
    }

    function lowerToUpper() {
        str = and.toUpperCase() + str.toUpperCase()
        and = and.toUpperCase()
        point = '!'
        comma=" "
    }
}
function isIllegalArgument(names) {
    return !names || names.trim() === ''
}
function isUpper(names) {
    return names === names.toUpperCase()
}

module.exports = greet
