var arr = [1, 2, 3];
var arr1 = [4, 5, 6];
var myConCat = function (arr,arr1){
    return ([...arr, ...arr1])
} ;

console.log(myConCat(arr, arr1 ));