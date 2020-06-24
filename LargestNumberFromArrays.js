function largestOfFour(arr) {
    let bigArr = [];
    for (let i = 0; i < arr.length; i++){
        bigArr.push(-Infinity);
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > bigArr[i]){
                bigArr[i] = arr[i][j];
            }
        }
    }
    return bigArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
