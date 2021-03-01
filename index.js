var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
module.exports.geni = function geni(secret) {
  if (!secret) { //verify if there is a secret option
    secret = 123 //else we asign a default one
  }
  if (typeof secret === 'string' || secret instanceof String) { //if the secret is a string
    var a = secret.split(''); //we convert the string to an array of letters
    secret = 1 //reset the secret variable
    for (var i = 0; i < a.length; i++) { //we'll generate the new secret from the string
      if (char.includes(a[i])) {
        c = char.indexOf(a[i]) //we take the corresponding number for each letter
        secret = secret * c //we add it to the new secret in int type
      } else { //if not in our char
        secret = secret * 1 //we leave it like this
      }
    }
  }
  var time = new Date().getTime(); //we generate from the time
  return secret * time //and multiplying with the time so we can't deduce a date from and id
}

module.exports.gens = function gens(secret) {
  if (!secret) { //verify if there is a secret option
    secret = 123 //else we asign a default one
  }
  if (typeof secret === 'string' || secret instanceof String) { //if the secret is a string
    var a = secret.split(''); //we convert the string to an array of letters
    secret = 1 //reset the secret variable
    for (var i = 0; i < a.length; i++) { //we'll generate the new secret from the string
      if (char.includes(a[i])) {
        c = char.indexOf(a[i]) //we take the corresponding number for each letter
        secret = secret * c //we add it to the new secret in int type
      } else { //if not in our char
        secret = secret * 1 //we leave it like this
      }
    }
  }
  var i = secret * new Date().getTime(); //we generate from the time and multiply it to the secret so we can't deduce a date from and id
  var a = i.toString().split(''); //we convert the number to an array of numbers
  var f = '' //we create a empty string to modify for later
  for (var i = 0; i < a.length; i++) { //loop to convert the id to a string from the char position of the number
    c = char.charAt(Number(a[i])); //we create a value associated to the letter
    f += c //we add the letter to the string
  }
  return f //we return the final string
}