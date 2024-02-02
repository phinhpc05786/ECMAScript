import { productService } from '../src/model/model.js';

let array;

// Fetch data and render on page load
async function fetchDataAndRender() {
    try {
        const response = await fetch("http://localhost:3000/categories");
        array = await response.json();
        renderCategories(array);
    } catch (err) {
        console.error(err);
    }
}

// Render categories on the page
function renderCategories(array) {
    const listCategory = document.getElementById("listCategory");
    let child_html = ``;

    array.forEach(element => {
        child_html += `
    <tr>
      <td class="border px-4 py-2">${element.id}</td>
      <td class="border px-4 py-2">${element.name}</td>
      <td class="border px-4 py-2">
        <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white" onclick="openEditPage(${element.id})">
          <i class="fas fa-edit"></i>
        </a>
        <a  data-id="${element.id}" class="deleteCate bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
          <i data-id="${element.id}" class="fas fa-trash deleteCate"></i>
        </a>
      </td>
    </tr>`;
    });

    child_html += ``;
    listCategory.innerHTML = child_html;

    // Handle add category event
    addCate(array);
}

// Add new category to the array and update the UI
function addCate(array) {
    document.querySelector('#addPro').onclick = function () {
        const name = document.querySelector('#name').value;

        const id = (array.length > 0 ? parseInt(array[array.length - 1].id) + 1 : 1).toString();

        const pro = {
            "id": id,
            "name": name
        };
        productService.addData(pro);
        // Assuming modal is defined somewhere
        document.getElementById('myModal').style.display = "none";
        renderCategories(array);
    };
}

// Open the edit page for a category
function openEditPage(id) {
    const cate = array.find(item => item.id == id);
    const editModal = document.getElementById('editModal');

    editModal.style.display = 'block';

    editModal.innerHTML = createEditForm(cate);

    const span = editModal.querySelector(".close");
    span.addEventListener("click", function () {
        editModal.style.display = "none";
    });

    const editProButton = document.getElementById('editPro');
    editProButton.addEventListener("click", function () {
        editCate(cate.id);
    });
}

// Create the edit form for a category
function createEditForm(cate) {
    return `
<div class="modal-content">
<span class="close">&times;</span>
<div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
  <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
    <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
      Edit categories
    </div>
    <div class="p-3">
      <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1">
              ID
            </label>
            <input readonly id="editID" class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
              type="number" value="${cate.id}" placeholder="Id">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1">
              Name
            </label>
            <input id="editName" class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
              type="text" value="${cate.name}" placeholder="Name">
          </div>
        </div>
        <input onclick="editCate(${cate.id})" type="button" value="Edit category" id="editPro" class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      </form>
    </div>
  </div>
</div>
</div>
`;
}

// Handle editing a category
function editCate(id) {
    const editName = document.getElementById('editName').value;
    const editID = document.getElementById('editID').value;
    const updatedCate = {
        "id": parseInt(editID, 10),
        "name": editName
    };

    array = array.map(item => (item.id === id ? updatedCate : item));
    document.getElementById('editModal').style.display = "none";
    renderCategories(array);
}

//delete categories

document.querySelector('tbody').addEventListener("click", function(e){
  if(e.target.classList.contains('deleteCate')){
    const id = e.target.getAttribute('data-id');
    console.log(e.target);
    productService.deleteData(id)
  } else {
    console.log('Delete error');
  }
})


// Fetch data and render on page load
fetchDataAndRender();