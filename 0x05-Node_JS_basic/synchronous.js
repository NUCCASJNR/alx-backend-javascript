#!/usr/bin/node

const fs = require('fs');

const csvFilePath = 'database.csv';
const columnToPrint = 'age';
try {
  const csvData = fs.readFileSync(csvFilePath, 'utf8');
  const rows = csvData.split('\n');
  console.log(rows)
  // Find the index of the specified column in the header row.
  const headerRow = rows[0].split(',');
  console.log(headerRow)
  const columnIndex = headerRow.indexOf(columnToPrint);
  console.log(columnIndex)

  if (columnIndex === -1) {
    console.error(`Column "${columnToPrint}" not found in the CSV.`);
  } else {
    // Iterate through the rows and print the specified column for each row.
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      const columnValue = row[columnIndex];
      console.log(columnValue);
    }

    console.log('CSV file reading is complete.');
  }
} catch (error) {
  console.error('Error reading the file:', error);
}
