function analyzeArray(arr){
    if(arr.length === 0) {
        return null
    }

    const arrAvg = arr.reduce((acc, cv) => acc + cv)/arr.length;

    const arrMin = arr.reduce((a, b) => {
        return (b < a) ? b: a;
    })

    const arrMax = arr.reduce(( a, b) => {
        return (b > a) ? b: a;
    })

    return {
        average: arrAvg,
        min: arrMin,
        max: arrMax,
        length: arr.length
    }
}

export default analyzeArray;