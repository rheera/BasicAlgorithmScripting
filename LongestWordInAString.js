function findLongestWordLength(str) {
    let splitStr = str.split(" ");
    let longestWord = {
        word: "",
        index: "",
    }
    for (let i = 0; i < splitStr.length; i++){
        if (splitStr[i].length > longestWord.word.length){
            longestWord.word = splitStr[i];
            longestWord.index = i;
        }
    }
    console.log(splitStr);
    console.log(longestWord);
    return longestWord.word.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
