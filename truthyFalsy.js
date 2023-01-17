/*
*   True   
 */

let True = true;
if (True) {
    console.log(true);
} else {
    console.log(false);
}
// output : true

// selain  0 dan -0 
let bilangan = -3;
if (bilangan) {
    console.log(true);
} else {
    console.log(false);
}
// output : true

let persamaan = 4;
if (persamaan) {
    console.log(true);
} else {
    console.log(false);
}
// output : true

// tipe data string
let String = "hello";
if (String) {
    console.log(true);
} else {
    console.log(false);
}
// output : true

// tipe data objek
let objek = {};
if (objek) {
    console.log(true);
} else {
    console.log(false);
}
// output : false

// tipe data array
let Array = [];
if (Array) {
    console.log(true);
} else {
    console.log(false);
}
// output : true