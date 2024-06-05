
let monthobj=[]
let savings = [];
const form = document.getElementById('salaryForm');
const tableBody = document.getElementById('tableBody');

form.addEventListener("submit",handleSubmit);

function handleSubmit(e){

    e.preventDefault();
    /*In the context of a form submission like in the code provided, 
    e.preventDefault() is used to prevent the form from submitting in the traditional manner, 
    which involves reloading the page. Instead, it allows us to handle the form submission entirely with JavaScript. */

    const monthlySalary = parseInt(document.getElementById('monthlySalary').value);
    const monthlyExpense = parseInt(document.getElementById('monthlyExpense').value);

    //parses a value as a string and returns the first integer.


    if (isNaN(monthlySalary) || isNaN(monthlyExpense)) {
        console.error("Invalid input. Please enter numeric values for monthly salary and expense.");
        return;
    }

    const monthlySaving = monthlySalary - monthlyExpense;
    savings.push(monthlySaving);

    const month = monthobj.length + 1;

    const submissionData = {
                month: month,
                monthlySalary: monthlySalary,
                monthlyExpense: monthlyExpense,
                monthlySaving: monthlySaving
    };

    monthobj.push(submissionData);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${month}</td>
        <td>${monthlySalary}</td>
        <td>${monthlyExpense}</td>
        <td>${monthlySaving}</td>
    `;
    tableBody.appendChild(newRow);


    if (monthobj.length === 12) {
        const totalSavings = monthobj.reduce((acc, curr) => acc + curr.monthlySaving, 0);
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td colspan="3">Total Savings in a Year</td>
            <td>${totalSavings}</td>
        `;
        tableBody.appendChild(totalRow);
        form.removeEventListener('submit', arguments.callee);
        console.log(JSON.stringify(submissions)); // Output the data as JSON string
    }
}

 //   result.innerHTML = content;
   // document.getElementsByClassName('container')[0].appendChild(result);