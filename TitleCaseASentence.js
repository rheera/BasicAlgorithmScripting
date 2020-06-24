function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        let word = str[i].split("");
        word[0] = word[0].toUpperCase();
        newStr += word.join("") + " ";
    }
    // added an extra space at the end of the string, need to remove that
    newStr = newStr.split("").slice(0, newStr.length-1).join("");
    console.log(newStr);
    return newStr;
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
