function getAverage(marks) {
    let sum = marks.reduce((acc, mark) => acc + mark, 0);
    return Math.floor(sum / marks.length);
}