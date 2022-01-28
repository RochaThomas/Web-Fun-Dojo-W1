
var fruit1 = "apples";
var fruit2 = "oranges";
fruit2 = fruit1;
console.log(fruit2 + " and " + fruit1);
//apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
console.log(fruit2 + " and " + fruit1);
//apples and oranges

var start = 0;
var end = 12;
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
//start: 0, end: 12
//start: 2, end: 10
//start: 4, end: 8

//Challenge: Write a function that will reverse an array

function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

var myArray = ["a", "b", "c", "d", "e"];
console.log("Original Array: ");
console.log(myArray);
myArray = reverse(myArray);
console.log("Reversed Array: ")
console.log(myArray);

console.log();

var myArray = ["a", "b", "c", "d", "e", "f"];
console.log("Original Array: ");
console.log(myArray);
myArray = reverse(myArray);
console.log("Reversed Array: ")
console.log(myArray);