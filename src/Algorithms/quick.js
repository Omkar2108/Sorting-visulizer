export const getQuickAnimation = (array) => {
    let animation = [];
    let auxArray = array.slice();
    quickSort(auxArray, animation, 0, auxArray.length - 1);
    array = auxArray;
    return [animation, array];
}


const quickSort = (auxArray, animation, low, high) => {
    if (low < high) {
        let pivot = partition(auxArray, low, high, animation);

        quickSort(auxArray, animation, low, pivot - 1);
        quickSort(auxArray, animation, pivot + 1, high);
    }
    return auxArray;
}

const partition = (array, low, high, animation) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high; j++) {
        animation.push(["compare1", j, high]);
        animation.push(["compare2", j, high]);
        if (array[j] < pivot) {
            i++;
            animation.push(["swap", i, array[j]]);
            animation.push(["swap", j, array[i]]);
            swap(array, i, j);
        }
    }
    animation.push(["swap", i + 1, array[high]]);
    animation.push(["swap", high, array[i + 1]]);
    swap(array, i + 1, high);
    return (i + 1);
}


const swap = (array, first, second) => {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}