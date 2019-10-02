const fs = require('fs')
const path = require('path')
const sass = require('node-sass')
const root = require('app-root-path')

module.exports = {
  '_base64_encode($data, $extension: false)': (data, extension) => {
    if (!data instanceof sass.types.String) {
      return
    }

    data = data.getValue()
    extension = extension.getValue()

    const extname = path.extname(data).toLowerCase().replace('.', '')
    const list = new sass.types.List(2)

    if (extname === '') {
      const base64 = new sass.types.String(Buffer.from(data).toString('base64'))

      list.setValue(0, base64)
      list.setValue(1, new sass.types.String(extname))

      return extension ? list : base64
    }

    const file = fs.readFileSync(root.resolve(data))
    const base64 = new sass.types.String(Buffer.from(file).toString('base64'))

    list.setValue(0, base64)
    list.setValue(1, new sass.types.String(extname))
    
    return extension ? list : base64
  }
}