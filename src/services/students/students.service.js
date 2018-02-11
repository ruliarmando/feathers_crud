// Initializes the `students` service on path `/students`
const createService = require('feathers-mongodb');
const hooks = require('./students.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/students', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('students');

  mongoClient.then(db => {
    service.Model = db.collection('students');
  });

  service.hooks(hooks);
};
