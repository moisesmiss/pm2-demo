module.exports = {
	apps : [
		{
			name   : 'vue',
			script : './node_modules/@vue/cli-service/bin/vue-cli-service.js',
			args   : 'serve',
    },
    {
      name: 'express',
      script: 'index.js',

    }
	],
};
