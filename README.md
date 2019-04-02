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
    - [`_z-index`](#_z-index)
  - [Utilities](#utilities)
    - [`_is-map`](#_is-map)
    - [`_list-join`](#_list-join)
    - [`_list-remove`](#_list-remove)
    - [`_map-get`](#_map-get)
    - [`_map-merge`](#_map-merge)
    - [`_str-replace`](#_str-replace)
    - [`_str-split`](#_str-split)
    - [`_str-trim`](#_str-trim)
    - [`_strip-unit`](#_strip-unit)

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
    <td><code>$lists...</code></td>
    <td>List...</td>
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

#### `_z-index`

```scss
_z-index($keys...);
```

`z-index` 値を自動的に算出する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$keys...</code></td>
    <td>List</td>
    <td>-</td>
    <td>キーの配列</td>
  </tr>
</table>

**Example 1:**

```scss
// Before import @takamoso/tatami
$_z-indexes: (
  header,
  main,
  footer
);

@import '~@takamoso/tatami';

.header {
  z-index: _z-index(header);
}
.main {
  z-index: _z-index(main);
}
.footer {
  z-index: _z-index(footer);
}

// Output
.header {
  z-index: 1;
}
.main {
  z-index: 2;
}
.footer {
  z-index: 3;
}
```

**Example 2:**

```scss
// Before import @takamoso/tatami
$_z-indexes: (
  header,
  main,
  footer
);
$_z-index-reverse: true;

@import '~@takamoso/tatami';

.header {
  z-index: _z-index(header);
}
.main {
  z-index: _z-index(main);
}
.footer {
  z-index: _z-index(footer);
}

// Output
.header {
  z-index: 3;
}
.main {
  z-index: 2;
}
.footer {
  z-index: 1;
}
```

`$_z-index-reverse` を `true` にすると、逆順で出力します。

**Example 3:**

```scss
// Before import @takamoso/tatami
$_z-indexes: (
  header: (),
  main: (
    aside,
    left,
    right 
  ),
  footer: ()
);

@import '~@takamoso/tatami';

.main .left {
  z-index: _z-index(main, left);
}
.main .right {
  z-index: _z-index(main, right);
}

// Output
.main .left {
  z-index: 2;
}
.main .right {
  z-index: 1;
}
```

ネストする際に、下階層がない場合は空配列 `()` を指定しておきます。

### Utilities

#### `_is-map`

```scss
_is-map($var);
```

Map 型かどうかを判定します。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$var</code></td>
    <td>Any</td>
    <td>-</td>
    <td>判定したい値</td>
  </tr>
</table>

**Example:**

```scss
@debug _is-map(a b);
// => false

@debug _is-map((a: 1, b: 2));
// => true
```

#### `_list-join`

```scss
_list-join($list, $separator);
```

配列の全ての要素を連結した文字列を生成する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>配列</td>
  </tr>
  <tr>
    <td><code>$separator</code></td>
    <td>String</td>
    <td><code>,</code></td>
    <td>配列の各要素を区切る文字列</td>
  </tr>
</table>

**Example:**

```scss
$list: a, b, c, d;

@debug _list-join($list);
// => a,b,c,d

@debug _list-join($list, '');
// => abcd
```

#### `_list-remove`

```scss
_list-remove($list, $index);
```

配列から指定した番目の要素を削除する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>配列</td>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Number</td>
    <td>-</td>
    <td>削除する番目</td>
  </tr>
</table>

**Example:**

```scss
$list: a, b, c, d;

@debug _list-remove($list, 3);
// => a b d

@debug _list-remove($list, -3);
// => a c d
```

#### `_map-get`

```scss
_map-get($map, $keys...);
```

ネストされた連想配列の値を取得する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$map</code></td>
    <td>Map</td>
    <td>-</td>
    <td>連想配列</td>
  </tr>
  <tr>
    <td><code>$keys...</code></td>
    <td>List...</td>
    <td>-</td>
    <td>キーの配列</td>
  </tr>
</table>

**Example:**

```scss
$map: (
  a: 1,
  b: (
    c: 2,
    d: 3
  ),
  e: 4
);

@debug _map-get($map, 'a');
// => 1

@debug _map-get($map, 'b', 'd');
// => 3
```

#### `_map-merge`

```scss
_map-merge($map...);
```

2つ以上の連想配列をマージする。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$map...</code>
    <td>Map...</td>
    <td>-</td>
    <td>2つ以上の連想配列</td>
  </tr>
</table>

**Example:**

```scss
$map1: (
  a: 1,
  b: (
    c: 2
  ),
  d: 3
);

$map2: (
  b: (
    c: 3,
    e: 4
  ),
  d: 5
);

@debug _map-merge($map1, $map2);
// => (a: 1, b: (c: 3, e: 4), d: 5)
```

#### `_str-replace`

```scss
_str-replace($string, $search, $replacement);
```

パターンにマッチした文字列を置き換える。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td>-</td>
    <td>置き換えられる文字列</td>
  </tr>
  <tr>
    <td><code>$search</code></td>
    <td>String</td>
    <td>-</td>
    <td>マッチする文字列</td>
  </tr>
  <tr>
    <td><code>$replacement</code></td>
    <td>String</td>
    <td><code>''</code></td>
    <td>置換文字列</td>
  </tr>
</table>

**Example:**

```scss
$string: 'takamoso';

@debug _str-replace($string, 'a');
// => tkmoso

@debug _str-replace($string, 'a', 'o');
// => tokomoso
```

#### `_str-split`

```scss
_str-split($string, $separator, $limit);
```

文字列を指定した文字列で分割する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td>-</td>
    <td>文字列</td>
  </tr>
  <tr>
    <td><code>$separator</code></td>
    <td>String</td>
    <td><code>null</code></td>
    <td>分割する文字列</td>
  </tr>
  <tr>
    <td><code>$limit</code></td>
    <td>Number</td>
    <td><code>null</code></td>
    <td>分割する回数</td>
  </tr>
</table>

**Example:**

```scss
$string: 'takamoso';

@debug _str-split($string, 'a');
// => "t" "k" "moso"

@debug _str-split($string, '');
// => "t" "a" "k" "a" "m" "o" "s" "o"

@debug _str-split($string, '', 4);
// => "t" "a" "k" "a"
```

#### `_str-trim`

```scss
_str-trim($string);
```

文字列の両端の空白を削除する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td>-</td>
    <td>文字列</td>
  </tr>
</table>

**Example:**

```scss
@debug _str-trim(' takamoso ');
// => takamoso
```

#### `_strip-unit`

```scss
_strip-unit($number);
```

数値の単位を取り除きます。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>$number</code></td>
    <td>Number</td>
    <td>-</td>
    <td>数値</td>
  </tr>
</table>

```scss
@debug _strip-unit(100px);
// => 100

@debug _strip-unit(1.1em);
// => 1.1
```