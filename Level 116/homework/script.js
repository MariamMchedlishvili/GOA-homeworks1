function twoSum(numbers, target) {
    let seen = {};
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        if (seen.hasOwnProperty(complement)) {
            return [seen[complement], i];
        }
        seen[numbers[i]] = i;
    }
    return null; 
}