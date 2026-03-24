let height = document.querySelector('.height')
let weight = document.querySelector('.weight')
let bmi = document.querySelector('.resultContainer__bmiNumber')
let input = document.querySelectorAll('.input')
let welcomeText = document.querySelector('.resultContainer__welcomeText')
let welcomeInstructionText = document.querySelector('.resultContainer__welcomeInstructionText')
let resultText = document.querySelector('.resultContainer__text')
let resultDetail = document.querySelector('.resultContainer__detailText')
let bmiDescription = document.querySelector('.resultDetailSection__articleContainer__text')
let bmiLimits = document.querySelector('.resultContainer__detailText')
let minBmi = 0
let maxBmi = 0
let metricInput = document.querySelector('#metric')
let imperialInput = document.querySelector('#imperial')
let radioInputsCheckedCircle = document.querySelectorAll('.radioInputCheckedCircle')
let radioInputBackground = document.querySelectorAll('.radioInput')
let centimeterText = document.querySelector('.centimeterText')
let kilogramText = document.querySelector('.kilogramText')
let stoneText = document.querySelector('.stoneText')
let poundsText = document.querySelector('.poundsText')
let footText = document.querySelector('.footText')
let inchesText = document.querySelector('.inchesText')
let footInput = document.querySelector('#foot')
let inchesInput = document.querySelector('#inches')
let stoneInput = document.querySelector('#stone')
let poundsInput = document.querySelector('#pounds')
let inchesContainer = document.querySelector('.inchesContainer')
let poundsContainer = document.querySelector('.poundsContainer')
let metricsContainer = document.querySelector('.calculationContainer__inputsContainer')


metricInput.addEventListener('input', function () {
    if (metricInput.checked) {
        radioInputsCheckedCircle[0].classList.add('radioInputChecked')
        radioInputBackground[0].classList.add('radioInput--checked')

        radioInputsCheckedCircle[1].classList.remove('radioInputChecked')
        radioInputBackground[1].classList.remove('radioInput--checked')

        kilogramText.classList.remove('hidden')
        centimeterText.classList.remove('hidden')

        height.classList.remove('hidden')
        weight.classList.remove('hidden')

        stoneText.classList.add('hidden')
        poundsText.classList.add('hidden')
        footText.classList.add('hidden')
        inchesText.classList.add('hidden')

        footInput.classList.add('hidden')
        inchesInput.classList.add('hidden')
        stoneInput.classList.add('hidden')
        poundsInput.classList.add('hidden')

        inchesContainer.classList.add('hidden')
        poundsContainer.classList.add('hidden')

        metricsContainer.classList.add('displayCmKg')


    } else {
        radioInputsCheckedCircle[0].classList.remove('radioInputChecked')
        radioInputsCheckedCircle[0].classList.remove('radioInput--checked')

        kilogramText.classList.add('hidden')
        centimeterText.classList.add('hidden')

        height.classList.add('hidden')
        weight.classList.add('hidden')

        stoneText.classList.remove('hidden')
        poundsText.classList.remove('hidden')
        footText.classList.remove('hidden')
        inchesText.classList.remove('hidden')

        footInput.classList.remove('hidden')
        inchesInput.classList.remove('hidden')
        stoneInput.classList.remove('hidden')
        poundsInput.classList.remove('hidden')

        inchesContainer.classList.remove('hidden')
        poundsContainer.classList.remove('hidden')

        metricsContainer.classList.remove('displayCmKg')
    }
})

