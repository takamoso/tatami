const sass = require('node-sass')

module.exports = {
  '_base64_encode($string)': string => {
    if (!string instanceof sass.types.String) {
      return
    }

    const buffer = Buffer.from(string.getValue())

    return new sass.types.String(buffer.toString('base64'))
  }
}