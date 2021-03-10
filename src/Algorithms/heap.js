export const getHeapAnimation = (array) => {
    let animation = [];
    let auxArray = array.slice();
    heapSort(auxArray, animation);
    array = auxArray;
    return [animation, array];
}


const heapSort = (array, animation) => {

    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        animation = max_heapify(array, i, n, animation);            //Building max heap
    }
    for (let i = n - 1; i >= 0; i--) {
        animation.push(["swap", i, array[i + 1]]);
        animation.push(["swap", i + 1, array[i]]);
        swap(array, 0, i);              //Deleting root element
        animation = max_heapify(array, 0, i, animation);           //Building max heap again
    }
    return [array, animation];
}


function max_heapify(array, i, n, animation) {
    let left = 2 * i;              //Left child index
    let right = 2 * i + 1;           //Right child index
    let maximum;
    if (right < n) {                 //Checks if right child exist
        if (array[left] >= array[right]) {    //Compares children to find maximum
            maximum = left;
        }
        else {
            maximum = right;
        }
    }
    else if (left < n) {                //Checks if left child exists
        maximum = left;
    }
    else return animation;                    //In case of no children return
    animation.push(["compare1", i, maximum]);
    animation.push(["compare2", i, maximum]);
    if (array[i] < array[maximum]) {            //Checks if the largest child is greater than parent
        swap(array, i, maximum);          //If it is then swap both
        animation = max_heapify(array, maximum, n, animation);       //max-heapify again
    }
    return animation;
}


function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}
