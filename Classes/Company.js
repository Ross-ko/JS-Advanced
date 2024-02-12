class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    salary = Number(salary);
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    } else if (salary < 0) {
      throw new Error("Invalid input!");
    }
    if (!this.departments[department]) {
      this.departments[department] = {
        avrgSalary: 0,
        sumSalary: 0,
        employees: [],
      };
    }

    this.departments[department].employees.push({ name, salary, position });
    this._updateDepartment(department, salary);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDepartment = this._whichIsBestDepartment();
    let buffer = `Best Department is: ${bestDepartment[0]}\n`;
    buffer += `Average salary: ${bestDepartment[1].avrgSalary.toFixed(2)}\n`;
    bestDepartment[1].employees
      .sort((e1, e2) => {
        return e2.salary - e1.salary || e1.name.localeCompare(e2.name);
      })
      .forEach(
        (emp) => (buffer += `${emp.name} ${emp.salary} ${emp.position}\n`)
      );

    return buffer.trim();
  }

  _whichIsBestDepartment() {
    return Object.entries(this.departments).sort(
      (a, b) => b[1].avrgSalary - a[1].avrgSalary
    )[0];
  }

  _updateDepartment(department, salary) {
    this.departments[department].sumSalary += salary;
    this.departments[department].avrgSalary =
      this.departments[department].sumSalary /
      this.departments[department].employees.length;
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
