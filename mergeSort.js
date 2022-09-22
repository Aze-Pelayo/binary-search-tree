// Use merge sort with recursion

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middleIndex = Math.ceil(arr.length / 2);
    let leftSide = arr.slice(0, middleIndex);
    let rightSide = arr.slice(middleIndex, arr.length);

    if (leftSide.length == 2) {
        leftSide.sort((a, b) => {
            return a - b;
        });
    } else {
        leftSide = mergeSort(leftSide);
    }

    if (rightSide.length == 2) {
        rightSide.sort((a, b) => {
            return a - b;
        });
    } else {
        rightSide = mergeSort(rightSide);
    }

    let merged = [];
    for (let i = 0; i < arr.length; i++) {
        if (leftSide[0] < rightSide[0] || rightSide.length == 0) {
            merged[i] = leftSide[0];
            leftSide.shift();
        } else {
            merged[i] = rightSide[0];
            rightSide.shift();
        }
    }
    return merged;
}

export default mergeSort;
