export const getHeapAnimation = (array) => {
    let animation = [];
    let auxArray = array.slice();
    heapSort(auxArray, animation);
    array = auxArray;
    return [animation, array];
}


const heapSort = (array, animation) => {
    const n = array.length;
    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i, animation);
    }

    for (let i = n - 1; i > 0; i--) {
        animation.push(["swap", 0, array[i]]);
        animation.push(["swap", i, array[0]]);
        swap(array, i, 0);
        heapify(array, i, 0, animation);
    }
}


function heapify(array, n, i, animation) {
    let largest = i;
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    if (l < n) {
        animation.push(["compare1", l, largest]);
        animation.push(["compare2", l, largest]);
    }

    if (l < n && array[l] > array[largest]) {
        largest = l;
    }

    if (r < n) {
        animation.push(["compare1", r, largest]);
        animation.push(["compare2", r, largest]);
    }

    if (r < n && array[r] > array[largest]) {
        largest = r;
    }

    if (largest !== i) {
        animation.push(["swap", i, array[largest]]);
        animation.push(["swap", largest, array[i]]);
        swap(array, i, largest);
        heapify(array, n, largest, animation);
    }
}


function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}
