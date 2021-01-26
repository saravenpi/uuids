# uuids

This is a node.js package to generate unique string or int ids


## How to use it:

```js
const uuids = require("uuids")
var int_id = uuids.geni() //to generate an unique number as id
var string_id = uuids.gens() //to generate an unique string as id
var secret_int_id = uuids.geni(5656) //gen an unique int with a number to improve randomness
var secret_string_id = uuids.gens(5656) //gen an unique string with a number to improve randomness

console.log(int_id)
console.log(string_id)
console.log(secret_int_id)
console.log(secret_string_id)
}
```

## Some other ways to use it:

```js
const { geni } = require("uuids") //to only import the int generator
var int_id = geni(78915) //generating a unique random int
console.log(int_id)
}
```

```js
const { gens } = require("uuids") //to only import the string generator
var string_id = gens(78915) //generating a unique random string
console.log(string_id)
}
```
