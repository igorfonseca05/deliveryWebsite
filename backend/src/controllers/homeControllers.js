const dishModel = require('../model/model')


dishModel.find()
    .then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })


exports.home = (req, res) => {
    res.setHeader('Content-type', 'text')

    res.write('to aqui')
    res.end()
}