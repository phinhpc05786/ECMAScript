console.log('-----------Bài 1----------------');

// this thường được sử dụng để tham chiếu đến đối tượng hiện tại, 
// nơi mà nó được sử dụng. Giá trị của this thay đổi tùy thuộc vào cách mà nó được sử dụng: 
// trong phạm vi của một hàm, một phương thức của đối tượng, hoặc một sự kiện.

// VD
var myObject = {
    property: 'Hello',
    myMethod: function() {
      console.log(this.property);
    }
  };
  
  myObject.myMethod();