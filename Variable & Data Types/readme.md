# Variables in JS
Variables are containers for data


## Variable Rules 

* Variable names are case sensitive; "a" & "A" is different.
* Only letters, digits, underscore ( _ ) and $ is allowed.(not even space)
* Only a letter, underscore ( _ ) or $ should be 1st character.
* Reserved word cannot be variable names.

### let,const & var

var(old choice) : Variable can be re-declared & updated. A global scope variable.
>(but now we don't use var to define our variable)
```
**Example:** 
var name = "tony stark";
console.log(name);
```
let : Variable cannot be re-declared but can be updated. A block scope variable.


const : Variable cannot be re-declared or updated. A block scope variable.