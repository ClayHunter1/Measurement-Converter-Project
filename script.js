const teaspoon = document.getElementById('teaspoon')
const tablespoon = document.getElementById('tablespoon')
const cup = document.getElementById('cup')
const milliliter = document.getElementById('milliliter')
const liter = document.getElementById('liter')
const pint = document.getElementById('pint')
const quart = document.getElementById('quart')
const gallon = document.getElementById('gallon')
const fluidounce = document.getElementById('fluidounce')



const emptyallfields = () => {

    teaspoon.value = tablespoon.value = cup.value = milliliter.value = liter.value = pint.value = quart.value = gallon.value = fluidounce.value = ""

}



milliliter.addEventListener('input', function () {

    inputvalue = milliliter.value
    if (inputvalue === "") {
        emptyallfields()
    } else {
        liter.value = this.inputvalue / 1000
    }

})



liter.addEventListener('input', function () {

    inputvalue = liter.value
    if (inputvalue === "") {
        emptyallfields
    } else {
        milliliter.value = this.inputvalue * 1000
    }

})