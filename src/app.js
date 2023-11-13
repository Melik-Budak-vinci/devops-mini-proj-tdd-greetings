function greet(names) {
    if(Array.isArray(names))return "Hello, "+names[0]+" and "+names[1]+".";
    if (!names || names.trim() === '') return 'Hello, my friend.';
    if (names === names.toUpperCase()) return 'HELLO, ' + names + '!'
    
    return 'Hello, ' + names + '.'
}
module.exports = greet
