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
        teaspoon: numberOfCups / 48,
        tablespoon: numberOfCups / 16,
        milliliter: numberOfCups / 236.6,
        liter: numberOfCups * 4.227,
        pint: numberOfCups * 2.402,
        quart: numberOfCups * 4.804,
        gallon: numberOfCups * 19.215,
        fluidounce: numberOfCups / 8,
        cup: numberOfCups,
    };
}

function convertUnitToCups(amount, unitType) {
    switch (unitType) {
        case 'teaspoon': return amount * 48;
        case 'tablespoon': return amount * 16;
        case 'milliliter': return amount * 236.6;
        case 'liter': return amount / 4.227;
        case 'pint': return amount / 2.402;
        case 'quart': return amount / 4.804;
        case 'gallon': return amount / 19.215;
        case 'fluidounce': return amount * 8;
        case 'cup': return amount;
    }
}

function decimalPlaces(number) {
    return ((+number).toFixed(20)).replace(/^-?\d*\.?|0+$/g, '').length;
}

const formatNumberForDisplay = (originalValue) => {
    if (Number.isNaN(originalValue)) {
        return ""
    }
    if (originalValue === 0) {
        return ""
    }
    else if (decimalPlaces(originalValue) <= 2) {
        return originalValue
    }
    else {
        return originalValue.toFixed(2);
    }
}

function convertVolumeUnitsEventHandler(event) {
    const unitType = event.target.id
    const unitValue = Number(event.target.value)
    const numberOfCups = convertUnitToCups(unitValue, unitType)
    const allMeasurements = getAllVolumeMeasurements(numberOfCups)
    const formattedCup = formatNumberForDisplay(allMeasurements.cup)
    const formattedTeaspoon = formatNumberForDisplay(allMeasurements.teaspoon)
    const formattedTablespoon = formatNumberForDisplay(allMeasurements.tablespoon)
    const formattedMilliliter = formatNumberForDisplay(allMeasurements.milliliter)
    const formattedLiter = formatNumberForDisplay(allMeasurements.liter)
    const formattedPint = formatNumberForDisplay(allMeasurements.pint)
    const formattedQuart = formatNumberForDisplay(allMeasurements.quart)
    const formattedGallon = formatNumberForDisplay(allMeasurements.gallon)
    const formattedFluidounce = formatNumberForDisplay(allMeasurements.fluidounce)

    if (unitValue === 0) {
        cupInput.value = ''
        teaspoonInput.value = ''
        tablespoonInput.value = ''
        milliliterInput.value = ''
        literInput.value = ''
        pintInput.value = ''
        quartInput.value = ''
        gallonInput.value = ''
        fluidounceInput.value = ''
    }
    else {
        cupInput.value = formattedCup
        teaspoonInput.value = formattedTeaspoon
        tablespoonInput.value = formattedTablespoon
        milliliterInput.value = formattedMilliliter
        literInput.value = formattedLiter
        pintInput.value = formattedPint
        quartInput.value = formattedQuart
        gallonInput.value = formattedGallon
        fluidounceInput.value = formattedFluidounce
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