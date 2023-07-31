/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

const getStudentsByLocation = (getListStudents, city) => {
  const filtered = getListStudents.filter((student) => student.location === city);
  return filtered;
};

export default getStudentsByLocation;
