// Returns the sum of all the stdents id

/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import getListStudents from './0-get_list_students';

const getStudentIdsSum = (getListStudents) => {
  const students_ids = [];
  getListStudents.forEach((student_id) => {
    students_ids.push(student_id.id);
  });
  const sum = students_ids.reduce((sumSofar, currentvalue) => sumSofar + currentvalue);
  return sum;
};

export default getStudentIdsSum;
