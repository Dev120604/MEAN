const slugify = require('slugify');

let a = slugify('some string');
console.log(a);

let b = slugify('some st&&*(^%$$^^&ring');
console.log(b);