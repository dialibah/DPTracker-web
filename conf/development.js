module.exports = {
	webpackDevServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:9090',
				pathRewrite: {'^/api' : ''}
			}
		}
	}
};
