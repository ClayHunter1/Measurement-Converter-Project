const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');



function getAllMeasurements(numberOfGrams) {
    
    return {
      
        teaspoon: numberOfGrams / 4.2,
      
        tablespoon: numberOfGrams / 14.3,
      
        cup: numberOfGrams / 227,
      
        ounce: numberOfGrams / 28.3,
      
        pound: numberOfGrams / 454,
    
    };

}



function processinputs(input) {

    const numberOfGrams = 100;

    const calculatedMeasurements = getAllMeasurements(numberOfGrams);

}



input1.addEventListener('input', processinputs);

input2.addEventListener('input', processinputs);