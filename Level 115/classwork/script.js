function sumArray(arr) {
    if (!Array.isArray(arr) || arr.length <= 2) {
        return 0;
    }

    let highest = Math.max(...arr);
    let lowest = Math.min(...arr);

    arr.splice(arr.indexOf(highest), 1);
    arr.splice(arr.indexOf(lowest), 1);

    return arr.reduce((sum, num) => sum + num, 0);
}