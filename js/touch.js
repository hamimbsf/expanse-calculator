const assistant = document.getElementById('assistant');
const history = document.getElementById('history');
assistant.addEventListener('click', function() {
    assistant.classList.add('btn-secondary');
    const history = document.getElementById('history');
    history.classList.remove('btn-secondary');
    const assistantForm = document.getElementById('assistant-form');
    assistantForm.classList.remove('hidden');
    const expenseHistory = document.getElementById('expense-history');
    expenseHistory.classList.add('hidden');
});

history.addEventListener('click', function() {
    const history = document.getElementById('history');
    history.classList.add('btn-secondary');
    assistant.classList.remove('btn-secondary');
    const assistantForm = document.getElementById('assistant-form');
    assistantForm.classList.add('hidden');
    const expenseHistory = document.getElementById('expense-history');
    expenseHistory.classList.remove('hidden');
});

