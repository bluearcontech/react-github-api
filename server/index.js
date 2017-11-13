//requiring NPM modeles
var express = require('express');
var path = require('path')
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var webpack = require('webpack')
var middleware = require('../app/middleware')

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'development') {
	//webpack configuration
	const config = require('../webpack.config.dev');
	const compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	//Enable hot-middleware
	app.use(require('webpack-hot-middleware')(compiler));
	//Set the client folder for front end
	app.use(express.static(path.resolve(__dirname, 'app')));
}

app.use('*', middleware);

//Finally starting the listener
app.listen(3000, (err) => {
	if (err) {
		console.error(err)
	} else {
		console.log('app is listening on port ' + 3000 + '!');
	}
});
