
let child_html = `<div class="container py-5 h-100">
<div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col-md-12 col-xl-4">

    <div class="card" style="border-radius: 15px;">
      <div class="card-body text-center">
        <div class="mt-3 mb-4">
          <img src="${JSON.parse(localStorage.getItem('loggedInUser')).image}"
            class="rounded-circle img-fluid" style="width: 100px;" />
        </div>
        <h4 class="mb-2">${JSON.parse(localStorage.getItem('loggedInUser')).name}</h4>
        <p class="text-muted mb-4">${JSON.parse(localStorage.getItem('loggedInUser')).email}  </p>
        <div class="mb-4 pb-2">
          <button type="button" class="btn btn-outline-primary btn-floating">
            <i class="fab fa-facebook-f fa-lg"></i>
          </button>
          <button type="button" class="btn btn-outline-primary btn-floating">
            <i class="fab fa-twitter fa-lg"></i>
          </button>

        </div>
        <input type="button" id="logout" value="Logout" class="btn btn-outline-primary btn-floating" onclick="logout()">
        <a style="width: 80px; margin-left: 150px; margin-top: 10px" href="./admin/index.html" id="admin" class="btn btn-outline-primary btn-floating">Admin</a>
        <div class="d-flex justify-content-between text-center mt-5 mb-2">
          <div>
            <p class="mb-2 h5">8471</p>
            <p class="text-muted mb-0">Wallets Balance</p>
          </div>
          <div class="px-3">
            <p class="mb-2 h5">8512</p>
            <p class="text-muted mb-0">Income amounts</p>
          </div>
          <div>
            <p class="mb-2 h5">4751</p>
            <p class="text-muted mb-0">Total Transactions</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>`;
let theProfile = document.getElementById('theProfile');
theProfile.innerHTML = child_html;


function logout() {
    // Xóa thông tin người dùng khỏi Local Storage
    localStorage.removeItem('loggedInUser');

    // Chuyển hướng đến trang đăng nhập
    window.location.href = './login.html';
  }





const storedUserDataString = localStorage.getItem('loggedInUser');
console.log('storedUserDataString:', storedUserDataString);


const loggedInUser = JSON.parse(storedUserDataString) || {};
console.log('loggedInUser:', loggedInUser);

const loggedInUserAdmin = loggedInUser.admin;

console.log('loggedInUserAdmin:', loggedInUserAdmin);

const adminLink = document.getElementById('admin');
if (loggedInUserAdmin === 1) {
  adminLink.style.display = 'block'; // Hiện thẻ
} else {
  adminLink.style.display = 'none'; // Ẩn thẻ
}


