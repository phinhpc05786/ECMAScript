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
                    <input value="Sửa" class="openEditPage" data-id="${element.id}" type="submit">
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


  // Open the edit page for a category
document.querySelector("tbody").addEventListener("click", function (event) {
  if (event.target.classList.contains("openEditPage")) {
    const id = event.target.getAttribute("data-id");

    productService.getDataById(id).then(function (category) {
      const editModal = document.getElementById("editModal");

      editModal.style.display = "block";

      editModal.innerHTML = createEditForm(category);

      const closeSpan = editModal.querySelector(".close");
      closeSpan.addEventListener("click", function () {
        editModal.style.display = "none";
      });


    }).catch(function (error) {
      console.error("Error fetching category or creating form:", error.message);
    });
  } else {
    console.log("error r");
  }
});

async function displayEditForm(category) {
  const editModal = document.getElementById("editModal");

  editModal.style.display = "block";

  const form = createEditForm(category);
  editModal.innerHTML = form;

  const closeSpan = editModal.querySelector(".close");
  closeSpan.addEventListener("click", function () {
    editModal.style.display = "none";
  });

  // Lấy và điền các danh mục
  const selectElement = document.getElementById("categorySelect");
  try {
    const response = await fetch("https://659403061493b0116069b736.mockapi.io/student/");
    if (!response.ok) {
      throw new Error("Không thể lấy danh mục: " + response.statusText);
    }

    const categories = await response.json();

    // Thêm option cho mỗi danh mục
    categories.forEach(function (category) {
      const option = document.createElement("option");
      option.value = category.cate_id;
      option.text = category.name;
      selectElement.add(option);
    });

    // Chọn danh mục tương ứng với sản phẩm
    selectElement.value = category.cate_id;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error.message);
  }
}

// Xử lý khi click vào sản phẩm để hiển thị biểu mẫu chỉnh sửa
document.querySelector("tbody").addEventListener("click", async function (e) {
  if (e.target.classList.contains("openEditPage")) {
    const id = e.target.getAttribute("data-id");

    productService.getDataById(id).then(function (category) {
      displayEditForm(category);
    }).catch(function (error) {
      console.error("Lỗi khi lấy sản phẩm hoặc tạo biểu mẫu:", error.message);
    });
  } else {
    console.log("Lỗi");
  }
});

// Xử lý sự kiện khi người dùng nhấn nút "Edit category" trong biểu mẫu chỉnh sửa
document.getElementById("editModal").addEventListener("click", function (event) {
  if (event.target.classList.contains('editPro')) {
    const id = document.querySelector("#id").value;
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const detail = document.querySelector("#detail").value;

    // Xử lý trường nhập file
    const imgInput = document.querySelector("#img");
    const img = imgInput.files.length > 0 ? imgInput.files[0] : null;

    const category = document.querySelector("#categorySelect").value;

    const updatedCategory = {
      "id": id,
      "name": name,
      "price": price,
      "detail": detail,
      "img": img, 
      "cate_id": category 
    };

    productService.updateCase(id, updatedCategory)
      .then(() => {
        document.getElementById('editModal').style.display = "none";
        fetchData();  // Thay thế bằng hàm tải dữ liệu của bạn
      })
      .catch(error => {
        console.error('Lỗi cập nhật:', error.message);
      });
  } else {
    console.log('Lỗi');
  }
});