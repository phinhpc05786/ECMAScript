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

axios.get('http://localhost:3000/posts')
  .then ( (data) => {
    console.log(data.data);
  })