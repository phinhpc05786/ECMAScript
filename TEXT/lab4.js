// fetch('http://localhost:3000/posts')

//     .then(function (response) {
//         response.json().then(function (data) {
//             resolve(data)
//         });
//     })

//     .catch(function (err) {
//         console.log(err);
//     });


// const demoPromise = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() =>{
//             resolve('xin chào')
//         }, 2000)
//     } )
// }

// demoPromise().then ( (data) => { console.log(data);});

const axios = require('axios');

const API_URL = 'http://localhost:3000/';
// Lấy danh sách
axios.get(API_URL + 'comments').then( ({ data }) => console.log(data))
// Lấy 1 phần tử
axios.get(API_URL + 'comments/' + 1).then( ({ data }) => console.log(data))
let comments = {
    "body": "Bài viết",
    "postID": 1
}

axios.postIDs(comments).then( ({ data }) => console.log(data))