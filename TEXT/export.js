export let hovaten = "coppy bài 0 điểm;"

export let tenlop = "WE18301";

export const login = () => {
    console.log("login successful");
}

export default class Register {
    constructor(hovaten, tenlop) {
        this.hovaten = hovaten;
        this.tenlop = tenlop;
}

updateUser(){
    this.hovaten = 10
} }