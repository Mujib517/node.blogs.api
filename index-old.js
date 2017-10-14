// //loosely typed

//1. Javascript runtime
//2. Asynchronous Non blocking
//3. Single threaded

// var x;

// x = 10;

// x = "Mujib";
// x = true; //boolean
// x = [1, 2, 3];
// x = function () {

// }

// x = {};



// console.log(x);






// function add(a, b) {

//     var x = 0, y = 0;

//     if (typeof a === 'function') a = a();
//     if (typeof b === 'function') b = b();


//     if (Array.isArray(a)) {

//         for (var i = 0; i < a.length; i++) {
//             x += a[i];
//         }
//     }

//     if (Array.isArray(b)) {
//         for (var j = 0; j < b.length; j++) {
//             y += b[j];
//         }
//     }

//     if (x === 0)
//         x = a;

//     if (y === 0) y = b;

//     return x + y;
// }


// function first() {
//     return 10;
// }

// function second() {
//     return 20;
// }



// console.log(add(2, 2));
// console.log(add("Mujib ", "Rahman"));
// console.log(add(first, second));
// console.log(add([1, 2, 3], [4, 5, 6]));
// console.log(add([1, 2, 3], 4));
// console.log(add(3, [1,2,3]));


//synchrounous
function add(a, b) {

    a++;
    b--;

    return a + b; //undefined

}


//console.log(add(2, 10));

//tailor
function addAsync(a, b, cb) {

    //db, webservice

    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                var c = a + b;
                cb(c);
            }, 1000)
        }, 2000);

    }, 2000);  //2sec

    console.log("execution compoleted");



    //return undefined;
}


function callback(result) {
    console.log(result);
};


addAsync(2, 10, callback);



function myFun() {

    return {
        name: "Mujib"
    }

}

//console.log(myFun());




