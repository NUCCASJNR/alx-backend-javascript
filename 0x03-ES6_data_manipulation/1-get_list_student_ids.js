/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

const getListStudentIds = (getListStudents) => {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const ids = [];
  getListStudents.forEach((student) => {
    ids.push(student.id);
  });
  return ids;
};

export default getListStudentIds;
