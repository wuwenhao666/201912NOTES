const path = require('path')

module.exports = {
    entry:'./src/main/js',
    output: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
}