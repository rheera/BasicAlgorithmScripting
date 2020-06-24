/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let combinedArr = [...arr2];
    console.log(combinedArr.splice(n, 0, ...arr1));
    console.log(combinedArr);
    console.log(arr1);
    console.log(arr2);
    return combinedArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
