function truncateString(str, num) {
    if (str.length <= num){
        return str;
    }
    else {
        /*
        strArr = str.split("");
        console.log(strArr);
        strArr = strArr.slice(0, num);
        console.log(strArr);
         */
        return str.split("").slice(0, num).join("") + "...";
    }
}

let x = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(x);