import { productService } from "./model/modelPro.js";

async function fetchCategoryDetails(categoryId) {
  try {
    const response = await fetch(
      `http://localhost:3000/categories/${categoryId}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch category details for ID ${categoryId}: ${response.statusText}`
      );
    }

    const categoryData = await response.json();
    return categoryData.name;
  } catch (error) {
    console.error(error.message);
    return "N/A";
  }
}

async function fetchProductDetails(productId) {
  try {
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch product details for ID ${productId}: ${response.statusText}`
      );
    }

    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    const listProducts = document.getElementById("listProducts");
    let child_html = `
      
    `;

    const categoryNames = await Promise.all(
      data.map((element) => fetchCategoryDetails(element.cate_id))
    );
    const productDetails = await Promise.all(
      data.map((element) => fetchProductDetails(element.id))
    );

    data.forEach((element, index) => {
      const productDetail = productDetails[index];
      child_html += `
        <tr>
          <td class="border px-4 py-2">${element.name}</td>
          <td class="border px-4 py-2"><img src="${element.image}" width="30" height="30" alt=""></td>
          <td class="border px-4 py-2">${element.price}</td>
          <td class="border px-4 py-2">${categoryNames[index]}</td>
          <td class="border px-4 py-2">${element.detail}</td>
          <td class="border px-4 py-2">
          <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white" class="openEditPage" data-id='${element.id}'>
                <i data-id="${element.id}" class="fas fa-edit openEditPage"></i>
                  </a>
                  <a  data-id="${element.id}" class="deleteCate bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                    <i data-id="${element.id}" class="fas fa-trash deleteCate"></i>
                  </a>
          </td>
        </tr>
      `;
    });

    child_html += ``;
    listProducts.innerHTML = child_html;

    addPro(array);
  } catch (error) {
    console.error(error.message);
  }
}

let array;

async function fetchDataAndRender() {
  try {
    const response = await fetch("http://localhost:3000/categories");
    array = await response.json();
    fetchData();
  } catch (err) {
    console.error(err);
  }
}


async function populateCategories() {
  const selectElement = document.getElementById("categorySelect");

  try {
    const response = await fetch("http://localhost:3000/categories/");
    if (!response.ok) {
      throw new Error(`Không thể lấy danh mục: ${response.statusText}`);
    }

    const categories = await response.json();

    // Xóa các option đã tồn tại
    selectElement.innerHTML = "";

    // Thêm option cho mỗi danh mục
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category.id;
      option.text = category.name;
      selectElement.add(option);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Gọi hàm để cập nhật danh sách danh mục khi trang được tải
document.addEventListener("DOMContentLoaded", populateCategories);


function addPro(array) {
  document.querySelector('#addPro').onclick = async function () {
    try {
      const name = document.querySelector('#name').value;
      const img = document.querySelector('#img').value;  // Điều chỉnh để xử lý input kiểu file
      const price = document.querySelector('#price').value;
      const category = document.querySelector('#categorySelect').value;
      const detail = document.querySelector('#detail').value;

      const id = (array.length > 0 ? parseInt(array[array.length - 1].id) + 1 : 1).toString();

      const pro = {
        "id": id,
        "name": name,
        "img": img,
        "price": price,
        "cate_id": category,
        "detail": detail
      };

      await productService.addData(pro);

      document.getElementById('myModal').style.display = "none";


      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };
}

//delete categories
const editModal = document.getElementById('editModal');
document.querySelector('tbody').addEventListener("click", function(e){
  if(e.target.classList.contains('deleteCate')){
    const id = e.target.getAttribute('data-id');
    console.log(id);
    console.log(e.target);
    productService.deleteData(id);
    fetchData()
  } else {
    console.log('Delete error');
  }
})

// Open the edit page for a category
// document.querySelector('tbody').addEventListener("click", function (event) {
//   if (event.target.classList.contains('openEditPage')) {
//     const id = event.target.getAttribute('data-id');
//     productService.getDataById(id).then(category => {
//       const editModal = document.getElementById('editModal');

//       editModal.style.display = 'block';

//       editModal.innerHTML = createEditForm(category);

//       const closeSpan = editModal.querySelector(".close");
//       closeSpan.addEventListener("click", function () {
//         editModal.style.display = "none";
//       });

//       const editButton = document.getElementById('editPro');
//       editButton.addEventListener("click", function () {
//         editCategory(id);
//       });
//     });
//   } else {
//     console.log('error r');
//   }
// });

// editModal.addEventListener("click", function (event) {
//   if (event.target.classList.contains('editCate')) {
//     const id = event.target.getAttribute('data-id');
//     const editName = document.getElementById('editName').value;
//     const editID = document.getElementById('editID').value;
//     const updatedCategory = {
//       "id": parseInt(editID, 10),
//       "name": editName
//     };

//     productService.updateCase(id, updatedCategory);
//     document.getElementById('editModal').style.display = "none";
//     renderCategories(array);
//   } else {
//     console.log('Error');
//   }
// });


// function createEditForm(category) {
//   return `
//     <div class="modal-content">
//       <span class="close">&times;</span>
//       <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
//         <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
//           <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
//             Edit categories
//           </div>
//           <div class="p-3">
//             <form class="w-full">
//               <div class="flex flex-wrap -mx-3 mb-6">
//                 <div class="w-full px-3">
//                   <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1">
//                     ID
//                   </label>
//                   <input readonly id="editID" class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
//                     type="number" value="${category.id}" placeholder="Id">
//                 </div>
//               </div>
//               <div class="flex flex-wrap -mx-3 mb-6">
//                 <div class="w-full px-3">
//                   <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1">
//                     Name
//                   </label>
//                   <input id="editName" class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
//                     type="text" value="${category.name}" placeholder="Name">
//                 </div>
//               </div>
//               <input class="editCate" data-id="${category.id}" type="button" value="Edit category" id="editPro" class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// }

// function editCategory(id) {
//   const editName = document.getElementById('editName').value;
//   const editID = document.getElementById('editID').value;
//   const updatedCategory = {
//     "id": parseInt(editID, 10),
//     "name": editName
//   };

//   array = array.map(item => (item.id === id ? updatedCategory : item));
//   document.getElementById('editModal').style.display = "none";
//   renderCategories(array);
// }
fetchDataAndRender()