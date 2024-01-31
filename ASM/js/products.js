

fetch("http://localhost:3000/products")

    .then(function (response) {
        response.json().then(function (data) {
            // console.log(data);

            let array = data;
            let theP = document.getElementById('products');
            let child_html = `<div class="row g-4 justify-content-center">`;

            array.forEach(element => {
                child_html += `
                <div class="col-md-6 col-lg-6 col-xl-4">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img">
                        <img src="${element.image}" class="img-fluid w-100 rounded-top" alt="">
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${data.cate_id}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4 class="nameProduct">${element.name}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$ <p class="price" > ${element.price}</p></p>
                            <button href="" onclick="cart(this)" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                        </div>
                    </div>
                </div>
                </div>
            `;
            });
            child_html += `<div class="col-12">
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
            theP.innerHTML = child_html;
        });
    })

    .catch(function (err) {
        console.log(err);
    });