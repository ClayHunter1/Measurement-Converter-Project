const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');



function processinputs(event) {

    const changedinput = event.target;

    if (changedinput === input1) {

        input2.value = input1.value.toUpperCase();

    }

    else if (changedinput === input2) {

        input1.value = input2.value.toLowerCase();

    }

}



input1.addEventListener('input', processinputs);

input2.addEventListener('input', processinputs);