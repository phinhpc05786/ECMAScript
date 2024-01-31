// fetch("http://localhost:3000/categories")
// .then(function (response) {
//   return response.json();
// })
// .then(function (categories) {
//   // Hiển thị danh sách danh mục
//   displayCategories(categories);

//   // Lấy sản phẩm theo danh mục đầu tiên (có thể chọn danh mục khác theo nhu cầu)
//   const firstCategory = categories[0];
//   return fetch(`http://localhost:3000/products?category=${firstCategory.id}`);
// })
// .then(function (response) {
//   return response.json();
// })
// .then(function (products) {
//   // Hiển thị danh sách sản phẩm
//   displayProducts(products);
// })
// .catch(function (err) {
//   console.log(err);
// });

// // Hàm hiển thị danh sách danh mục
// function displayCategories(categories) {
// let listCategory = document.getElementById("listCategory");
// let child_html = `<div class="mb-3">
//   <h4>Categories</h4>
//   <ul class="list-unstyled fruite-categorie">`;

// categories.forEach((element) => {
//   child_html += `
//     <li>
//       <div class="d-flex justify-content-between fruite-name">
//         <a href="#" data-id="${element.id}" onclick="getProductsByCategory(this)">
//           <i class="fas fa-apple-alt me-2"></i>${element.name}
//         </a>
//       </div>
//     </li>`;
// });

// child_html += `</ul>
//   </div>`;
// listCategory.innerHTML = child_html;
// }

// // Hàm hiển thị danh sách sản phẩm
// function displayProducts(products) {
// let productList = document.getElementById('products');
// let child_html = `<div class="row g-4 justify-content-center">`;

// products.forEach(element => {
//   child_html += `
//     <div class="col-md-6 col-lg-6 col-xl-4">
//       <div class="rounded position-relative fruite-item">
//         <div class="fruite-img">
//           <img src="${element.image}" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${element.cate_id}</div>
//         <div class="p-4 border border-secondary border-top-0 rounded-bottom">
//           <h4>${element.name}</h4>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//           <div class="d-flex justify-content-between flex-lg-wrap">
//             <p class="text-dark fs-5 fw-bold mb-0">$ ${element.price}</p>
//             <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// });

// child_html += `</div>`;
// productList.innerHTML = child_html;
// }

// // // Hàm lấy sản phẩm theo danh mục
// // function getProductsByCategory(element) {
// // const categoryId = element.getAttribute("data-id");
// // fetch(`http://localhost:3000/products?category=${categoryId}`)
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (products) {
// //     displayProducts(products);
// //   })
// //   .catch(function (err) {
// //     console.log(err);
// //   });
// // }