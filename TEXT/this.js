// let ojb = {
//     fullname: "Phi",
//     age: 20,
//     city: "Cần Thơ",
//     playGame: function (){console.log(this.name + " is playing game.", this);}
//     ,cooking: () => {console.log(this.fullname)}
// }

// ojb.name = "Đăng";

// ojb.cooking();

// function helloWord(button){
//     button.setAttribute("attribute-name", "hello");
//     console.log(button.getAttribute("attribute-name"));
// }

const increment = (number, value) => {
    value = typeof value !== "undefined" ? value : 1;
    return (number + value)}

    console.log(increment(5));