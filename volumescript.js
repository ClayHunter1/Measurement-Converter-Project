const teaspoonInput = document.getElementById('teaspoon')
const tablespoonInput = document.getElementById('tablespoon')
const cupInput = document.getElementById('cup')
const milliliterInput = document.getElementById('milliliter')
const literInput = document.getElementById('liter')
const pintInput = document.getElementById('pint')
const quartInput = document.getElementById('quart')
const gallonInput = document.getElementById('gallon')
const fluidounceInput = document.getElementById('fluidounce')

function getAllVolumeMeasurements(numberOfCups) {
    return {
        teaspoon: numberOfCups * 48,
        tablespoon: numberOfCups * 16,
        milliliter: numberOfCups * 236.6,
        liter: numberOfCups / 4.227,
        pint: numberOfCups / 2.402,
        quart: numberOfCups / 4.804,
        gallon: numberOfCups / 19.215,
        fluidounce: numberOfCups * 8,
        cup: numberOfCups,
    };
}

function convertUnitToCups(amount, unitType) {
    switch (unitType) {
        case 'teaspoon': return amount / 48;
        case 'tablespoon': return amount / 16;
        case 'milliliter': return amount / 236.6;
        case 'liter': return amount * 4.227;
        case 'pint': return amount * 2.402;
        case 'quart': return amount * 4.804;
        case 'gallon': return amount * 19.215;
        case 'fluidounce': return amount / 8;
        case 'cup': return amount;
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

const formatVolumeNumberForDisplay = (originalValue) => {
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

const clearAllVolumeInputs = () => {
    cupInput.value = '';
    teaspoonInput.value = '';
    tablespoonInput.value = '';
    milliliterInput.value = '';
    literInput.value = '';
    pintInput.value = '';
    quartInput.value = '';
    gallonInput.value = '';
    fluidounceInput.value = '';
};

const calculateAndSetFormattedVolumeValues = (numberOfCups) => {
    const allMeasurements = getAllVolumeMeasurements(numberOfCups);

    const formattedCup = formatVolumeNumberForDisplay(allMeasurements.cup);
    const formattedTeaspoon = formatVolumeNumberForDisplay(allMeasurements.teaspoon);
    const formattedTablespoon = formatVolumeNumberForDisplay(allMeasurements.tablespoon);
    const formattedMilliliter = formatVolumeNumberForDisplay(allMeasurements.milliliter);
    const formattedLiter = formatVolumeNumberForDisplay(allMeasurements.liter);
    const formattedPint = formatVolumeNumberForDisplay(allMeasurements.pint);
    const formattedQuart = formatVolumeNumberForDisplay(allMeasurements.quart);
    const formattedGallon = formatVolumeNumberForDisplay(allMeasurements.gallon);
    const formattedFluidounce = formatVolumeNumberForDisplay(allMeasurements.fluidounce);

    cupInput.value = formattedCup;
    teaspoonInput.value = formattedTeaspoon;
    tablespoonInput.value = formattedTablespoon;
    milliliterInput.value = formattedMilliliter;
    literInput.value = formattedLiter;
    pintInput.value = formattedPint;
    quartInput.value = formattedQuart;
    gallonInput.value = formattedGallon;
    fluidounceInput.value = formattedFluidounce;
};

const isVolumeInputValidForCalculation = (inputValue) => {
    if (
      inputValue.slice(-1) === '.' ||
      Number.isNaN(inputValue) ||
      inputValue == 0
    ) {
      return false;
    }
    return true;
};

function convertVolumeUnitsEventHandler(event) {
    const unitType = event.target.id;
    const unitValue =
    typeof event.target.value === 'number'
    ? event.target.value.toString()
    : event.target.value;

    const shouldCalculateValues = isVolumeInputValidForCalculation(unitValue);

    if (!shouldCalculateValues) {
        clearAllVolumeInputs();
        document.getElementById(event.target.id).value = unitValue;
    } else {
        const numberOfCups = convertUnitToCups(unitValue, unitType);
        calculateAndSetFormattedVolumeValues(numberOfCups);
        document.getElementById(event.target.id).value = unitValue;
    }
}

cupInput.addEventListener('input',convertVolumeUnitsEventHandler)
teaspoonInput.addEventListener('input',convertVolumeUnitsEventHandler)
tablespoonInput.addEventListener('input',convertVolumeUnitsEventHandler)
milliliterInput.addEventListener('input',convertVolumeUnitsEventHandler)
literInput.addEventListener('input',convertVolumeUnitsEventHandler)
pintInput.addEventListener('input',convertVolumeUnitsEventHandler)
quartInput.addEventListener('input',convertVolumeUnitsEventHandler)
gallonInput.addEventListener('input',convertVolumeUnitsEventHandler)
fluidounceInput.addEventListener('input',convertVolumeUnitsEventHandler)