const sass = require('node-sass')

module.exports = {
  '_atan2($y, $x)': (y, x) => {
    if (!(x instanceof sass.types.Number)) {
      throw "$x: Expected a number."
    } else if (x.getUnit()) {
      throw '$x: Expected a unitless number.'
    }

    if (!(y instanceof sass.types.Number)) {
      throw "$y: Expected a number."
    } else if (y.getUnit()) {
      throw '$y: Expected a unitless number.'
    }

    return new sass.types.Number(Math.atan2(y.getValue(), x.getValue()))
  }
}