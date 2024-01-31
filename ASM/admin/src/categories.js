fetch("http://localhost:3000/categories")
  .then(function (response) {
    response.json().then(function (data) {
      // console.log(data);

      let array = data;
      let listCategory = document.getElementById("listCategory");
      let child_html = `<thead>
      <tr>
        <th class="border w-1/6 px-4 py-2">ID</th>
        <th class="border w-1/6 px-4 py-2">Name</th>
        <th class="border w-1/7 px-4 py-2"></th>
      </tr>
    </thead>
    <tbody>`;

      array.forEach((element) => {
        child_html += `
        <tr>
        <td class="border px-4 py-2">${element.id}</td>
        <td class="border px-4 py-2">${element.name}</td>

        <td class="border px-4 py-2">
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
      listCategory.innerHTML = child_html;
    });
  })

  .catch(function (err) {
    console.log(err);
  });
