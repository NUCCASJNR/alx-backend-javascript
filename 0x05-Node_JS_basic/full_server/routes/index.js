const AppController = require('../controllers/AppController');
const studentController = require('../controllers/StudentsController');

const mapRoutes = (app) => {
    app.get('/', AppController.getHomepage);
    app.get('/students', studentController.getAllStudents);
    app.get('/students/:major', studentController.getAllStudentsByMajor);
}
module.exports = mapRoutes;
