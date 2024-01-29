fetch("http://localhost:3000/products")
  .then(function (response) {
    response.json().then(function (data) {
      // console.log(data);

      let array = data;
      let listProducts = document.getElementById("listProducts");
      let child_html = `<thead>
      <tr>
        <th class="border w-1/6 px-4 py-2">Name</th>
        <th class="border w-1/6 px-4 py-2">Image</th>
        <th class="border w-1/7 px-4 py-2">Price</th>
        <th class="border w-1/8 px-4 py-2">Category</th>
        <th class="border w-1/6 px-4 py-2">Detail</th>
        <th class="border w-1/7 px-4 py-2"></th>
      </tr>
    </thead>
    <tbody >`;

    function fetchCategoryDetails(categoryId) {
      return fetch(`http://localhost:3000/categories/${categoryId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Không thể lấy thông tin danh mục cho ID ${categoryId}: ${response.statusText}`);
          }
          return response.json();
        })
        .then(categoryData => categoryData.name)
        .catch(error => {
          console.error(error.message);
          return 'N/A';
        });
    }

    Promise.all(array.map(element => fetchCategoryDetails(element.cate_id)))
    .then(categoryNames => {
      array.forEach((element, index) => {
        child_html += `
          <tr>
            <td class="border px-4 py-2">${element.name}</td>
            <td class="border px-4 py-2"><img src="${element.image}" width="30" height="30" alt=""></td>
            <td class="border px-4 py-2">${element.price}</td>
            <td class="border px-4 py-2">${categoryNames[index]}</td>
            <td class="border px-4 py-2">${element.detail}</td>
            <td class="border px-4 py-2">
              <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                <i class="fas fa-eye"></i>
              </a>
              <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                <i class="fas fa-edit"></i>
              </a>
              <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                <i class="fas fa-trash"></i>
              </a>
            </td>
          </tr>
        `;
      });
      child_html += `</tbody>`;
      listProducts.innerHTML = child_html;
    });
});
})

  .catch(function (err) {
    console.log(err);
  });

  
