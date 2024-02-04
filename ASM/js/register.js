
document.querySelector('#register').addEventListener('click', function() {
    const nameInput = document.getElementById('form3Example1c');
    const emailInput = document.getElementById('form3Example3c');
    const passwordInput = document.getElementById('form3Example4c');
    let isEmailExist = false;
  
    // Gửi yêu cầu GET đến API để lấy dữ liệu người dùng hiện tại
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
      // Kiểm tra xem email đã tồn tại chưa
      isEmailExist = data.some(user => user.email === emailInput.value);
  
      if (isEmailExist) {
        // Nếu email đã tồn tại, hiển thị cảnh báo và không tiếp tục xử lý đăng ký
        alert('Email đã tồn tại. Vui lòng sử dụng email khác.');
        return;
      }
  
      // Nếu email không tồn tại, tiếp tục quá trình đăng ký
      const lastUserId = data.length > 0 ? parseInt(data[data.length - 1].id) : 0;
      const newId = lastUserId + 1;
  
      const userData = {
        id: newId.toString(),
        image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };
  
      // Gửi dữ liệu đăng ký mới lên API
      return fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dữ liệu đã được lưu:', data);
  
      // Chuyển hướng người dùng đến trang đăng nhập sau khi đăng ký thành công
      window.location.href = './login.html';
    })
    .catch(error => {
      console.error('Có vấn đề với hoạt động fetch:', error);
    });
  });
  
  
  

 


