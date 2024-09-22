const calculate_btn = document.getElementById('calculate');
const savings_btn = document.getElementById('calculate-savings');
const incomeExpenses = document.getElementById('total-expenses');
const incomeBalance = document.getElementById('balance');
const savingsAmount = document.getElementById('savings-amount');
const remaining = document.getElementById('remaining-balance');
const resultContainer = document.getElementById('results');
const assistantTab = document.getElementById('assistant-tab');
const historyTab = document.getElementById('history-tab');

calculate_btn.addEventListener('click', function(){

    resultContainer.classList.remove('hidden');

    // Value pass start
    let incomeValue = inputValueById('income');
    let softwareValue = inputValueById('software');
    let coursesValue = inputValueById('courses');
    let internetValue = inputValueById('internet');



     // innerText pass start
    //  let incomeInnerValue = setInputInnerValueById('total-expenses');
    //  let softwareInnerValue = setInputInnerValueById('balance');
    //  let coursesInnerValue = setInputInnerValueById('savings-amount');
    //  let internetInnerValue = setInputInnerValueById('remaining-balance');
    


    let expenses =  softwareValue + coursesValue + internetValue;
    let balance_after_income = incomeValue - expenses;
    incomeExpenses.innerText = expenses.toFixed(2);
    incomeBalance.innerText = balance_after_income.toFixed(2);
    // incomeInnerValue = softwareValue + coursesValue + internetValue;

});

savings_btn.addEventListener('click', function(){



     // Value pass start
    let savingsInput = inputValueById('savings');
    let incomeBalanceInner = savingsInput * incomeBalance.innerText;
    let resultSaving = incomeBalanceInner/100;
    savingsAmount.innerText = resultSaving.toFixed(2);
    let remainingBalance = incomeBalance.innerText - resultSaving;
    remaining.innerText = remainingBalance.toFixed(2);


});


assistantTab.addEventListener('click', function(event){
    assistantTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    historyTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
})

historyTab.addEventListener('click', function(event){
    historyTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    assistantTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
})