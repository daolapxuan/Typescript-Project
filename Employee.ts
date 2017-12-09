let employeeCode = (<HTMLInputElement>document.getElementById('employee-code'));
let employeeName = (<HTMLInputElement>document.getElementById('employee-name'));
let employeeSalary = (<HTMLInputElement>document.getElementById('employee-salary'));
let employeeType:any = document.getElementsByName('employeeType');
console.log(employeeType);

let addEmployee = (<HTMLInputElement>document.getElementById('add-employee'));
let exportEmployee = (<HTMLInputElement>document.getElementById('export-employee'));

class Employee {
    employeeCode:string;
    employeeName:string;
    employeeSalary:number;
    employeeType:string;

    constructor(code, name, salary, type) {
        this.employeeCode = code;
        this.employeeName = name;
        this.employeeSalary = salary;
        this.employeeType = type;
    }
}



// function Employee(code, name, salary) {
//     this.c = code;
//     this.n = name;
//     this.s = salary;
// }

class listEmployee {
    public employeeList: Array<Employee> = [];
    public AddEmployee(newEmployee:Employee) {
        this.employeeList.push(newEmployee);
    }
}

// function listEmployee() {
//     this.danhsach = [];
//     this.themNV = function(nvmoi) {
//         this.danhsach.push(nvmoi);
//     }
// }

let newList = new listEmployee();

addEmployee.addEventListener('click', function() {
    let _code:string = employeeCode.value;
    let _name:string = employeeName.value;
    let _salary:number = parseInt(employeeSalary.value);
    let _type;
    console.log(employeeType.length);
    for (let i = 0; i < employeeType.length; i++) {
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

    let newEmployee = new Employee(_code, _name, _salary, _type);
    newList.AddEmployee(newEmployee);
    console.log(newList);
});


exportEmployee.addEventListener('click', function() {
    let tbody = (<HTMLInputElement>document.getElementById('tbody'));

    tbody.innerHTML = "";
    for (let i = 0; i < newList.employeeList.length; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (let j = 0; j < 4; j++) {
            let th = document.createElement('th');
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
