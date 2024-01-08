console.log("-------------Bài 1---------");
const result = {
    conVat: ["Trâu", "Heo", "Thỏ"],
    doDung: ["Lược", "Kéo", "Dao"],
    Name: ["Phi", "Nguyễn", "Hoàng"]
}

function makeList(arr){
    const failreItem = [];

    arr.forEach(element => {
        failreItem.push(`<li class="text-warning">${element}</li>`);
    });

    return failreItem;
}

const failureList = makeList(result.conVat);
console.log(failureList);