import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const alphas = getStudentIdsSum(['a', 'b', 'c'])
const value = getStudentIdsSum(students);
console.log(value)
console.log(alphas)