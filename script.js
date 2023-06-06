const gramInput = document.getElementById('gram')

const kilogramInput = document.getElementById('kilogram')

const poundInput = document.getElementById('pound')

const ounceInput = document.getElementById('ounce')



function getAllMeasurements(numberOfGrams) {
    
    return {

        ounce: numberOfGrams / 28.3,
      
        pound: numberOfGrams / 454,

        kilogram: numberOfGrams / 1000,

    };

}



function processInputs(input) {

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



kilogramInput.addEventListener('input', convertUnitToGrams, processInputs); {

    ounceInput = calculatedMeasurements[0];

    poundInput = calculatedMeasurements[1];

    gramInput = numberOfGrams;

}