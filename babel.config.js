module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // add the following
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
