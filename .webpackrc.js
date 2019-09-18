export default {
  "proxy": {
    "/api": {
      "target": "http://120.79.77.207:8080",
      "changeOrigin": true,
    },
  },
  "entry": "src/app.js",
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "ignoreMomentLocale": true,
  "html": {
    "template": "./src/app.ejs"
  },
  "publicPath": "/",
  "disableDynamicImport": true,
  "hash": true,
  "disableCSSModules": true
}
