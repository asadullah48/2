// Step 2: Define an array named employees containing employee objects
var employees = [
    { name: "Asad", hoursWorked: 22, hourlyRate: 15, salary: 0 },
    { name: "Usman", hoursWorked: 18, hourlyRate: 20, salary: 0 },
    { name: "Mansoor", hoursWorked: 25, hourlyRate: 10, salary: 0 },
    { name: "Ifraheem", hoursWorked: 30, hourlyRate: 12, salary: 0 }
];
// Step 3 and 4: Implement the calculateSalary function
function calculateSalary(employee) {
    // Calculate basic salary
    var basicSalary = employee.hoursWorked * employee.hourlyRate;
    // Check if hoursWorked is 20 or more to apply bonus
    if (employee.hoursWorked >= 20) {
        // Apply 10% bonus
        basicSalary += basicSalary * 0.10;
        console.log("Bonus is given");
    }
    // Update the salary property of the employee
    employee.salary = basicSalary;
    // Return the final salary
    return basicSalary;
}
// Calculate the salary for each employee in the array
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var emp = employees_1[_i];
    calculateSalary(emp);
}
// Display the results
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    var emp = employees_2[_a];
    console.log("Employee: ".concat(emp.name, ", Salary: ").concat(emp.salary.toFixed(2)));
}
;
