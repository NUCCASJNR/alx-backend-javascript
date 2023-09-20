#!/usr/bin/node

// Students Controller

const readDatabase = require('../utils')
export default class StudentsController {
    static getAllStudents(request, response) {
        const CSV_FILE = process.argv[2];
        readDatabase(CSV_FILE)
            .then((result) => {
                response.status = 200;
                const resultString = JSON.stringify(result);
                const responseObj = JSON.parse(resultString);
                const final = {
                    sweStudentsList: responseObj.sweStudentsList,
                    csStudentsList: responseObj.csStudentsList,
                    csStudentsCount: responseObj.csStudentsCount,
                    sweStudentsCount: responseObj.sweStudentsCount,
                };
                response.end(
                    `This is the list of our students`
                    + `Number of students in CS: ${final.csStudentsCount}. List: ${final.csStudentsList}\n`
                    + `Number of students in SWE: ${final.sweStudentsCount}. List: ${final.sweStudentsList}`
                )
        });
    }
    static getAllStudentsByMajor(request, response) {
        const CSV_FILE = process.argv[2];
        const { major } = request.params;
        if (major !== 'CS' || major !== 'SWE') {
            response.status(500);
            response.send('Major parameter must be CS or SWE');
        } else {
            readDatabase(CSV_FILE)
                .then((res) => {
                    const selectedStudent = res[major];
                    response.status(200);
                    response.write(`List: ${selectedStudent}`);
                })
                .catch((error) => {
                    response.status(500);
                    response.write(error.message);
                })
                .finally(() => {
                    response.end();
                });
        }
    }
}
module.exports = StudentsController;