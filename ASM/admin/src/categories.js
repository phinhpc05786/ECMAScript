// Hàm để lấy dữ liệu từ server và cập nhật giao diện
function fetchDataAndRender() {
    fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => renderCategories(data))
        .catch(err => console.log(err));
  }
  
  // Hàm để cập nhật giao diện với dữ liệu mới
  function renderCategories(array) {
    let listCategory = document.getElementById("listCategory");
    let child_html = `<thead>
        <tr>
            <th class="border w-1/6 px-4 py-2">ID</th>
            <th class="border w-1/6 px-4 py-2">Name</th>
            <th class="border w-1/7 px-4 py-2"></th>
        </tr>
    </thead>
    <tbody>`;
  
    array.forEach(element => {
        child_html += `
            <tr>
                <td class="border px-4 py-2">${element.id}</td>
                <td class="border px-4 py-2">${element.name}</td>
                <td class="border px-4 py-2">
                    <a class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white" onclick="openEditPage(${element.id}, ${JSON.stringify(array)})">
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
  
    // Gọi hàm để xử lý sự kiện thêm mới phần tử
    addCate(array);
  }
  
  // Hàm để thêm mới phần tử vào mảng và cập nhật giao diện
  function addCate(array) {
    document.querySelector('#addPro').onclick = function () {
        const name = document.querySelector('#name').value;
  
        // Tính toán id mới bằng cách lấy id của phần tử cuối cùng và tăng thêm 1
        const id = parseInt(array.length > 0 ? parseInt(array[array.length - 1].id, 10) + 1 : 1, 10);

  
        const pro = {
            "id": id,
            "name": name
        };
        array.push(pro);
        modal.style.display = "none";
        renderCategories(array); // Gọi lại hàm để cập nhật giao diện
    };
  }
  
  // edit
  const editModal = document.querySelector('#editModal');
  
  function openEditPage(id) {
    const cate = array.find(item => item.id == id);
  
    editModal.style.display = 'block';
  
    // editModal.innerHTML = `
    //   <div class="modal-content">
    //     <span class="close">&times;</span>
    //     <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
    //       <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
    //         <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
    //           Edit categories
    //         </div>
    //         <div class="p-3">
    //           <form class="w-full">
    //             <div class="flex flex-wrap -mx-3 mb-6">
    //               <div class="w-full px-3">
    //                 <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1" for="grid-password">
    //                   ID
    //                 </label>
    //                 <input readonly id="editID" class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
    //                   type="number" value="${pro.id}" placeholder="Id">
    //               </div>
    //             </div>
    //             <div class="flex flex-wrap -mx-3 mb-6">
    //               <div class="w-full px-3">
    //                 <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1" for="grid-password">
    //                   Name
    //                 </label>
    //                 <input id="editName" class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
    //                   type="text" value="${pro.name}" placeholder="Name">
    //               </div>
    //             </div>
    //             <input type="button" onclick="editCate(${pro.id})" value="Edit category" id="editPro" class=" m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // `;

    // function editCate(id){
    //     const editName = document.querySelector('#editName').value;
    //     const editID = document.querySelector('#editID').value;
    //     const cate = {
    //         "id": editID,
    //         "name" : editName
    //     }
    //     array = array.map(item => item.id ==id?cate:item)
    //     editModal.style.display = "none";
    // }
  
    // var span = document.getElementsByClassName("close")[0];
    // span.onclick = function () {
    //   editModal.style.display = "none";
    // }
  }
  
  // Gọi hàm để lấy dữ liệu và cập nhật giao diện ban đầu
  fetchDataAndRender();
  