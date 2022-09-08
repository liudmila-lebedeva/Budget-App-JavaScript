// SELECT ELEMENTS

const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// SELECT BUTTONS

const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// SELECT INPUTS 

//expenses
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.querySelector(".expense-title-input");
const expenseAmount = document.querySelector(".expense-amount-input");
//income
const addIncome = document.querySelector(".add-income");
const incomeTitle = document.querySelector(".income-title-input");
const incomeAmount = document.querySelector(".income-amount-input");

// VARIABLES

let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = 'delete', EDIT = 'edit';

// EVENT LISTENERS

expenseBtn.addEventListener("click", function(){
    show(expenseEl);
    hide([incomeEl, AllEl]);
    active (expenseBtn);
    inactive ([incomeBtn, allBtn]);
})
incomeBtn.addEventListener("click", function(){
    show(incomeEl);
    hide([expenseEl, AllEl]);
    active (incomeBtn);
    inactive ([expenseBtn, allBtn]);
})
allBtn.addEventListener("click", function(){
    show(allEl);
    hide( [incomeEl, expenseEl] );
    active( allBtn );
    inactive( [incomeBtn, expenseBtn] );
})

//IF ONE OF THE INPUTS IS EMPTY => EXIT     expenses
addExpense.addEventListener("click", function(){
    if (!expenseTitle.value  || !expenseAmount.value) return;

    //SAVE THE ENTRY TO THE ENTRY LIST
let expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: expenseAmount.value
}
ENTRY_LIST.push(expense);
})

updateUI();
clearInput ([expenseTitle.value, expenseAmount.value]);



addExpense.addEventListener("click", function(){
    //IF ONE OF THE INPUTS IS EMPTY => EXIT     income
    if (!incomeTitle.value  || !incomeAmount.value) return;
//SAVE THE ENTRY TO THE ENTRY LIST
    let income = {
        type: "income",
        title: incomeTitle.value,
        amount: incomeAmount.value
    }
    ENTRY_LIST.push(income);
})

updateUI();
clearInput ([incomeTitle.value, incomeAmount.value]);








//====FUNCTIONS=====
function updateUI() {
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("outcome", ENTRY_LIST);
    balance = calculateBalance("income", "outcome");

    //update UI
    clearElement([expenseList, incomeList, allList]);
}

function clearElement(elements) {
    elements.forEach(element => {
        element.innerHTML = "";
    })
}

function calculateTotal (type, list) {
    let sum = 0;

    list.forEach(entry => {
        if (entry.type == type){
            sum += entry.amount;
        }
    })
    return sum;
}

function calculateBalance(income, outcome) {
    return income - outcome;
}

function clearInput(inputs) {
    inputs.forEach(input => {
        input.value = "";
    })
}


//show hide
function show(element) {
    element.classList.remove("hide");
}

function hide(element) {
    element.forEach(element =>{
        element.classList.add("hide");
    })
}
//active inactive
function active(element) {
    element.classList.add("active");
}

function inactive(element) {
    element.forEach(element =>{
        element.classList.remove("active");
    })
}