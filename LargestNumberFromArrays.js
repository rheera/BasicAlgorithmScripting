function largestOfFour(arr) {
    let bigArr = [];
    for (let i = 0; i < arr.length; i++){
        bigArr.push(arr[i][0]); // add the first element of each subarray as the largest number
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > bigArr[i]){
                bigArr[i] = arr[i][j];
            }
        }
    }
    console.log(bigArr);
    return bigArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
