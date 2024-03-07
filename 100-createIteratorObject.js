export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDepartmentIndex];
      const employee = department[currentEmployeeIndex];

      currentEmployeeIndex++;

      if (currentEmployeeIndex >= department.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }

      return {
        value: employee,
        done: false
      };
    }
  };

  return iterator;
}

