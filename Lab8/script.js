import { productService } from "./model.js";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(major) {
    super(name, age);
    this.major = major;
  }
}

// cau2
let arr = [10, 11, 0, 3, 5, 3, 1, 8, 23, 53];
let ss = (arr) => {
  let newArray = [];
  let i = 0;

  arr.forEach(function () {
    if (arr[i] > 10) {
      newArray.push(arr[i]);
    }
    i++;
  });
  return newArray;
};
console.log(ss(arr));

// câu 3

fetch("https://659403061493b0116069b736.mockapi.io/student")
  .then(function (response) {
    response.json().then(function (data) {
      let array = data;
      let theP = document.getElementById("listProducts");
      let child_html = ``;

      array.forEach((element) => {
        child_html += `
                  <tr>
                    <td class="border px-4 py-2">${element.name}</td>
                    <td class="border px-4 py-2"><img src="${element.avatar}" width="30" height="30" alt=""></td>
                    <td class="border px-4 py-2">${element.id}</td>
                    <td class="border px-4 py-2">${element.detail}</td>
                    <td class="border px-4 py-2">
                    <input value="Xóa" class="delete" data-id="${element.id}" type="button">
                    </td>
                  </tr>
                `;
      });

      child_html += ``;
      theP.innerHTML = child_html;

      document.querySelector("#addPro").onclick = async function () {
        try {
          const name = document.querySelector("#name").value;
          const img = document.querySelector("#img").value;
          const detail = document.querySelector("#detail").value;

          if (
            document.querySelector("#img").files &&
            document.querySelector("#img").files[0]
          ) {
            const file = document.querySelector("#img").files[0];

            // Lấy tên tệp tin
            const fileName = file.name;

            // Lấy đường dẫn (URL) của tệp tin sử dụng URL.createObjectURL
            const img = URL.createObjectURL(file);
          }

          const id =
            array.length > 0 ? parseInt(array[array.length - 1].id) + 1 : 1;

          const pro = {
            id: id.toString(),
            name: name,
            img: img,
            detail: detail,
          };

          await productService.addData(pro);

          document.getElementById("myModal").style.display = "none";

          location.reload(true);
        } catch (error) {
          console.error(error.message);
        }
      };
    });
    document
      .querySelector("tbody")
      .addEventListener("click", async function (e) {
        if (e.target.classList.contains("delete")) {
          const id = e.target.getAttribute("data-id");
          if(confirm("Bạn có chắc chắn muốn xóa không")){
            await productService.deleteData(id);
            location.reload(true);
          }
        } else {
          console.log("Delete error");
        }
        
      });
  })

  .catch(function (err) {
    console.log(err);
  });
