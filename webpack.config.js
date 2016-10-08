module.exports = {

//First is the entry point of the bundle.
  entry : './client.js',

  output : {

    filename : 'bundle.js',

    path : 'public'

  },

  module : {

      loaders : [
        {
          test : /\.jsx$/,
          exclude : /node_modules/,
          loader : 'babel-loader',
          query : {
            presets : ['react', 'es2015']
          }
        }
      ]

  }



}
