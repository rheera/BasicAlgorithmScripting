/*
Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

/*
function bouncer(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || isNaN(arr[i])){
            arr.splice(i, 1);
            console.log(i);
            i--;
        }
    }
    return arr;
}
*/

function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        //all falsy values evaluate to false, rest of the values we want are truthy so push them
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let x = bouncer([7, "ate", "", false, 9]);
let y = bouncer(["a", "b", "c"]);
let z = bouncer([false, null, 0, NaN, undefined, ""]);
let a = bouncer([null, NaN, 1, 2, undefined]);
console.log(x);
console.log(y);
console.log(z);
console.log(a);
