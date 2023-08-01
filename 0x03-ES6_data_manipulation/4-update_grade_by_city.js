/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import getListStudents from './0-get_list_students';

const updateStudentGradeByCity = (getListStudents, city, newGrades) => {
  const student_city = getListStudents.filter((student) => student.location === city);

  const updatedStudents = student_city.map((student) => {
    const updatedGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (updatedGrade) {
      return { ...student, grade: updatedGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
};

export default updateStudentGradeByCity;
