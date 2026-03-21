let height = document.querySelector('.height')
let weight = document.querySelector('.weight')
let bmi = document.querySelector('.resultContainer__bmiNumber')
let input = document.querySelectorAll('.input')
let welcomeText = document.querySelector('.resultContainer__welcomeText')
let welcomeInstructionText = document.querySelector('.resultContainer__welcomeInstructionText')
let resultText = document.querySelector('.resultContainer__text')
let resultDetail = document.querySelector('.resultContainer__detailText')

input.forEach(input => {
    input.addEventListener('input', function () {

        if (height.value != "" && weight.value != "") {

            let metricHight = height.value / 100

            result = weight.value / (metricHight * metricHight)

            let fixedResult = result.toFixed(1) 

            bmi.textContent = fixedResult

            welcomeText.classList.add('hidden')
            welcomeInstructionText.classList.add('hidden')

            resultText.classList.remove('hidden')
            resultDetail.classList.remove('hidden')
            bmi.classList.remove('hidden')

        } else {
            welcomeText.classList.remove('hidden')
            welcomeInstructionText.classList.remove('hidden')

            resultText.classList.add('hidden')
            resultDetail.classList.add('hidden')
            bmi.classList.add('hidden')
        }

    })
});


