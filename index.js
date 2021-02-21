module.exports.geni = function geni(secret) {
  if (!secret) { //verify if there is a secret
    var secret = 123 //else we asign a default one
  }
  var time = new Date().getTime(); //we generate from the time
  return secret * time //and multiplying with the time so we can't deduce a date from and id
}

module.exports.gens = function gens(secret) {
  if (!secret) { //verify if there is a secret
    var secret = 123 //else we asign a default one
  }
  var i = secret * new Date().getTime(); //we generate from the time and multiply it to the secret so we can't deduce a date from and id
  var a = i.toString().split(''); //we convert the number to an array of numbers
  var f = '' //we create a empty string to modify for later
  for (var i = 0; i < a.length; i++) { //loop to convert the id to a string from the alphabet position of the number
    c = 'abcdefghijklmnopqrstuvwxyz'.charAt(Number(a[i])); //we create a value associated to the letter
    f += c //we add the letter to the string
  }
  return f //we return the final string
}