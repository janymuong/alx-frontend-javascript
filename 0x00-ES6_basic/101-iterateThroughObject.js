export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  // iterate over the report iterator;
  for (const employee of reportWithIterator) {
    employeeNames += `${employee} | `;
  }

  return employeeNames;
}
