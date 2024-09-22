const calculate_btn = document.getElementById('calculate');
const savings_btn = document.getElementById('calculate-savings');
const incomeExpenses = document.getElementById('total-expenses');
const incomeBalance = document.getElementById('balance');
const savingsAmount = document.getElementById('savings-amount');
const remaining = document.getElementById('remaining-balance');
const resultContainer = document.getElementById('results');
const assistantTab = document.getElementById('assistant-tab');
const historyTab = document.getElementById('history-tab');
const expenseForm = document.getElementById('expense-form');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');


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

    let history = `
            <div class="">
              <h2>${new Date().toLocaleDateString()}</h2>
              <h2>Income ${incomeValue}</h2>
              <h2>Expenses ${incomeExpenses.innerText}</h2>
              <h2>Balance ${incomeBalance.innerText}</h2>
            </div>
    `
    historyList.innerHTML += history;
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
    expenseForm.classList.remove('hidden');
})



historyTab.addEventListener('click', function(event){
    historyTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    assistantTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    expenseForm.classList.add('hidden');
    historySection.classList.remove('hidden');
})




// Error handling
let incomeValue = inputValueById('income');
if(incomeValue < 0){
    console.log('hello world')
}