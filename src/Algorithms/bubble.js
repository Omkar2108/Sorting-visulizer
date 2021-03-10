export const getBubbleAnimation = (array) => {
    let animation = [];
    let auxiliaryArray = array.slice();
    bubbleSort(auxiliaryArray, animation);
    array = auxiliaryArray;
    return [animation, array];
}


function bubbleSort(auxiliaryArray, animation) {
    for (let i = auxiliaryArray.length - 1; i > 0; i--) {
        let swapped = false;
        for (let j = 0; j < i; j++) {
            animation.push(["compare1", j, j + 1]);
            animation.push(["compare2", j, j + 1]);
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                swapped = true;
                animation.push(["swap", j, auxiliaryArray[j + 1]]);
                animation.push(["swap", j + 1, auxiliaryArray[j]]);
                // [auxiliaryArray[j], auxiliaryArray[j + 1]] = [auxiliaryArray[j + 1], auxiliaryArray[j]];
                swap(auxiliaryArray, j, j + 1);
            }
        }
        if (swapped === false) break;
    }
}


function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}
