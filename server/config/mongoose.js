const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_task_api', {useNewUrlParser:true});

mongoose.Promise = global.Promise;

require('./../models/models.js')