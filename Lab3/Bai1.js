console.log("--------Bài 1-----------");
const multiply = (num1, num2) => {return num1 * num2;}

const toCelsius = (fahrenheit) => {return (5/9) * (fahrenheit - 32)}

const padZeros = (num, totallen) => {
    let numStr = num.toString();
    let numZeros = totallen - numStr.length;
    for(var i = 1; i < numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

const power = (base, exponent) => {
    var result = 1;
    for(var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

const greet = who => {console.log("Hello" + who);}

console.log(multiply(1,2), toCelsius(4), padZeros(3,7), power(4,5));

greet(8)


