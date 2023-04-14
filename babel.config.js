module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Api: './src/Api',
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          hooks: './src/hooks',
          i18n: './src/i18n',
          reactRedux: './src/reactRedux',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
  ],
};
