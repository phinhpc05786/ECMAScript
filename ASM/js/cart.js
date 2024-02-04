console.log(localStorage.getItem("cart"));
let array = localStorage.getItem("cart")? JSON.parse(localStorage.getItem(localStorage.getItem("cart"))): [];
function cart() {
    if (localStorage.getItem("cart")) {
      let theTd = document.getElementById("cartPro");
      let array = JSON.parse(localStorage.getItem("cart"));
  
      array.forEach((e, index) => {
        let child_html = `
          <tr>
                  <td>
                  <p class="mb-0 mt-4">${index + 1}</p>
                  </td>
                  <td>
                  <img src="${e.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                  </td>
                  <td>
                      <p class="mb-0 mt-4">${e.name}</p>
                  </td>
                  
                  <td>
                      <p class="mb-0 mt-4">${e.price} $</p>
                  </td>
                  <td>
                      <p class="mb-0 mt-4">${e.qty}</p>
                  </td>
                  <td>
                      <p class="mb-0 mt-4">${e.qty * e.price} $</p>
                  </td>
                  <td>
                      <a data-id="${e.id}" class=" delPro btn btn-md rounded-circle bg-light border mt-4">
                          <i data-id="${e.id}" class="delPro fa fa-times text-danger"></i>
                      </a>
                  </td>
              </tr>`;
              theTd.innerHTML += child_html;
      });
    }
        
  }
  cart();
  let sum = 0;
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
  cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price);
      const itemQty = parseInt(item.qty, 10);
  
      if (!isNaN(itemPrice) && !isNaN(itemQty)) {
          sum += itemPrice * itemQty;
      } else {
          console.error("Invalid price or quantity for item:", item);
      }
  });
  
  document.getElementById('sumMoney').innerHTML = sum.toFixed(2);
  

  
  //xóa pro cart
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delPro')) {
        const id = e.target.getAttribute('data-id');
        
        let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy mảng từ localStorage

        const index = cart.findIndex(item => item.id == id);
        if (index !== -1) {
            cart.splice(index, 1); // Xóa phần tử khỏi mảng

            localStorage.setItem('cart', JSON.stringify(cart)); // Lưu mảng mới vào localStorage
            window.location.reload(); // Làm mới trang
        }
    }
});
