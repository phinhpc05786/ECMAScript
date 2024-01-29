const API_URL = "https://api.publicapis.org/";

let name = "KIMDANG";
export { name };
export function sum(number1, number2) {
    return number1 + number2;
}
export function minus(number1, number2) {
    return number1 - number2;
}
export * as moduleNe from './'

export class APICaller {
    constructor() {
        console.log("Sayhello");
    }
}

class Post extends APICaller() {
    constructor(url) {
        super();
        console.log(url);
    }
}
export { Post };

export default class User{
    constructor(){
        console.log('dâkdadjldad');
    }
}

// // export{minus}
// export * from './module.js'