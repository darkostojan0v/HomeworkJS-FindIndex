console.log('Find Index');

function findIndex() {
    let arr = ["100", "200", "300", "400", "500"];
    let index = arr.indexOf("400"); // enter a non-existent number so it will return -1 .
    return index;
}
console.log(findIndex());