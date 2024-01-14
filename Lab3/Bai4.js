
console.log("--------Bài 4-----------");
const convertTemperature = (temperature, unit) => {
    if(unit == "C"){
        unit = (temperature * 9/5) + 32;
        console.log(`Giá trị quy đổi là: ${temperature} C = ${unit} F`);
    } else if(unit == "F"){
        unit = (temperature - 32) * 5/9;
        console.log(`Giá trị quy đổi là: ${temperature} F = ${unit} C`);
    } else {
        console.log("Tham số truyền vào không phải C hoặc F");
    }
    
}

convertTemperature(30, "C");
convertTemperature(30, "F");
convertTemperature(30, "a");