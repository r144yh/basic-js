module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let currentDeep = 1;
        for (let i = 0; i < arr.length; ++i) {
            if (Array.isArray(arr[i])) {
                let counter = this.calculateDepth(arr[i]);
                if (counter >= currentDeep) currentDeep = counter + 1;
            }
        }
        return currentDeep;
    }
};