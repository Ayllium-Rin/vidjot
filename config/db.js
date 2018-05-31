if(process.env.NODE_ENV === 'production'){
  module.exports = { mongoURI: 'mongodb://<Ayllium>:<Coder28JsPy>@ds243728.mlab.com:43728/vidjot-prod' }
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
