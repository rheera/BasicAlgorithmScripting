/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and
returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    for (let i = 0; i < arr.length; i++){
        arr.unshift(arr.splice(i, size));
    }
    console.log(arr.reverse());
    return arr.reverse();
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);