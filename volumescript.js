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

function convertVolumeUnitsEventHandler(event) {
    console.log(event)
    const unitType = event.target.id
    const unitValue = Number(event.target.value)
    console.log(typeof unitValue)
    const numberOfCups = convertUnitToCups(unitValue, unitType)
    const allMeasurements = getAllVolumeMeasurements(numberOfCups)
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
        cupInput.value = allMeasurements.cup
        teaspoonInput.value = allMeasurements.teaspoon
        tablespoonInput.value = allMeasurements.tablespoon
        milliliterInput.value = allMeasurements.milliliter
        literInput.value = allMeasurements.liter
        pintInput.value = allMeasurements.pint
        quartInput.value = allMeasurements.quart
        gallonInput.value = allMeasurements.gallon
        fluidounceInput.value = allMeasurements.fluidounce
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