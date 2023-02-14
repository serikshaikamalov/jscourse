const budgetFormInput = document.querySelector(".budget-form__input");
const budgetFormButton = document.querySelector(".budget-form__button");

// Expenses form
const expenseTitleInput = document.querySelector(".expenses-form__title");
const expensePriceInput = document.querySelector(".expenses-form__price");
const expenseButton = document.querySelector(".expenses-form__button");

const budgetAmount = document.querySelector(".budget__amout");
const budgetExpensesAmount = document.querySelector(".budget__expenses");
const budgetBalance = document.querySelector(".budget__balance");

const expensesList = document.querySelector(".expenses-container");

budgetFormButton.addEventListener("click", () => {
  budgetAmount.innerHTML = budgetFormInput.value;
  budgetFormInput.value = 0;

  calculateBalance();
});

expenseButton.addEventListener("click", () => {
  const title = expenseTitleInput.value;
  const price = expensePriceInput.value;

  const expensesElement = document.createElement("div");
  expensesElement.setAttribute("class", "expenses-item flex flex-row");

  const expensesTitleLabel = document.createElement("div");
  expensesTitleLabel.setAttribute("class", "expenses-item__title");
  expensesTitleLabel.innerHTML = title;

  const expensesPriceLabel = document.createElement("div");
  expensesPriceLabel.setAttribute("class", "expenses-item__price");
  expensesPriceLabel.innerHTML = price;

  expensesElement.appendChild(expensesTitleLabel);
  expensesElement.appendChild(expensesPriceLabel);

  expensesList.appendChild(expensesElement);

  calculateExpenses();
  calculateBalance();
});

function calculateExpenses() {
  let total = 0;

  const all = document.querySelectorAll(".expenses-item");
  console.log(all);

  all.forEach((e) => {
    console.log(e);
    const price = e.querySelector(".expenses-item__price");
    total += Number(price.innerHTML);
  });

  budgetExpensesAmount.innerHTML = total;
}

function calculateBalance() {
  budgetBalance.innerHTML =
    budgetAmount.innerHTML - budgetExpensesAmount.innerHTML;
}
