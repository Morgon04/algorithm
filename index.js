
function sumOfXInSortedArray(x) {

    let arrayInSorted = [10, 14, 18, 22, 24];
    let low, high, sum;
    low = sum = 0;
    high = arrayInSorted.length - 1;

    while (low < high) {
        sum = arrayInSorted[low] + arrayInSorted[high];
        if (sum === x) {
            break;
        } else if (sum < x) {
            low++;
        } else {
            high--;
        }
    }

    if (arrayInSorted[low] !== arrayInSorted[high]) {
        console.log(`Matching Element in Sorted Array is ${arrayInSorted[low]} and high is ${arrayInSorted[high]}`);
    } else {
        console.log('Sorry! No Matching Element is Found');
    }

}

function sumOfXInUnSortedArray(x) {

    let arrayInUnSorted = [14, 10, 8, 14, 16];
    let compliments = {};
    for (let i = 0; i < arrayInUnSorted.length; i++) {
        if (compliments.hasOwnProperty(x - arrayInUnSorted[i])) {
            console.log(`Pair Found in un sorted array at ${arrayInUnSorted[i]} and ${arrayInUnSorted[compliments[x - arrayInUnSorted[i]]]}`);
            return;
        } else {
            compliments[arrayInUnSorted[i]] = i;
        }
    }
    console.log("No Pair Found");
}

function largestNoOfSumInArray(array) {
    let first, second;
    first = second = 0;
    if (array[0] > array[1]) {
        first = array[0];
        second = array[1];
    } else {
        first = array[1];
        second = array[0];
    }

    for (let i = 2; i < array.length; i++) {
        if (array[i] > first) {
            second = first;
            first = array[i];
        } else if (array[i] > second && array[i] !== first) {
            second = array[i];
        }
    }

    console.log(`Largest Sum of an Elm in an array is adding ${first} and ${second} = ${first + second}`);
}

// sumOfXInSortedArray(24);

// sumOfXInUnSortedArray(24);

// largestNoOfSumInArray([19, 45, 89, 86, 54]);

function sumOfNNumbers(n) {
    if (!n || n === 0) {
        return 0;
    }

    return `Sum of N Numbers is ${n * (n + 1) / 2}`;
}

console.log(sumOfNNumbers(20));

function missingNo(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    const arrayLength = arr.length;
    const sum = arrayLength * (arrayLength + 1) / 2;
    const sumOfArray = arr.reduce((a, c) => {
        return a + c;
    }, 0);

    return `Missing No is ${sum - sumOfArray}`;
}

console.log(missingNo([0,1,2,3,4,5,6,7,9]));








