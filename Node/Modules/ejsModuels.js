export const pi = 3.14;

export function greet(name) {
    return `Hello ${name}!`;
}

export const add = (a,b) => {
    return a+b;
}

export const settings = {
    darkMode : true,
    lang : 'en'
}

export class User {
    constructor(name) {
        this.name = name;
    }
}

export function empty() {
    console.log("Empty");
}

const str = "i am a default export";
export default str;