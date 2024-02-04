let array = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem(localStorage.getItem("cart")))
  : [];
function cart() {
  let theTd = document.getElementById("checkout");

  if (localStorage.getItem("cart")) {
    let array = JSON.parse(localStorage.getItem("cart"));
    let child_html = ``;

    array.forEach((e, index) => {
      child_html += `
          <tr>
          <th scope="row">
              <div class="d-flex align-items-center mt-2">
                  <img src="${
                    e.image
                  }" class="img-fluid rounded-circle" style="width: 90px; height: 90px;" alt="">
              </div>
          </th>
          <td class="py-5">${e.name}</td>
          <td class="py-5">$${e.price}</td>
          <td class="py-5">${e.qty}</td>
          <td class="py-5">$${e.qty * e.price}</td>
      </tr>`;
    });

    theTd.innerHTML = child_html; // Thay đổi thành gán innerHTML một lần, không phải thêm vào mỗi vòng lặp
  }
}

cart();
// tổng
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
console.log(sum);
document.getElementById("sumMoney").innerHTML = sum.toFixed(2) + " $";

// end tổng

// check out

document
  .querySelector("#checkoutBtn")
  .addEventListener("click", async function (event) {
    try {
      event.preventDefault(); // Prevent the default form submission

      let orderId; // Biến để lưu ID của đơn hàng
      let customerId; // Biến để lưu ID của khách hàng

      // Get information from input fields
      const nameInput = document.querySelector('input[name="name"]');
      const addressInput = document.querySelector('input[name="address"]');
      const mobileInput = document.querySelector('input[name="mobile"]');
      const emailInput = document.querySelector('input[name="email"]');
      const currentTime = new Date();

      // Lấy ngày tháng năm, giờ, phút và giây
      const formattedDateTime = currentTime.toLocaleString();
      // Check if input fields exist before reading values
      const name = nameInput ? nameInput.value : "";
      const address = addressInput ? addressInput.value : "";
      const mobile = mobileInput ? mobileInput.value : "";
      const email = emailInput ? emailInput.value : "";

      // Get cart information from Local Storage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Create an order object
      const order = {
        name: name,
        address: address,
        mobile: mobile,
        email: email,
        date: formattedDateTime,
        cart: cart,
        customer: {},
        order_details: [],
      };

      // Thêm các order_detail vào đối tượng đơn hàng
      cart.forEach((cartItem, index) => {
        const orderDetail = {
          product_id: cartItem.product_id,
          quantity: cartItem.quantity,
          unit_price: cartItem.unit_price,
          id: `order_detail_${index + 1}`,
        };
        order.order_details.push(orderDetail);
      });

      // Send the order to the server
      const response = await axios.post("http://localhost:3000/orders/", order);
      orderId = response.data.id; // Get the order ID from the server

      // Tạo ID cho khách hàng bằng cách kết hợp orderId và một số index
      customerId = `${orderId}_customer`;
      order.customer.id = customerId;

      // Thêm trường id tăng dần bắt đầu từ phần tử cuối của mảng order_details
      order.order_details.forEach((orderDetail, index) => {
        orderDetail.id = `${orderId}_${index + 1}`;
      });

      // Send the updated order back to the server
      await axios.put(`http://localhost:3000/orders/${orderId}`, order);

      // Get the list of orders from Local Storage (if any)
      const ordersArray = JSON.parse(localStorage.getItem("orders")) || [];

      // Add the new order to the list
      ordersArray.push(order);

      // Save the updated orders array to Local Storage
      localStorage.setItem("orders", JSON.stringify(ordersArray));

      // Remove cart information if needed
      localStorage.removeItem("cart");

      window.location.href = "./chucMung.html";
    } catch (error) {
      console.error(error);
    }
  });
