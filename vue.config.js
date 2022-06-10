/**
 * @type { import('@vue/cli-service').ProjectOptions }
 */
const config = {
  parallel: false,
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker');
  },
};

module.exports = config;
