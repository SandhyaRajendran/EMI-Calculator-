
//targeted
const homeLoan = document.querySelector('#homeLoan')
const intrestRate = document.querySelector('#intrestRate')
const loanTenure = document.querySelector('#loanTenture')
const total = document.querySelector('.totals')
const mbtn = document.querySelector('.mbtn')
const ybtn = document.querySelector('.ybtn')
const firstOP = document.querySelector('.oneval')
const secondOP = document.querySelector('.twoval')
const thirdOP = document.querySelector('.threeval')
const clrBtn = document.querySelector('.clrbtn')
// console.log(thirdOP)

//here we assign the input value
homeLoan.value = homeLoan.value
intrestRate.value = intrestRate.value
loanTenure.value = loanTenure.value

//here we wrote a funtion for month button
mbtn.addEventListener('click', (e) => {
    if (homeLoan.value == '' || intrestRate.value == '' || loanTenure.value == '') {
        alert('please enter all value')
        firstOP.innerText = ''
        secondOP.innerText = ''
        thirdOP.innerText = ''
    }
    let emi = [((homeLoan.value) * (intrestRate.value) / 1200) * ((1 + (intrestRate.value) / 1200) ** loanTenure.value)] / [((1 + (intrestRate.value) / 1200) ** loanTenure.value) - 1];
    firstOP.innerText = "₹" + Math.round(emi) + '/-'
    const last = Math.abs(Number(homeLoan.value) - (emi * loanTenure.value))
    secondOP.innerText = "₹" + Math.round(emi * loanTenure.value) + '/-'
    thirdOP.innerText = "₹" + Math.round(last) + '/-';
    if (intrestRate.value == 0) {
        alert('please enter interstrate value more than 0')
        firstOP.innerText = ''
        secondOP.innerText = ''
        thirdOP.innerText = ''
    }
})

//here we wrote a funtion for year button
ybtn.addEventListener('click', () => {
    if (homeLoan.value == '' || intrestRate.value == '' || loanTenure.value == '') {
        alert('please enter all value')
        firstOP.innerText = ''
        secondOP.innerText = ''
        thirdOP.innerText = ''
        homeLoan.value = ''
        intrestRate.value = ''
        loanTenure.value = ''
    }
    const loanTentureval = (loanTenure.value * 12)
    let emi = [((homeLoan.value) * (intrestRate.value) / 1200) * ((1 + (intrestRate.value) / 1200) ** loanTentureval)] / [((1 + (intrestRate.value) / 1200) ** loanTentureval) - 1];
    firstOP.innerText = "₹" + Math.round(emi) + '/-'
    const last = Math.abs(Number(homeLoan.value) - (emi * loanTentureval))
    secondOP.innerText = "₹" + Math.round(emi * loanTentureval) + '/-'.toLocaleString()
    thirdOP.innerText = "₹" + Math.round(last) + '/-'.toLocaleString()

    if (intrestRate.value == 0) {
        alert('please enter interstrate value more than 0')
        firstOP.innerText = ''
        secondOP.innerText = ''
        thirdOP.innerText = ''
        homeLoan.value = ''
        intrestRate.value = ''
        loanTenure.value = ''
    }

})

//here we wrote a funtion for clear button
clrBtn.addEventListener('click', () => {
    firstOP.innerText = ''
    secondOP.innerText = ''
    thirdOP.innerText = ''

    homeLoan.value = ''
    intrestRate.value = ''
    loanTenure.value = ''
})




