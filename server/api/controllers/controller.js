const SampleModel = require('../models/SampleModel.js')
const UserModel = require('../models/UserModel.js')

module.exports = {
    getModels: (req, res) => {
        SampleModel.find((err, models) => {
            err ? res.status(500).send(err) : res.status(200).json(models);
        })
    },
    addModel: (req, res) => {
        let model = new SampleModel()
        model.name = req.body.name
        model.save(err => {
            err ? res.status(500).send(err) : res.status(200).json({message: 'Model Created!'})
        })
    },
    updateModel: (req, res) => {
        SampleModel.findById(req.params.id, (err, model) => {
            if (err) {
                res.status(500).send(err)
            } else {
                model.name = req.body.name || 'Anonymous';
                model.save(error => {
                    error ? res.status(500).send(error) : res.status(204).json({message: 'Model Updated!'})
                });
            }
        })
    },
    deleteModel: (req, res) => {
        SampleModel.findByIdAndRemove(req.params.id, err => {
            console.log('REQ', req.params)
            err ? res.status(500).send(err) : res.status(204).json({message: 'Model Deleted!'})
        })
    },
    getUsers: (req, res) => {
        UserModel.find((err, models) => {
            err ? res.status(500).send(err) : res.status(200).json(models);
        })
    },
    addUser: (req, res) => {
        let model = new UserModel()
        model.username = req.body.username
        model.password = req.body.password
        model.save(err => {
            err ? res.status(500).send(err) : res.status(200).json({message: 'User Created!'})
        })
    }
}