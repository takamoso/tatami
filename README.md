# @takamoso/tatami

<!-- TOC depthFrom:2 -->

- [Install](#install)
- [Setup](#setup)
  - [Gulp 4](#gulp-4)
- [Documentation](#documentation)
  - [Typography](#typography)
    - [`_fluid`](#_fluid)
  - [Layout](#layout)
    - [`_sticky-footer`](#_sticky-footer)

<!-- /TOC -->

## Install

Install **@takamoso/tatami** via npm:

```bash
$ npm i -D @takamoso/tatami
```

or [Download](https://github.com/takamoso/tatami/archive/master.zip) from the repository.

## Setup

### Gulp 4

**gulpfile.js**

```js
const gulp = require('gulp')
const sass = require('gulp-sass')
const magic = require('node-sass-magic-importer')

gulp.task('css', () => {
  return gulp.src('path/to/file.scss')
    .pipe(sass({
      importer: [
        magic()
      ]
    }))
    .pipe(gulp.dest('path/to/output'))
})
```

**path/to/file.scss**

```scss
@import '~@takamoso/tatami';
```

Run and compile scss:

```bash
$ npx gulp css
```

## Documentation

### Typography

#### `_fluid`

```scss
@include _fluid($property, $lists...);
```

1次関数を利用して、画面幅に応じてプロパティの値が流動的に変化します。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$property</code></td>
    <td>String</td>
    <td>-</td>
    <td>CSSのプロパティ名</td>
  </tr>
  <tr>
    <td><code>$lists</code></td>
    <td>List</td>
    <td>-</td>
    <td>2点以上の座標を画面幅が小さい順に記述</td>
  </tr>
</table>

**Example 1:**

```scss
body {
  @include _fluid(font-size, 320px 14px, 1024px 16px);
}

// Output
body {
  font-size: 14px;
}
@media (min-width: 320px) {
  body {
    font-size: calc(0.28409vw + 13.09091px);
  }
}
@media (min-width: 1024px) {
  body {
    font-size: 16px;
  }
}
```

**Example 2:**

```scss
body {
  @include _fluid(font-size, 320px 14px, 768px 15px, 1024px 16px);
}

// Output
body {
  font-size: 14px;
}
@media (min-width: 320px) {
  body {
    font-size: calc(0.22321vw + 13.28571px);
  }
}
@media (min-width: 768px) {
  body {
    font-size: calc(0.39062vw + 12px);
  }
}
@media (min-width: 1024px) {
  body {
    font-size: 16px;
  }
}
```

### Layout

#### `_sticky-footer`

```scss
@include _sticky-footer($main, $footer, $type);
```

コンテンツが少ない場合でも、フッターを下部に固定します。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th colspan="2">Description</th>
  </tr>
  <tr>
    <td><code>$main</code></td>
    <td>String</td>
    <td><code>.main</code></td>
    <td colspan="2">メインとなる要素（<code>$type</code> が <code>table</code> <code>flex</code> のときは必須）</td>
  </tr>
  <tr>
    <td><code>$footer</code></td>
    <td>String</td>
    <td><code>.footer</code></td>
    <td colspan="2">フッターとなる要素（<code>$type</code> が <code>flex</code> <code>sticky</code> のときは必須）</td>
  </tr>
  <tr>
    <td rowspan="5"><code>$type</code></td>
    <td rowspan="5">String</td>
    <td rowspan="5"><code>flex</code></td>
    <td colspan="2">用いる手法</td>
  </tr>
  <tr>
    <td><code>table</code></td>
    <td><code>display: table;</code> を使う手法</td>
  </tr>
  <tr>
    <td><code>flex</code></td>
    <td><code>display: flex;</code> を使う手法</td>
  </tr>
  <tr>
    <td><code>grid</code></td>
    <td><code>display: grid;</code> を使う手法</td>
  </tr>
  <tr>
    <td><code>sticky</code></td>
    <td><code>position: sticky;</code> を使う手法</td>
  </tr>
</table>

**Example 1:**

```html
<html>
<body>
  <div class="main">main</div>
  <div class="footer">footer</div>
</body>
</html>
```

```scss
@include _sticky-footer();

// Output
html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
```

**Example 2:**

```html
<html>
<body>
  <div>main</div>
  <div>footer</div>
</body>
</html>
```

```scss
@include _sticky-footer($type: grid);

// Output
html, body {
  height: 100%;
}
body {
  display: grid;
  grid-template-rows: 1fr auto;
}
```