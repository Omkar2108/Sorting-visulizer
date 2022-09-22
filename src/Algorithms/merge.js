export const getMergeAnimation = (array) => {
    let animation = [];
    let auxArray = array.slice();
    mergeSort(0, auxArray.length - 1, animation, auxArray);
    array = auxArray;
    return [animation, array];
}

const mergeSort = (L, R, animation, auxArray) => {
    if (L === R)
        return;
    const M = Math.floor((L + R) / 2);
    mergeSort(L, M, animation, auxArray);
    mergeSort(M + 1, R, animation, auxArray);
    merge(L, M, R, animation, auxArray);
}

const merge = (L, M, R, animation, auxArray) => {
    let sortArray = [];
    let i = L, j = M + 1;
    while (i <= M && j <= R) {
        animation.push(["compare1", i, j]);
        animation.push(["compare2", i, j]);
        if (auxArray[i] <= auxArray[j]) {
            sortArray.push(auxArray[i++]);
        }
        else {
            sortArray.push(auxArray[j++]);
        }
    }

    while (i <= M) {
        animation.push(["compare1", i, i]);
        animation.push(["compare2", i, i]);
        sortArray.push(auxArray[i++]);
    }

    while (j <= R) {
        animation.push(["compare1", j, j]);
        animation.push(["compare2", j, j]);
        sortArray.push(auxArray[j++]);
    }

    for (let i = L; i <= R; i++) {
        animation.push(["compare1", i, i - L]);
        animation.push(["overwrite", i, sortArray[i - L]]);
        animation.push(["compare2", i, i - L]);
        auxArray[i] = sortArray[i - L];
    }
}