imperialInput.addEventListener('input', function () {
    if (imperialInput.checked) {
        radioInputsCheckedCircle[1].classList.add('radioInputChecked')
        radioInputBackground[1].classList.add('radioInput--checked')

        radioInputsCheckedCircle[0].classList.remove('radioInputChecked')
        radioInputBackground[0].classList.remove('radioInput--checked')

        kilogramText.classList.add('hidden')
        centimeterText.classList.add('hidden')

        height.classList.add('hidden')
        weight.classList.add('hidden')

        stoneText.classList.remove('hidden')
        poundsText.classList.remove('hidden')
        footText.classList.remove('hidden')
        inchesText.classList.remove('hidden')

        footInput.classList.remove('hidden')
        inchesInput.classList.remove('hidden')
        stoneInput.classList.remove('hidden')
        poundsInput.classList.remove('hidden')

        inchesContainer.classList.remove('hidden')
        poundsContainer.classList.remove('hidden')

        metricsContainer.classList.remove('displayCmKg')

    } else {
        radioInputsCheckedCircle[1].classList.remove('radioInputChecked')
        radioInputBackground[1].classList.remove('radioInput--checked')

        kilogramText.classList.remove('hidden')
        centimeterText.classList.remove('hidden')

        height.classList.remove('hidden')
        weight.classList.remove('hidden')

        stoneText.classList.add('hidden')
        poundsText.classList.add('hidden')
        footText.classList.add('hidden')
        inchesText.classList.add('hidden')

        footInput.classList.add('hidden')
        inchesInput.classList.add('hidden')
        stoneInput.classList.add('hidden')
        poundsInput.classList.add('hidden')

        inchesContainer.classList.add('hidden')
        poundsContainer.classList.add('hidden')

        metricsContainer.classList.add('displayCmKg')
    }
})




input.forEach(input => {
    input.addEventListener('input', function () {

        if (metricInput.checked) {
            if (height.value != "" && weight.value != "") {

                let metricHeight = height.value / 100

                result = weight.value / (metricHeight * metricHeight)

                let fixedResult = result.toFixed(1)

                bmi.textContent = fixedResult

                setBmiDescription(fixedResult, metricHeight)

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

                bmiDescription.textContent = `A Body Mass Index (BMI) result is a screening tool based on height and weight that categorizes body fat into four ranges: Underweight (<18.5), Healthy Weight (18.5–24.9), Overweight (25.0–29.9), and Obese (30.0+). It estimates potential health risks; however, it does not distinguish between muscle and fat, meaning it may not be accurate for athletes or individuals with high muscle mass.`
            }
        }



    })
});


function setBmiDescription(fixedResult, metricHeight) {

    minBmi = 18.5 * (metricHeight * metricHeight)
    maxBmi = 24.9 * (metricHeight * metricHeight)

    if (fixedResult < 18.5) {
        bmiDescription.textContent = `A BMI of 18.4 or below is classed as underweight. This suggests you could benefit from gaining weight. Working towards a healthier weight range could strengthen your immune system and help prevent bone fractures.`

        bmiLimits.textContent = `Your BMI suggests you’re underweight. Your ideal weight is between ${minBmi.toFixed(1)}kgs - ${maxBmi.toFixed(1)}kgs.`

    } else if (fixedResult < 25) {
        bmiDescription.textContent = `A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.`

        bmiLimits.textContent = `Your BMI suggests you’re a healthy weight. Your ideal weight is between ${minBmi.toFixed(1)}kgs - ${maxBmi.toFixed(1)}kgs.`

    } else if (fixedResult < 30) {
        bmiDescription.textContent = `A BMI between 25 and 29.9 is classed as overweight. An overweight result suggests you could benefit from making some healthy changes. If you want to lose some weight, working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabetes and heart disease.`

        bmiLimits.textContent = `Your BMI suggests you’re overweight. Your ideal weight is between ${minBmi.toFixed(1)}kgs - ${maxBmi.toFixed(1)}kgs.`

    } else {
        bmiDescription.textContent = `A BMI of 30 or more is classed as obese. An obese result suggests you are carrying too much weight and you would benefit from making some healthy changes. If you want to lose some weight, slowly working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabetes and heart disease.`

        bmiLimits.textContent = `Your BMI suggests you’re obese. Your ideal weight is between ${minBmi.toFixed(1)}kgs - ${maxBmi.toFixed(1)}kgs.`
    }

}


