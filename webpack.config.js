const path = require('path');

module.exports = {
    // mode: 'development',
    // mode: 'production',
    entry: './js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
