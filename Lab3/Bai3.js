console.log("--------Bài 3-----------");

let Entity = function(name, delay) {
    this.name = name;
    this.delay = delay;
};

Entity.prototype.greet = function() {
    setTimeout(() => {
        console.log('Xin chào, tôi là ', this.name);
    }, this.delay);
};

let java = new Entity("java", 5000);
let cpp = new Entity("c++", 30);

java.greet();
cpp.greet();