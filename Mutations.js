/*
Return true if the string in the first element of the array contains all of the letters of the string in the second
element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present
in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
 */

function mutation(arr) {

    for (let i = 0; i < arr[1].length; i++){
        // make both words uppercase so we can ignore case
        // if the first words includes the first letter of the second, continue checking else return false
        if (arr[0].toUpperCase().includes(arr[1].toUpperCase()[i])){
        }
        else {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);
