fetch("http://localhost:3000/orders")
  .then(function (response) {
    response.json().then(function (data) {
      // console.log(data);

      let array = data;
      let listOrder = document.getElementById("listOrder");
      let child_html = `<thead>
      <tr>
        <th class="border w-1/6 px-4 py-2">Customer_name</th>
        <th class="border w-1/6 px-4 py-2">Phone_number</th>
        <th class="border w-1/7 px-4 py-2">Email</th>
        <th class="border w-1/6 px-4 py-2">Created_date</th>
        <th class="border w-1/7 px-4 py-2"></th>
      </tr>
    </thead>
    <tbody>`;

      array.forEach((element) => {
        child_html += `
        <tr>
        <td class="border px-4 py-2">${element.customer_name}</td>
        <td class="border px-4 py-2">${element.customer_phone_number}</td>
        <td class="border px-4 py-2">${element.customer_email}</td>
        <td class="border px-4 py-2">${element.created_date}</td>

        <td class="border px-4 py-2">
            <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                    <i class="fas fa-eye"></i></a>
            <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                    <i class="fas fa-trash"></i>
            </a>
        </td>
    </tr>
            `;
      });
      child_html += `</tbody>`;
      listOrder.innerHTML = child_html;
    });
  })

  .catch(function (err) {
    console.log(err);
  });
