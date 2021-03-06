const path = require('path')
const controller = require('./controllers/controller.js')

const mongoose = require('mongoose')
const db = 'mongodb://localhost/sampledb'

mongoose.connect(db, (error) => {
    if (error) {
        console.log(`Failed to connect to ${db}`)
    } else {
        console.log(`Connected to ${db}`)
    }
})

module.exports = function (app, express) {

    const router = express.Router()

    router.route('/models')
        .get(controller.getModels)
        .post(controller.addModel)

    router.route('/models/:id')
        .put(controller.updateModel)
        .delete(controller.deleteModel);

    router.route('/users')
        .get(controller.getUsers)
        .post(controller.addUser)

    app.use('/api', router)

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

}