const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

// Para definir mensagem de erro geral para um request
mongoose.Error.messages.general.requires = "O atributo {PATH} é obrigatório."

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'"
mongoose.Error.messages.default = "O '{VALUE}' não é um valor válido para o campo."
