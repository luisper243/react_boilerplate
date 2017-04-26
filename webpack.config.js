module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
  devtool:"#inline-source-map",
  	resolve: {
    	extensions: ['.js', '.jsx']
  	},
  	module: {
    	loaders: [
      	{
        	test: /\.js$|\.jsx$/,
        	loader: 'babel-loader',
        	exclude: /node_modules/
      	}
    	]
  	},
	externals: {
		'react/addons': 'react',                   //Enzyme
		'react/lib/ExecutionEnvironment': 'react', //Enzyme
		'react/lib/ReactContext':'react'           //Enzyme
	}
}