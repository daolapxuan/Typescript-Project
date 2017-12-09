var employeeCode = document.getElementById('employee-code');
var employeeName = document.getElementById('employee-name');
var employeeSalary = document.getElementById('employee-salary');
var employeeType = document.getElementsByName('employeeType');
console.log(employeeType);
var addEmployee = document.getElementById('add-employee');
var exportEmployee = document.getElementById('export-employee');
var Employee = /** @class */ (function () {
    function Employee(code, name, salary, type) {
        this.employeeCode = code;
        this.employeeName = name;
        this.employeeSalary = salary;
        this.employeeType = type;
    }
    return Employee;
}());
// function Employee(code, name, salary) {
//     this.c = code;
//     this.n = name;
//     this.s = salary;
// }
var listEmployee = /** @class */ (function () {
    function listEmployee() {
        this.employeeList = [];
    }
    listEmployee.prototype.AddEmployee = function (newEmployee) {
        this.employeeList.push(newEmployee);
    };
    return listEmployee;
}());
// function listEmployee() {
//     this.danhsach = [];
//     this.themNV = function(nvmoi) {
//         this.danhsach.push(nvmoi);
//     }
// }
var newList = new listEmployee();
addEmployee.addEventListener('click', function () {
    var _code = employeeCode.value;
    var _name = employeeName.value;
    var _salary = parseInt(employeeSalary.value);
    var _type;
    console.log(employeeType.length);
    for (var i = 0; i < employeeType.length; i++) {
        console.log(employeeType.length);
        if (employeeType[i].checked) {
            if (employeeType[i].value == 1) {
                _type = "Trùm";
            }
            else if (employeeType[i].value == 2) {
                _type = "Thủ lĩnh";
            }
            else {
                _type = "Cu li";
            }
        }
    }
    console.log(_type);
    var newEmployee = new Employee(_code, _name, _salary, _type);
    newList.AddEmployee(newEmployee);
    console.log(newList);
});
exportEmployee.addEventListener('click', function () {
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    for (var i = 0; i < newList.employeeList.length; i++) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (var j = 0; j < 4; j++) {
            var th = document.createElement('th');
            tr.appendChild(th);
            if (j == 0) {
                th.innerHTML = newList.employeeList[i].employeeCode;
            }
            else if (j == 1) {
                th.innerHTML = newList.employeeList[i].employeeName;
            }
            else if (j == 2) {
                th.innerHTML = newList.employeeList[i].employeeSalary.toString();
            }
            else {
                th.innerHTML = newList.employeeList[i].employeeType;
            }
        }
    }
});
