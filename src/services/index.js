const students = require('./students/students.service.js');
const users = require('./users/users.service.js');
module.exports = function (app) {
  app.configure(students);
  app.configure(users);
};
