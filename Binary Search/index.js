// Searches in an ordered array of integers
function binarySearch (array,       // input: array
                       targetValue) // input: search Value
{   // Output: if found, return index
    // otherwise, return -1
    let min = 0;
    let max = array.length - 1;
    let guess;
    let loopRange = Math.floor (Math.log2 (array.length)) + 1;

    while (loopRange != 0) 
    {
        guess = Math.floor ((min + max) / 2);
        if (array[guess] === targetValue)   return guess;
        else if (array[guess] < targetValue) min = guess + 1;
        else max = guess - 1;
        loopRange -= 1;
    }

    return -1;
}

let array = [1, 2, 10, 50, 95, 103, 204, 358, 624, 957, 1024, 10235];

let result = binarySearch (array, 205);

console.log ("Binary Search result is: " + result);


