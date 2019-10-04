const sass = require('node-sass')

module.exports = {
  '_pow($base, $exponent)': (base, exponent) => {
    if (!(base instanceof sass.types.Number)) {
      throw "$base: Expected a number."
    } else if (base.getUnit()) {
      throw '$base: Expected a unitless number.'
    }

    if (!(exponent instanceof sass.types.Number)) {
      throw "$exponent: Expected a number."
    } else if (exponent.getUnit()) {
      throw '$exponent: Expected a unitless number.'
    }

    return new sass.types.Number(Math.pow(base.getValue(), exponent.getValue()))
  }
}