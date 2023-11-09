function greet(names) {
  if(!names || names.trim()===""){
    return "Hello, my friend."
  }
    return "Hello, "+names+'.'
}
module.exports = greet
