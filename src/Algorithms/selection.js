export const getSelectionAnimation = (array) => {
    let animation = [];
    let auxArray = array.slice();
    selectionSort(auxArray, animation);
    array = auxArray;
    return [animation, array];
}


const selectionSort = (auxArray, animation) => {
    for (let i = 0; i < auxArray.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < auxArray.length; j++) {
            animation.push(["compare1", j, min]);
            animation.push(["compare2", j, min]);
            if (auxArray[min] > auxArray[j]) {
                min = j;
            }
        }
        animation.push(["swap", i, auxArray[min]]);
        animation.push(["swap", min, auxArray[i]]);
        swap(auxArray, min, i);
    }
}


function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}
