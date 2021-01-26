module.exports.geni = function geni(secret) {
    if (!secret) {
      var secret = 123
    }
    var time = new Date().getTime();
    return secret * time
}

module.exports.gens = function gens(secret) {
  if (!secret) {
    var secret = 123
  }
  var i =  secret * new Date().getTime();
  var a = i.toString().split('');
  var f = ""
  for (var i = 0; i < a.length; i++) {
    char='abcdefghijklmnopqrstuvwxyz'.charAt(Number(a[i]));
    f += char
  }
  return f
}
