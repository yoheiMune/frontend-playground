var calculator = require('./subsub1')
module.exports = function (number) {
    console.log('__filename', __filename)
    return calculator.add(number, number);
}