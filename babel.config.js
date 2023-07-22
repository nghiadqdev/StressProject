module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          "@constants": "./src/constants",
          "@homeScreen": "./src/screens/HomeScreen",
          "@profileScreen": "./src/screens/ProfileScreen",
          "@settingScreen": "./src/screens/SettingScreen",
          "@config": "./src/config",
          "@i18n": "./src/i18n",
          "@components": "./src/components",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
