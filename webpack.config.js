var path = require('path');

const PATHS = {
    public: path.join(__dirname, '/public'),
    app: path.join(__dirname, '/app')
};

module.exports = {

    entry: path.join(PATHS.app, '/app.jsx'),

    output: {
        path: PATHS.public,
        filename: "app.bundle.js"
    },

    module: {
        // preLoaders: [
        //     {
        //         test: /(\.js$|\.jsx$)/,
        //         exclude: /node_modules/,
        //         loader: "eslint-loader"
        //     }
        // ],
        loaders: [
            {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default. If you need something
                // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: '.eslintrc'
    }

};
