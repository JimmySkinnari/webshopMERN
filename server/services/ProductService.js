const Product = require('../models/Product')

const deleteProduct = async (req, res) => {
    const id = req.params._id 
    Product.findByIdAndRemove(id).exec()
    res.send(result)
}

const getAll = async (req, res) => {
    Product.find( {}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

const search = async (req, res) => {

    console.log(req.params.val)
   
    Product.find(  { productName : { '$regex' : req.params.val, '$options' : 'i' } }, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

const getById = async (req, res) => {
    Product.findOne( {_id: req.params.id}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

exports.deleteProduct = deleteProduct
exports.getAll = getAll
exports.getById = getById
exports.search = search