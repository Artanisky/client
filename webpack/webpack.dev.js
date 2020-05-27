const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
      overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    }
})
