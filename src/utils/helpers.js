// helper functions to calculate mean,median & mode of the values
// All formulas used here are referred from https://byjus.com/maths/;


// Array =  array of object from wine data
// key = is to get the values of the array of which we need to calculate the mean

export const calculateMean = (array, key) => {
    // Mean = sum of values / no. of values.

    // added parse float to cover string values which are in the array
    const dataArray = array.map(item => parseFloat(item[key]));

    // valHolder = holds value for each function call
    // currentVal = current value in array
    return dataArray.reduce((valHolder, currentVal) => {
        return valHolder + currentVal;
        // 0 is passed here as initial value for valHolder
    }, 0).toFixed(3);

}

// function to calculate median of the values
export const calculateMedian = (array, key) => {
    // median on even values = ( (n/2 term) + ((n/2) + 1)term) )  / 2
    //median of odd values =  ( (n + 1) / 2 ) term
    //n = number of values

    // added parse float to cover string values which are in the array
    const dataArray = array.map(item => parseFloat(item[key])).sort();
    const numberOfValues = dataArray.length;

    // if number of observations are even
    if (numberOfValues % 2 === 0) {

        return ((dataArray[(numberOfValues / 2)] + dataArray[((numberOfValues / 2) + 1)]) / 2).toFixed(3);

    } else {
        // if number of observations are odd
        return (dataArray[((numberOfValues + 1) / 2)]).toFixed(3);
    }


}

// function to calculate mode of the values
export const calculateMode = (array, key) => {

    //mode = number occuring most time

    // added parse float to cover string values which are in the array
    const dataArray = array.map(item => parseFloat(item[key]));

    // to get most occurrence of single value
    const modeObject = Object.groupBy(dataArray, (item) => item)

    // get keys
    const keyOfModeArray = Object.keys(modeObject);


    let firstMode;
    let highestNumber = 0;

    let SecondMode;

    // map the keys to get the largest length of array in groupBy
    keyOfModeArray.map(key => {
        if (modeObject[key].length > highestNumber) {
            highestNumber = modeObject[key].length
            firstMode = key;
        }
    });

    // looped again to check if it contains two modes
    keyOfModeArray.map(key => {
        //  if highestNumber is find and key is not equal to first mode we loop through
        if (modeObject[key].length === highestNumber && key !== firstMode) {
            SecondMode = key;
        }
    });

    // if highest number is 1 i.e all numbers occur 1 time only then we return no mode found;
    if (highestNumber === 1) {
        return 'No mode found';
    } else {
        if (SecondMode) {
            return `${parseFloat(firstMode).toFixed(3)} & ${parseFloat(SecondMode).toFixed(3)}`;
        } else {
            return parseFloat(firstMode).toFixed(3);
        }
    }
}


// function to calculate and return gamma by using parameters needed
export const calculateGamma = (ash, hue, magnesium) => {
    return parseFloat(((ash * hue) / magnesium).toFixed(3))
}