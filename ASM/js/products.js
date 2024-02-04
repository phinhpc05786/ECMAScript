import { productService } from "../admin/src/model/modelPro.js";
fetch("http://localhost:3000/products")
  .then(function (response) {
    response.json().then(function (data) {
      let array = data;
      let thediv = document.getElementById("products");
      let chtml = `<div class="row g-4 justify-content-center">`;

      array.forEach((element) => {
        chtml += `
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                                <img src="${element.image}" class="img-fluid w-100 rounded-top" alt="">
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${element.cate_id}</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4 class="nameProduct">${element.name}</h4>
                                <p>${element.detail}</p>
                                <div class="d-flex justify-content-between flex-lg-wrap">
                                    <p class="text-dark fs-5 fw-bold mb-0">$ <span class="price">${element.price}</span></p>
                                    <a data-id="${element.id}" class="btn_buy btn border border-secondary rounded-pill px-3 text-primary">
                                        <i data-id="${element.id}" class="btn_buy fa fa-shopping-bag me-2 text-primary"></i> Add cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
      });
      chtml += `</div><!-- Phần phân trang và kết thúc div container --><div class="col-12">
                                <div class="pagination d-flex justify-content-center mt-5">
                                    <a href="#" class="rounded">&laquo;</a>
                                    <a href="#" class="active rounded">1</a>
                                    <a href="#" class="rounded">2</a>
                                    <a href="#" class="rounded">3</a>
                                    <a href="#" class="rounded">4</a>
                                    <a href="#" class="rounded">5</a>
                                    <a href="#" class="rounded">6</a>
                                    <a href="#" class="rounded">&raquo;</a>
                                </div>
                            </div>
                        </div>`;
        thediv.innerHTML = chtml;
    });
  })
  .catch(function (err) {
    console.log(err);
  });

  document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("btn_buy")) {
      console.log(localStorage);
        const id = e.target.getAttribute("data-id");
        const product = await productService.getDataById(id);
        
        // Lấy giá trị từ localStorage
        const storedCart = localStorage.getItem("cart");

        // Kiểm tra giá trị trước khi thực hiện JSON.parse
        const cart = storedCart ? JSON.parse(storedCart) : [];

        const index = cart.findIndex((item) => item.id == product.id);
        if (index === -1) {
            product.qty = 1;
            cart.push(product);
        } else {
            cart[index].qty += 1;
        }

        // Lưu mảng cart vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(localStorage.getItem("cart"));
        alert('Added successfully');
    }
});






