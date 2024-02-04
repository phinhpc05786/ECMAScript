function checkLoginAndRedirect(targetPage) {
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (loggedInUser) {
      window.location.href = `./${targetPage}.html`;
    } else {
      window.location.href = './login.html';
    }
  }