// const PrerenderSPAPlugin = require('prerender-spa-plugin');

/**
 * This is an extension for the webpack that resides in the cli-service Plugin.
 * This extension configures the prerender-spa-plugin
 * @author Sujil Maharjan
 */
/* eslint-disable */
module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') return;

    return {
      plugins: [
        /*
        new PrerenderSPAPlugin({
          // Absolute path to compiled SPA
          staticDir: path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          routes: ['/', '/about','/login'],
        }),
        */
      ],
    };
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, { name: '[name].[ext]' }));
  },
  publicPath: "shopping",
  // devServer: {
  //   // open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   disableHostCheck: true,
  //   allowedHosts: [
  //     '*',
  //   ],
  //   port: 5201, // CHANGE YOUR PORT HERE!
  //   // https: false,
  //   hotOnly: false,
  // },
  devServer: {
    proxy: 'http://shopping.gic-asenhoradosaneis.k3s',
    host: '0.0.0.0',
    disableHostCheck: true,
    allowedHosts: [
      '*',
    ],
  }
};
