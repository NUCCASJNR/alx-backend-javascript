// a function named getListStudents that returns an array of objects.

// Each object should have three attributes: id (Number), firstName (String), and location (String).

// The array contains the following students in order:

// Guillaume, id: 1, in San Francisco
// James, id: 2, in Columbia
// Serena, id: 5, in San Francisco

/* eslint-disable */
const getListStudents = (id, firstName, location) => {
  const student1 = { id: id, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  const newarr = [];
  newarr.push(student1, student2, student3);
  return newarr;
};

export default getListStudents;
