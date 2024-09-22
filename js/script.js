document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const income = getValueById("income");
    const software = getValueById("software");
    const course = getValueById("course");
    const internet = getValueById("internet");
    const expenses = software + course + internet;
    if (income < expenses) {
      alert("Expenses are more than income");
      return;
    }
    const remaining = income - expenses;
    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = expenses.toFixed(2);
    const balance = document.getElementById("balance");
    balance.innerText = remaining.toFixed(2);

    const result = document.getElementById("result");
    result.classList.remove("hidden");
     /* history list */
     const expenseHistoryList = document.createElement('div');
     expenseHistoryList.className = "bg-white p-2 border-l-2 border-indigo-500 rounded-md";
     expenseHistoryList.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-sm text-gray-500">Income: ${income.toFixed(2)}</p>
        <p class="text-sm text-gray-500">Expenses: ${expenses.toFixed(2)}</p>
        <p class="text-sm text-gray-500">Remaining: ${remaining.toFixed(2)}</p>
     `;
     const expenseHistoryListContainer = document.getElementById('expense-history-list');
     expenseHistoryListContainer.insertBefore(expenseHistoryList, expenseHistoryListContainer.firstChild);
  });
document
  .getElementById("calculate-savings")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const income = getValueById("income");
    const software = getValueById("software");
    const course = getValueById("course");
    const internet = getValueById("internet");
    const expenses = software + course + internet;
    const remaining = income - expenses;

    //to get the value of savings i have to divide the savings by remaining and multiply by 100
    // 1st step is get the value of savings ☑️
    const savings = getValueById("savings");
    //2nd step is  i have to divide the savings by remaining and multiply by 100
    const savingsAmount = (savings * remaining) / 100;

    const remainingBalance = remaining - savingsAmount;
    // console.log(savingsAmount);
    const showSavings = document.getElementById("savings-amount");
    showSavings.innerText = savingsAmount.toFixed(2);

    const showRemainingBalance = document.getElementById("remaining-balance");
    showRemainingBalance.innerText = remainingBalance.toFixed(2);
  });
