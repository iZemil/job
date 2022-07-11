const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
	nrwlConfig(config);

	return {
		...config,
		node: {
			global: true,
		},
	};
};
