if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb+srv://Root:1234@vidjot-prod-owrdr.mongodb.net/test?retryWrites=true&w=majority'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}