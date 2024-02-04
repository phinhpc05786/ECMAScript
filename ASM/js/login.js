console.log(localStorage);
document.querySelector('#login').addEventListener('click', function() {
    const emailInput = document.getElementById('form3Example3c');
    const passwordInput = document.getElementById('form3Example4c');
  
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;
  
    fetch('http://localhost:3000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const user = data.find(u => u.email === enteredEmail && u.password === enteredPassword);
  
      if (user) {
        // Lưu thông tin đăng nhập vào Local Storage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
  
        window.location.href = './index.html';
      } else {
        alert('Invalid email or password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Có vấn đề với hoạt động fetch:', error);
      // Xử lý các tình huống lỗi ở đây
    });
  
    // Kiểm tra nếu đã có người dùng đăng nhập từ trước (kiểm tra Local Storage)
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      window.location.href = './index.html';
    }
  });
  

