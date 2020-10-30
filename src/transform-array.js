module.exports = function transform(arr) {

    if (typeof arr !== 'object') throw "Not an array";
    if (arr.length === 0) return [];
    function checkIndex(arr, newArr, index){
        return arr[index] !== undefined && newArr[index] !== undefined;
    }
    // let newArr = arr;
    let newArr = arr;
    for (let index = 0; index < arr.length; index++) {
        switch (arr[index]) {
            case '--discard-next':
                delete newArr[index];
                if (!checkIndex(arr, newArr, index + 1)) break;

                delete newArr[index+1];
                break;
            case '--discard-prev':
                delete newArr[index];
                if (!checkIndex(arr, newArr, index - 1)) break;

                delete newArr[index-1];
                break;
            case '--double-next':
                delete newArr[index];
                if (!checkIndex(arr, newArr, index + 1)) break;
                newArr[index] = newArr[index+1];
                index++;
                break;
            case '--double-prev':
                delete newArr[index];
                if (!checkIndex(arr, newArr, index - 1)) break;
                newArr[index] = newArr[index-1];
                break;
        }
    }
    for (let index = newArr.length - 1; index >= 0; --index){
        if (newArr[index] === undefined) {
            newArr.splice(index, 1);
        }
    }
    return newArr
};