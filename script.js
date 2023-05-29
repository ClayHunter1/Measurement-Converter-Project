const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');



function getAllMeasurements(numberOfGrams) {
    
    return {

        ounce: numberOfGrams / 28.3,
      
        pound: numberOfGrams / 454,

        kilogram: numberOfGrams / 1000,

    };

}



function processInputs(input) {

    const numberOfGrams = 100;

    const calculatedMeasurements = getAllMeasurements(numberOfGrams);

}



function convertUnitToGrams(amount, unitType) {

    switch (unitType) {

        case ounce:

            amount * 28.3;

        break;

        case pound:

            amount * 454;

        break;

        case kilogram:

            amount * 1000;

        break;

    }

}



input1.addEventListener('input', processInputs);

input2.addEventListener('input', processInputs);