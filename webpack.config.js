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
        preLoaders: [
            {
                test: /(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-0']
                },
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
