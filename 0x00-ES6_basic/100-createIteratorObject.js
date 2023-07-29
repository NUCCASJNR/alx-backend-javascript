export default function createIteratorObject(report) {
  const myarr = [];
  for (const item of Object.values(report.allEmployees)) {
    myarr.push(...item);
  }
  return myarr;
}
