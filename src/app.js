const { boolean } = require('yargs')

function greet(names) {
    if (Array.isArray(names)) {
        const greetInLower = handleArray(names.filter(name => !isUpper(name)));
        const greetInUpper = handleArray(names.filter(name => isUpper(name)));
        if(!greetInUpper){
            return greetInLower;
        }
        return greetInLower+greetInUpper;
    }
    if (isIllegalArgument(names)) return 'Hello, my friend.'
    if (isUpper(names)) return 'HELLO, ' + names + '!'

    return 'Hello, ' + names + '.'
}

function handleArray(names) {
    let str = 'Hello';
    for (let index = 0; index < names.length; index++) {
        if (index === names.length - 1) {
            if(isUpper(names[index])){
                return ' AND HELLO '+names[index]+'!'
            }
            return str + ' and ' + names[index] + '.'
        }else {
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