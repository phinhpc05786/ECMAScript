// import * as lab6 from "./export.js";
// console.log(lab6.hovaten);

import Register, { hovaten, tenlop, login} from "./export.js";
console.log(hovaten);
console.log(tenlop);

// login()

let user1 = new Register("phan văn tèo", "ten lớp");

console.log(user1);
user1.getUser()