var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Ordinateur = new Schema({
    modele : String,
    Categorie : String,
    dateFabrication : Date,
    prix : Number
})
module.exports = mongoose.model('ordinateurs', Ordinateur)