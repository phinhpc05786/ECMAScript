let name1 = "Phi Nèk";
let birthday1 = new Date('2004-01-19');
let day = new Date();
// Tính toán số mili giây chênh lệch giữa hai ngày
var millisecondsDiff = day - birthday1;
// Chuyển đổi từ mili giây sang số ngày
var daysDiff = Math.floor(millisecondsDiff / 8.64e7);

let sayHello = () => {
    console.log(`My tiktok name is ${name1}. I'm ${birthday1}.`);
    document.write(`<h4>My tiktok name is ${name1}.<br> I'm ${birthday1}.<br> Congratulations on living for <b style = "color: red">${daysDiff}</b> days! </h4>`);
}

let name2 = 'Mười';
let birthday2 = 'Đỉm';

let sayHello2 = () => {
    console.log(`I'm like ${name2} ${birthday2}.`);
    document.write(`<h4>My tiktok name is ${name2}.<br> I'm ${birthday2}.<br> Congratulations on living for <b style = "color: red">${daysDiff}</b> days! </h4>`);
}

sayHello();
sayHello2();