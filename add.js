const AddAlgorithm = () => {

    const _sumOfNNumbers = () => {
        if (n === 0) {
            return 0;
        }
        return n * (n + 1) / 2;
    }

    return {
        sumOFNNumbers: _sumOfNNumbers
    }

}

module.exports = AddAlgorithm();