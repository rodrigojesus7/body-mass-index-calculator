let height = document.querySelector('.height')
let weight = document.querySelector('.weight')
let bmi = document.querySelector('.resultContainer__bmiNumber')
let input = document.querySelectorAll('.input')

input.forEach(input => {
    input.addEventListener('input', function () {

        if (height.value != "" && weight.value != "") {

            let metricHight = height.value / 100

            result = weight.value / (metricHight * metricHight)

            let fixedResult = result.toFixed(1) 

            bmi.textContent = `${fixedResult}`

        }

    })
});