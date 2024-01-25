console.log("--------Bai2---------");

// const axios = require('axios');

// 1. Lấy dữ liệu tuần tự
async function fetchUrls(urls){
    const results = [];
    for (const url of urls){
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

// Hàm này sử dụng một vòng lặp for...of để lặp qua mỗi URL trong mảng urls.
// Đối với mỗi URL, nó sử dụng await axios.get(url) để thực hiện yêu cầu HTTP và đợi cho đến khi nó hoàn tất trước khi chuyển sang URL tiếp theo.
// Dữ liệu từ mỗi yêu cầu được đưa vào mảng results theo thứ tự tuần tự.

// 2.Lấy dữ liệu song song
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
    return results;
}

// Hàm này sử dụng Promise.all để thực hiện nhiều yêu cầu HTTP cùng một lúc.
// Sử dụng phương thức map để tạo ra một mảng các promises, mỗi promise là kết quả của việc gọi axios.get(url) cho mỗi URL trong mảng urls.
// Promise.all đợi cho tất cả các promises hoàn tất và trả về một mảng chứa kết quả của tất cả các yêu cầu.