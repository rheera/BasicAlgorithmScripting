let strings = ["hello", 'Howdy', "Greetings from Earth"];

function reverseString(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        newStr += str[str.length - 1 - i];
    }
    console.log(newStr);
    return newStr;
}

strings.every(reverseString);