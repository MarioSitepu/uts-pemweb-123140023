module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source-map-loader untuk menghindari error mencari file di parent directory
      // Source-map-loader mencoba load sourcemap dari semua node_modules termasuk parent directory
      const sourceMapLoaderIndex = webpackConfig.module.rules.findIndex(
        (rule) => 
          rule.enforce === 'pre' && 
          (rule.loader?.includes('source-map-loader') || 
           rule.use?.some?.((u) => u?.loader?.includes('source-map-loader')))
      );
      
      if (sourceMapLoaderIndex !== -1) {
        const rule = webpackConfig.module.rules[sourceMapLoaderIndex];
        // Exclude semua node_modules dari source-map-loader
        // Ini mencegah webpack mencari sourcemap di parent directory
        rule.exclude = /node_modules/;
      }

      return webpackConfig;
    },
  },
};

