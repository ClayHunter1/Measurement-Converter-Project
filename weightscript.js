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

function convertWeightUnitsEventHandler(event) {
    console.log(event)
    const unitType = event.target.id
    const unitValue = Number(event.target.value)
    console.log (unitType, unitValue)
    console.log(typeof unitValue)
    const numberOfGrams = convertUnitToGrams(unitValue, unitType)
    console.log(numberOfGrams)
    const allMeasurements = getAllWeightMeasurements(numberOfGrams)

    roundedGrams = allMeasurements.gram.toFixed(2);
    roundedKilograms = allMeasurements.kilogram.toFixed(2);
    roundedOunces = allMeasurements.ounce.toFixed(2);
    roundedPounds = allMeasurements.pound.toFixed(2);

    if (unitValue === 0) {
        gramInput.value = ''
        kilogramInput.value = ''
        ounceInput.value = ''
        poundInput.value = ''
    }
    else {
        gramInput.value = roundedGrams
        kilogramInput.value = roundedKilograms
        ounceInput.value = roundedOunces
        poundInput.value = roundedPounds
    }
}

gramInput.addEventListener('input',convertWeightUnitsEventHandler)
kilogramInput.addEventListener('input',convertWeightUnitsEventHandler)
ounceInput.addEventListener('input',convertWeightUnitsEventHandler)
poundInput.addEventListener('input',convertWeightUnitsEventHandler)