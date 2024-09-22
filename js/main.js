const calculate_btn = document.getElementById('calculate');
const incomeExpenses = document.getElementById('total-expenses');
const incomeBalance = document.getElementById('balance');
calculate_btn.addEventListener('click', function(){
    // Value pass start
    let incomeValue = inputValueById('income');
    let softwareValue = inputValueById('software');
    let coursesValue = inputValueById('courses');
    let internetValue = inputValueById('internet');
     // innerText pass start
     let incomeInnerValue = inputInnerValueById('total-expenses');
     let softwareInnerValue = inputInnerValueById('balance');
     let coursesInnerValue = inputInnerValueById('savings-amount');
     let internetInnerValue = inputInnerValueById('remaining-balance');
    
    let expenses =  softwareValue + coursesValue + internetValue;
    let balance_after_income = incomeValue - expenses;
    incomeExpenses.innerText = expenses;
    incomeBalance.innerText = balance_after_income;
    // incomeInnerValue = softwareValue + coursesValue + internetValue;

});