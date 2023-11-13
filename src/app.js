function greet(names) {
    if(Array.isArray(names)){
        if(names.length===2)return "Hello, "+names[0]+" and "+names[1]+".";
        let str='Hello'
        for (let index = 0; index < names.length; index++) {
            if(index===names.length-1){
                return str+" and "+names[index]+'.'
            }
            str+= ", "+names[index];   
        }
    }
    if (!names || names.trim() === '') return 'Hello, my friend.';
    if (names === names.toUpperCase()) return 'HELLO, ' + names + '!'

    return 'Hello, ' + names + '.'
}
module.exports = greet
