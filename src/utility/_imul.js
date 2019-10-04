const sass = require('node-sass')

module.exports = {
  '_imul($a, $b)': (a, b) => {
    if (!(a instanceof sass.types.Number)) {
      throw "$a: Expected a number."
    } else if (a.getUnit()) {
      throw '$a: Expected a unitless number.'
    }

    if (!(b instanceof sass.types.Number)) {
      throw "$b: Expected a number."
    } else if (b.getUnit()) {
      throw '$b: Expected a unitless number.'
    }

    return new sass.types.Number(Math.imul(a.getValue(), b.getValue()))
  }
}