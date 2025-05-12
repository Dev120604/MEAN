const pi = 3.14;

const settings = {
    darkMode : true,
    lang : 'en'
};

function greet(name) {
    return `Hello ${name}!`;
}

const add = (a,b) => {
    return a+b;
}

class User {
    constructor(name) {
        this.name = name;
    }
}

function empty() {
    console.log("Empty");
    // return "Empty";
}

module.exports = {pi , greet , add , User , empty , settings};