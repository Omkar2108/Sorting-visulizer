export const getInsertionAnimation = (array) => {
    let animation = [];
    let auxArray = array.slice();
    insertionSort(auxArray, animation);
    array = auxArray;
    return [animation, array];
}


const insertionSort = (auxArray, animation) => {
    for (let i = 0; i < auxArray.length; i++) {
        let key = auxArray[i];
        let j = i - 1;
        animation.push(["comapare1", i, j]);
        animation.push(["compare2", i, j]);
        while (0 <= j && auxArray[j] > key) {
            animation.push(["overwrite", j + 1, auxArray[j]]);
            auxArray[j + 1] = auxArray[j];
            j--;
            if (j > -1) {
                animation.push(["compare1", j, i]);
                animation.push(["compare2", j, i]);
            }
        }
        animation.push(["overwrite", j + 1, key]);
        auxArray[j + 1] = key;
    }
}

