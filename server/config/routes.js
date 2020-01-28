const mongoose = require('mongoose');
var path = require("path");

const n = require('../controllers/control.js');

module.exports = function(app){
    app.get('/api/pets', n.index);
    app.post('/api/pet', n.create);
    app.get('/api/pet/:_id', n.pet);
    app.put('/api/update/:_id', n.update);
    app.delete('/api/delete/:_id',n.delete);
    app.get('/api/petbyname/:name', n.petbyname);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
      });
}