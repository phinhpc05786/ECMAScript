function cart() {
  // Lấy tất cả các phần tử có class là "nameProduct" và "price"
  let nameProducts = document.getElementsByClassName("nameProduct");
  let prices = document.getElementsByClassName("price");

  if (nameProducts.length > 0 && prices.length > 0) {
    var name = nameProducts[0].innerHTML;
    var price = prices[0].innerHTML;
    console.log(name, price);

    if (name.trim() !== "" && price.trim() !== "") {
      sessionStorage.setItem("nameProduct", name);
      sessionStorage.setItem("price", price);
      console.log("Dữ liệu đã được lưu vào sessionStorage.");
    } else {
      console.log("Vui lòng nhập dữ liệu trước khi lưu.");
    }
  } else {
    console.log("Không tìm thấy phần tử có class 'nameProduct' hoặc 'price'.");
  }
}

if (sessionStorage.getItem("nameProduct") && sessionStorage.getItem("price")) {
    let theTd = document.getElementById("cartPro");
  
    let name = sessionStorage.getItem("nameProduct");
    let price = sessionStorage.getItem("price");

    let child_html = `
        <tr>
            <td>
                <th scope="row">
                    <div class="d-flex align-items-center">
                        <img src="img/vegetable-item-3.png" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                    </div>
                </th>
                <td>
                    <p class="mb-0 mt-4">${name}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4">${price} $</p>
                </td>
                <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                        <i class="fa fa-times text-danger"></i>
                    </button>
                </td>
            </tr>`;

    theTd.innerHTML = child_html;
}

