const sass = require('node-sass')

module.exports = {
  '_tanh($x)': x => {
    if (!(x instanceof sass.types.Number)) {
      throw "$x: Expected a number."
    } else if (x.getUnit()) {
      throw '$x: Expected a unitless number.'
    }

    return new sass.types.Number(Math.tanh(x.getValue()))
  }
}