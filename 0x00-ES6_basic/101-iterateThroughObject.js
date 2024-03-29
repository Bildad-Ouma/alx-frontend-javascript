export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    result += `${employee}|`;
  }

  // Remove the trailing '|' if there are any employees
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}
