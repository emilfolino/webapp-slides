var path = require("path");

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, ''),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};
