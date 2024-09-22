function inputValueById(id){
    let allInputValue = document.getElementById(id).value;
    let convertValueNum = Number(allInputValue);
    return convertValueNum;
} 

function inputInnerValueById(id){
    let allInnerInputValue = document.getElementById(id).innerText;
    let convertInnerValueNum = Number(allInnerInputValue);
    return convertInnerValueNum;
} 