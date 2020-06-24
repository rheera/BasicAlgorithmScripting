function factorialize(num) {
    if (num == 0){
        return 1;
    }
    else {
        const total = factorialize(num - 1) * num;
        console.log(total);
        return total;
    }

}

factorialize(5);