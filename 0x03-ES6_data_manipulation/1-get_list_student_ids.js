/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import getListStudents from './0-get_list_students';

const getListStudentIds = (getListStudents) => {
  if (!Array.isArray(getListStudents)) {
    return ([]);
  }
  const student_ids = [];
  getListStudents.forEach((student_id) => {
    student_ids.push(student_id.id);
  });
  return student_ids;
};

export default getListStudentIds;
