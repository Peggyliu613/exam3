const mongoose = require('mongoose');
const Pet = mongoose.model('Pet')

module.exports = {
    index: function(req, res){
        Pet.find().sort({type:1}).exec()
            .catch(err => res.json(err))
            .then(pets => res.json(pets));
    },
    pet: function(req, res){
        Pet.findOne({_id: req.params._id})
            .catch(err => res.json(err))
            .then(pet => res.json(pet));
    },
    create: function(req, res){
        console.log(req.body);
        var newPet = new Pet();
        newPet.name = req.body.name;
        newPet.type = req.body.type;
        newPet.desc = req.body.desc;
        if(req.body.skill1){newPet.skills.push(req.body.skill1)};
        if(req.body.skill2){newPet.skills.push(req.body.skill2)};
        if(req.body.skill3){newPet.skills.push(req.body.skill3)};
        newPet.save()
            .catch(err => res.json(err))
            .then(created => res.json(created));
    },
    update: function(req, res){
        Pet.update({_id: req.params._id}, req.body, {runValidators: true})
            .catch(err => res.json(err))
            .then(updated => res.json(updated));
    },
    delete: function(req, res){
        Pet.remove({_id: req.params._id})
            .catch(err => res.json(err))
            .then(deleted => res.json(deleted));
    },
    petbyname: function(req, res){
        Pet.findOne({name: req.params.name})
            .catch(err => res.json(err))
            .then(pet => res.json(pet));
    },
};