/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import getListStudents from './0-get_list_students';

const getListStudentIds = (getListStudents) => {
  if (!Array.isArray(getListStudents)) {
    return ([]);
  }
  return getListStudents.map((student_id) => student_id.id);
};

export default getListStudentIds;
