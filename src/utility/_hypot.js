const sass = require('node-sass')

module.exports = {
  '_hypot($x...)': x => {
    const list = []

    for (let i = 0; i < x.getLength(); i++) {
      const value = x.getValue(i)

      if (!(value instanceof sass.types.Number)) {
        throw "$x: Expected a number."
      } else if (value.getUnit()) {
        throw '$x: Expected a unitless number.'
      }

      list.push(value.getValue())
    }
    
    return new sass.types.Number(Math.hypot(...list))
  }
}