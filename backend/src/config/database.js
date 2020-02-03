const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatorio"
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido paraa o atributo '{PATH}'"