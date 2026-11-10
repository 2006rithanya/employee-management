let employees = [];

const form = document.getElementById("employeeForm");
const list = document.getElementById("employeeList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const employee = {
        id: document.getElementById("empId").value,
        name: document.getElementById("empName").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value
    };

    employees.push(employee);

    displayEmployees();

    form.reset();
});

function displayEmployees() {

    list.innerHTML = "";

    employees.forEach(function(emp, index) {

        let row = `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.designation}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteEmployee(${index})">
                Delete
                </button>
            </td>
        </tr>`;

        list.innerHTML += row;
    });
}

function deleteEmployee(index) {

    employees.splice(index, 1);

    displayEmployees();
}
