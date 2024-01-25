console.log('-----------Bài 4----------------');

var person = {
  firstname: 'Albert',
  lastname: 'Einstein',
  setLastname: function(_lastname) {
    this.lastname = _lastname;
  },
  setFirstname: function(_firstname) {
    this.firstname = _firstname;
  },

  get getFullName() {
    return this.firstname + ' ' + this.lastname
  }
}

person.setLastname('Newton');
person.setFirstname('Issac');
console.log(person.getFullName);