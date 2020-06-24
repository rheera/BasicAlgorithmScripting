/* done without the .endsWith() method */

function confirmEnding(str, target) {
    let targetRegex = new RegExp(target + "$");
    console.log(targetRegex);
    console.log(str.match(targetRegex));
    return targetRegex.test(str);
}

confirmEnding("Bastian", "n");
