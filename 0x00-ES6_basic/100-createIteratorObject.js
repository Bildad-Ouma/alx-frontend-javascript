export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDepartmentIndex];
      const employees = allEmployees[department];

      if (currentEmployeeIndex >= employees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next(); // Move to the next department
      }

      return {
        value: employees[currentEmployeeIndex++],
        done: false
      };
    }
  };
}

























