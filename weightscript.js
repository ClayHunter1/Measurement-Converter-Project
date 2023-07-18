const gramInput = document.getElementById('gram')
const kilogramInput = document.getElementById('kilogram')
const poundInput = document.getElementById('pound')
const ounceInput = document.getElementById('ounce')

function getAllWeightMeasurements(numberOfGrams) {
    return {
        ounce: numberOfGrams / 28.3,
        pound: numberOfGrams / 454,
        kilogram: numberOfGrams / 1000,
        gram: numberOfGrams,
    };
}

function convertUnitToGrams(amount, unitType) {
    switch (unitType) {
        case 'ounce': return amount * 28.3;
        case 'pound': return amount * 454;
        case 'kilogram': return amount * 1000;
        case 'gram': return amount;
    }
}

// https://stackoverflow.com/a/17369245
function decimalPlaces(number) {
    if (Math.floor(number) === number) return 0;
  
    const str = number.toString();
    if (str.indexOf('.') !== -1 && str.indexOf('-') !== -1) {
      return str.split('-')[1] || 0;
    } else if (str.indexOf('.') !== -1) {
      return str.split('.')[1].length || 0;
    }
    return str.split('-')[1] || 0;
}

const formatWeightNumberForDisplay = (originalValue) => {
    if (Number.isNaN(originalValue) || originalValue === 0) {
        return ""
    }
    else if (decimalPlaces(originalValue) <= 2) {
        return originalValue
    }
    else {
        return originalValue.toFixed(2);
    }
}

const clearAllWeightInputs = () => {
    gramInput.value = '';
    kilogramInput.value = '';
    ounceInput.value = '';
    poundInput.value = '';
};

const calculateAndSetFormattedWeightValues = (numberOfGrams) => {
    const allMeasurements = getAllWeightMeasurements(numberOfGrams);

    const formattedGram = formatWeightNumberForDisplay(allMeasurements.gram)
    const formattedKilogram = formatWeightNumberForDisplay(allMeasurements.kilogram)
    const formattedOunce = formatWeightNumberForDisplay(allMeasurements.ounce)
    const formattedPound = formatWeightNumberForDisplay(allMeasurements.pound)

    gramInput.value = formattedGram;
    kilogramInput.value = formattedKilogram;
    ounceInput.value = formattedOunce;
    poundInput.value = formattedPound;
};

const isWeightInputValidForCalculation = (inputValue) => {
    if (
      inputValue.slice(-1) === '.' ||
      Number.isNaN(inputValue) ||
      inputValue == 0
    ) {
      return false;
    }
    return true;
};

function convertWeightUnitsEventHandler(event) {
    const unitType = event.target.id;
    const unitValue =
    typeof event.target.value === 'number'
    ? event.target.value.toString()
    : event.target.value;

    const shouldCalculateValues = isWeightInputValidForCalculation(unitValue);

    if (!shouldCalculateValues) {
        clearAllWeightInputs();
        document.getElementById(event.target.id).value = unitValue;
    } else {
        const numberOfGrams = convertUnitToGrams(unitValue, unitType);
        calculateAndSetFormattedWeightValues(numberOfGrams);
        document.getElementById(event.target.id).value = unitValue;
    }
}

gramInput.addEventListener('input',convertWeightUnitsEventHandler)
kilogramInput.addEventListener('input',convertWeightUnitsEventHandler)
ounceInput.addEventListener('input',convertWeightUnitsEventHandler)
poundInput.addEventListener('input',convertWeightUnitsEventHandler)