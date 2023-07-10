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

const formatNumberForDisplay = (originalValue) => {
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

function convertWeightUnitsEventHandler(event) {
    const unitType = event.target.id
    const unitValue = Number(event.target.value)
    const numberOfGrams = convertUnitToGrams(unitValue, unitType)
    const allMeasurements = getAllWeightMeasurements(numberOfGrams)

    const formattedGram = formatNumberForDisplay(allMeasurements.gram)
    const formattedKilogram = formatNumberForDisplay(allMeasurements.kilogram)
    const formattedOunce = formatNumberForDisplay(allMeasurements.ounce)
    const formattedPound = formatNumberForDisplay(allMeasurements.pound)

    if (unitValue === 0) {
        gramInput.value = ''
        kilogramInput.value = ''
        ounceInput.value = ''
        poundInput.value = ''
    }
    else {
        gramInput.value = formattedGram
        kilogramInput.value = formattedKilogram
        ounceInput.value = formattedOunce
        poundInput.value = formattedPound
    }
}

gramInput.addEventListener('input',convertWeightUnitsEventHandler)
kilogramInput.addEventListener('input',convertWeightUnitsEventHandler)
ounceInput.addEventListener('input',convertWeightUnitsEventHandler)
poundInput.addEventListener('input',convertWeightUnitsEventHandler)