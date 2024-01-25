console.log("--------Bai1---------");

let promise = new Promise((resolve, reject) => {
    resolve(1);
    setTimeout(() => {
        resolve(2)
    }, 1000);
})

// promise.then(alert)

// Kết quả trả về = 1