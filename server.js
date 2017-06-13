let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    noInfo: true
}).listen(5000, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:5000/');
});