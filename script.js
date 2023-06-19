const gramInput = document.getElementById('gram')

const kilogramInput = document.getElementById('kilogram')

const poundInput = document.getElementById('pound')

const ounceInput = document.getElementById('ounce')

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



function getAllWeightMeasurements(numberOfGrams) {
    
    return {

        ounce: numberOfGrams / 28.3,
      
        pound: numberOfGrams / 454,

        kilogram: numberOfGrams / 1000,

        gram: numberOfGrams,

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



function convertUnitToGrams(amount, unitType) {

    switch (unitType) {

        case 'ounce': return amount * 28.3;

        case 'pound': return amount * 454;

        case 'kilogram': return amount * 1000;

        case 'gram': return amount;

    }

}



function convertVolumeUnitsEventHandler(event) {

    console.log(event)

    const unitType = event.target.id

    const unitValue = Number(event.target.value)

    console.log(typeof unitValue)

    const numberOfCups = convertUnitToCups(unitValue, unitType)

    const allMeasurements = getAllVolumeMeasurements(numberOfCups)

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



function convertWeightUnitsEventHandler(event) {

    console.log(event)

    const unitType = event.target.id

    const unitValue = Number(event.target.value)

    console.log (unitType, unitValue)

    console.log(typeof unitValue)

    const numberOfGrams = convertUnitToGrams(unitValue, unitType)

    console.log(numberOfGrams)

    const allMeasurements = getAllWeightMeasurements(numberOfGrams)

    gramInput.value = allMeasurements.gram

    kilogramInput.value = allMeasurements.kilogram

    ounceInput.value = allMeasurements.ounce

    poundInput.value = allMeasurements.pound
    
}



gramInput.addEventListener('input',convertWeightUnitsEventHandler)

kilogramInput.addEventListener('input',convertWeightUnitsEventHandler)

ounceInput.addEventListener('input',convertWeightUnitsEventHandler)

poundInput.addEventListener('input',convertWeightUnitsEventHandler)

cupInput.addEventListener('input',convertVolumeUnitsEventHandler)

teaspoonInput.addEventListener('input',convertVolumeUnitsEventHandler)

tablespoonInput.addEventListener('input',convertVolumeUnitsEventHandler)

milliliterInput.addEventListener('input',convertVolumeUnitsEventHandler)

literInput.addEventListener('input',convertVolumeUnitsEventHandler)

pintInput.addEventListener('input',convertVolumeUnitsEventHandler)

quartInput.addEventListener('input',convertVolumeUnitsEventHandler)

gallonInput.addEventListener('input',convertVolumeUnitsEventHandler)

fluidounceInput.addEventListener('input',convertVolumeUnitsEventHandler)