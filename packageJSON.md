{
"name": "@begenone/pkgm-video",
"version": "1.0.0",
"private": true,
"main": "dist/index.js",
"scripts": {
"build": "babel src --out-dir dist --extensions .js,.jsx"
},
"peerDependencies": {
"@expo/vector-icons": "_",
"expo": "_",
"expo-video": "_",
"react": "_",
"react-native": "_"
},
"dependencies": {
"@begenone/pkgm-api": "workspace:_",
"@begenone/pkgm-shared": "workspace:\*",
"@expo/vector-icons": "^15.0.3"
},
"devDependencies": {
"@babel/cli": "^7.28.3",
"@babel/core": "^7.28.5",
"@babel/preset-env": "^7.28.5",
"metro-react-native-babel-preset": "^0.77.0"
}
}
