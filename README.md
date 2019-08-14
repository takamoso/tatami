# @takamoso/tatami

<!-- TOC depthFrom:2 -->

- [Install](#install)
- [Setup](#setup)
  - [Gulp 4](#gulp-4)
- [Documentation](#documentation)
  - [Selector](#selector)
    - [`_hack`](#_hack)
    - [`_media`](#_media)
      - [Basic usage](#basic-usage)
      - [Media type](#media-type)
      - [Advanced usage](#advanced-usage)
  - [Typography](#typography)
    - [`_font-face`](#_font-face)
    - [`_justify`](#_justify)
    - [`_truncate`](#_truncate)
  - [Layout](#layout)
    - [`_aspect-ratio`](#_aspect-ratio)
    - [`_clearfix`](#_clearfix)
    - [`_fluid`](#_fluid)
    - [`_position`](#_position)
    - [`_sticky-footer`](#_sticky-footer)
    - [`_z-index`](#_z-index)
  - [Shape](#shape)
    - [`_triangle`](#_triangle)
  - [Animation](#animation)
    - [`_transition`](#_transition)
  - [Utility](#utility)
    - [`_em`](#_em)
    - [`_is-bool`](#_is-bool)
    - [`_is-list`](#_is-list)
    - [`_is-map`](#_is-map)
    - [`_is-num`](#_is-num)
    - [`_is-str`](#_is-str)
    - [`_list-get`](#_list-get)
    - [`_list-includes`](#_list-includes)
    - [`_list-prepend`](#_list-prepend)
    - [`_list-remove`](#_list-remove)
    - [`_list-replace`](#_list-replace)
    - [`_list-set`](#_list-set)
    - [`_list-slice`](#_list-slice)
    - [`_map-get`](#_map-get)
    - [`_map-merge`](#_map-merge)
    - [`_rem`](#_rem)
    - [`_selector-split`](#_selector-split)
    - [`_str-includes`](#_str-includes)
    - [`_str-join`](#_str-join)
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
  return gulp.src('path/to/style.scss')
    .pipe(sass({
      importer: [
        magic()
      ]
    }))
    .pipe(gulp.dest('path/to/output'))
})
```

**path/to/style.scss**

```scss
@import '~@takamoso/tatami';

// Your code here!
```

Run and compile scss:

```bash
$ npx gulp css
```

## Documentation

### Selector

#### `_hack`

CSSハックを利用して、特定のブラウザのバージョンにCSSを適用する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th colspan="2">Description</th>
  </tr>
  <tr>
    <td colspan="5">
      <pre lang="scss"><code>
@include _hack($target);
</code></pre>
    </td>
  </tr>
  <tr>
    <td valign="top" rowspan="5"><code>$target</code></td>
    <td valign="top" rowspan="5">String</td>
    <td valign="top" rowspan="5">-</td>
    <td colspan="2">ブラウザのバージョン文字列</td>
  </tr>
  <tr>
    <td><code>ie9</code></td>
    <td>IE9のみ</td>
  </tr>
  <tr>
    <td><code>ie10</code></td>
    <td>IE10のみ</td>
  </tr>
  <tr>
    <td><code>ie11</code></td>
    <td>IE11のみ</td>
  </tr>
  <tr>
    <td><code>edge</code></td>
    <td>Edgeのすべてのバージョン</td>
  </tr>
</table>

**Example:**

```scss
// SCSS
.selector {
  @include _hack(ie11) {
    font-size: 2em;
  }
}
```
```css
/* CSS */
_:-ms-fullscreen, :root .selector {
  font-size: 2em;
}
```

#### `_media`

メディアクエリを扱いやすくする。

##### Basic usage

引数に `px` または `em` 値の配列を指定すると、よく使うメディアクエリを作成できる。

**Example 1:**

```scss
// SCSS
.element {
  @include _media-up(768px) { ... }
  @include _media-up(768px 1024px) { ... }
}
```
```css
/* CSS */
@media (min-width: 48em) {
  .element { ... }  /* 768px以上 */
}
@media (min-width: 48em) and (max-width: 64em) {
  .element { ... }  /* 768px以上1024px以下 */
}
```

`_media-up()` 関数はモバイルファースト記法で作成する。

**Example 2:**

```scss
// SCSS
.element {
  @include _media-down(768px) { ... }
  @include _media-down(768px 1024px) { ... }
}
```
```css
/* CSS */
@media (max-width: 48em) {
  .element { ... }  /* 768px以下 */
}
@media (min-width: 48em) and (max-width: 64em) {
  .element { ... }  /* 768px以上1024px以下 */
}
```

`_media-down()` 関数はデスクトップファースト記法で作成する。

**Example 3:**

```scss
// SCSS
.element {
  @include _media-up-than(768px) { ... }
  @include _media-up-than(768px 1024px) { ... }
}
```
```css
/* CSS */
@media (min-width: 48.0011em) {
  .element { ... }  /* 768pxより大きい */
}
@media (min-width: 48.0011em) and (max-width: 64em) {
  .element { ... }  /* 768pxより大きく1024px以下 */
}
```

`_media-up-than()` 関数は「より大きい」をモバイルファースト記法で作成する。

**Example 4:**

```scss
// SCSS
.element {
  @include _media-down-than(768px) { ... }
  @include _media-down-than(768px 1024px) { ... }
}
```
```css
/* CSS */
@media (max-width: 47.9989em) {
  .element { ... }  /* 768px未満 */
}
@media (min-width: 48em) and (max-width: 63.9989em) {
  .element { ... }  /* 768px以上1024px未満 */
}
```

`_media-down-than()` 関数は「より小さい」をデスクトップファースト記法で作成する。

**Example 5:**

```scss
// SCSS
.element {
  @include _media(768px) { ... }
  @include _media(768px 1024px) { ... }
  @include _media-than(768px) { ... }
  @include _media-than(768px 1024px) { ... }
}
```
```css
/* CSS */
@media (min-width: 48em) {
  .element { ... }  /* 768px以上 */
}
@media (min-width: 48em) and (max-width: 64em) {
  .element { ... }  /* 768px以上1024px以下 */
}
@media (max-width: 47.9989em) {
  .element { ... }  /* 768px未満 */
}
@media (min-width: 48em) and (max-width: 63.9989em) {
  .element { ... }  /* 768px以上1024px未満 */
}
```

また、短縮記法として `_media()` と `_media-than()` 関数がある。変数 `$_media-mobile-first` の値が `true` （初期値）のとき、`_media()` 関数は内部で `_media-up()` 関数が呼び出され、`_media-than()` 関数では内部で `_media-down-than()` 関数が呼び出されるようになっている。変数 `$_media-mobile-first` の値が `false` のときはそれぞれ `_media-down()` と `_media-up-than()` 関数が呼び出される。

##### Media type

第1引数にメディアタイプ、第2引数に `px` または `em` 値の配列を指定できる。

**Example 6:**

```scss
// SCSS
.element {
  @include _media(screen 768px) { ... }
  @include _media('not screen' 768px 1024px) { ... }
}
```
```css
/* CSS */
@media screen and (min-width: 48em) {
  .element { ... }
}
@media not screen and (min-width: 48em) and (max-width: 64em) {
  .element { ... }
}
```

`not` 演算子を使う場合は `not screen` のように記述すると配列として解釈されてしまうため、`'not screen'` というように引用符で囲む。

##### Advanced usage

スペース区切りでメディアタイプやメディア特性を指定できる。

**Example 7:**

```scss
// SCSS
.element {
  @include _media(screen (resolution) (min-width: 768px)) { ... }
  @include _media((min-width: 768px), print (max-height: 100px)) { ... }
}
```
```css
/* CSS */
@media screen and (resolution) and (min-width: 48em) {
  .element { ... }
}
@media (min-width: 48em), print and (max-height: 6.25em) {
  .element { ... }
}
```

カンマ区切りで指定することで、「または」の条件を作成できる。

**Example 8:**

```scss
// SCSS

$_media-breakpoints: (
  xs: 576px,
  sm: 768px,
  md: 992px,
  lg: 1200px
);

@import '~@takamoso/tatami';

.element {
  @include _media(xs) { ... }
  @include _media-than(xs sm) { ... }
}
```
```css
/* CSS */
@media (min-width: 36em) {
  .element { ... }
}
@media (min-width: 36em) and (max-width: 47.9989em) {
  .element { ... }
}
```

変数 `$_media-breakpoints` であらかじめメディアクエリをキーで定義できる。

### Typography

#### `_font-face`

`@font-face` の指定を容易にする。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _font-face($name, $path[, $weight, $style, $types, $display, $unicodes]);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$name</code></td>
    <td>String</td>
    <td>-</td>
    <td>フォント名</td>
  </tr>
  <tr>
    <td><code>$path</code></td>
    <td>String</td>
    <td>-</td>
    <td>拡張子を除いたフォントまでのパス</td>
  </tr>
  <tr>
    <td><code>$weight</code></td>
    <td>Number</td>
    <td><code>null</code></td>
    <td>フォントの太さ</td>
  </tr>
  <tr>
    <td><code>$style</code></td>
    <td>Number</td>
    <td><code>null</code></td>
    <td>フォントのスタイル</td>
  </tr>
  <tr>
    <td><code>$types</code></td>
    <td>List</td>
    <td><code>eot woff woff2</code></td>
    <td>フォントの拡張子</td>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>font-display</code> の値</td>
  </tr>
  <tr>
    <td><code>$unicodes</code></td>
    <td>List</td>
    <td><code>null</code></td>
    <td><code>unicode-range</code> の値</td>
  </tr>
</table>

**Example 1:**

```scss
// SCSS
@include _font-face(NotoSansJP, '../NotoSansCJKjp-Regular', 400, normal);
```
```css
/* CSS */
@font-face {
  font-family: "NotoSansJP";
  font-style: normal;
  font-weight: 400;
  src: url("../NotoSansCJKjp-Regular.eot");
  src: url("../NotoSansCJKjp-Regular.eot?") format("embedded-opentype"),
       url("../NotoSansCJKjp-Regular.woff") format("woff"),
       url("../NotoSansCJKjp-Regular.woff2") format("woff2");
}
```

`$types` 引数の順序は出力の順番となる。

**Example 2:**

```scss
// SCSS
@include _font-face(NotoSansJP, '../NotoSansCJKjp-Regular', 400, normal, $display: swap);
```
```css
/* CSS */
@font-face {
  font-family: "NotoSansJP";
  font-style: normal;
  font-weight: 400;
  src: url("../NotoSansCJKjp-Regular.eot");
  src: url("../NotoSansCJKjp-Regular.eot?") format("embedded-opentype"),
       url("../NotoSansCJKjp-Regular.woff") format("woff"),
       url("../NotoSansCJKjp-Regular.woff2") format("woff2");
  font-display: swap;
}
```

`font-display` の値だけ変更したい場合は、`$display: swap` のように指定する。

#### `_justify`

文字を両端揃えにする。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _justify;
</code></pre>
    </td>
  </tr>
</table>

**Example:**

```html
<div class="element">...</div>
```
```scss
// SCSS
.element {
  @include _justify;
}
```
```css
/* CSS */
.element {
  text-align: justify;
  text-justify: inter-ideograph;
}
```

#### `_truncate`

文字が横幅に収まりきらなくなった場合に省略記号を表示する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _truncate([$line, $line-height]);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$line</code></td>
    <td>Number</td>
    <td><code>1</code></td>
    <td>行數</td>
  </tr>
  <tr>
    <td><code>$line-height</code></td>
    <td>Number</td>
    <td><code>null</code></td>
    <td>この引数を指定すると、<code>-webkit-line-clamp</code> プロパティに対応していないブラウザの表示を最適化できる。</td>
  </tr>
</table>

**Example 1:**

```html
<div class="element">...</div>
```
```scss
// SCSS
.element {
  @include _truncate;
}
```
```css
/* CSS */
.element {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

引数を指定しなければ1行の省略となる。

**Example 2:**

```html
<div class="element">...</div>
```
```scss
// SCSS
.element {
  @include _truncate(3, 1.7);
}
```
```css
/* CSS */
.element {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 5.1em;
  line-height: 1.8;
  overflow: hidden;
}
```

3行目に省略記号が表示され、`-webkit-line-clamp` プロパティに非対応のブラウザでは違和感がないように調整される。ただし、非対応のブラウザでは省略記号 `...` は表示されない。

### Layout

#### `_aspect-ratio`

アスペクト比を固定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _aspect-ratio($width, $height, $selector, $fit);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Number</td>
    <td>-</td>
    <td>横幅</td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Number</td>
    <td>-</td>
    <td>縦幅</td>
  </tr>
  <tr>
    <td><code>$selector</code></td>
    <td>String</td>
    <td><code>null</code></td>
    <td>アスペクト比を固定する要素のセレクタ</td>
  </tr>
  <tr>
    <td><code>$fit</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>要素をはみ出すときに高さを調整するかどうか</td>
  </tr>
</table>

**Example 1:**

```html
<div class="parent">
  <div class="child">3:2</div>
</div>
```

```scss
// SCSS
.parent {
  @include _aspect-ratio(3, 2, '> .child');
}
```
```css
/* CSS */
.parent {
  position: relative;
}
.parent::before {
  display: block;
  padding-top: 66.66667%;
  content: '';
}
.parent > .child {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

`.child` のアスペクト比を `3:2` に固定している。

**Example 2:**

```html
<div class="element">3:2</div>
```

```scss
.element {
  @include _aspect-ratio(3, 2, $fit: true);
}

// Output
.element::before {
  float: left;
  padding-top: 66.66667%;
  content: '';
}
.element::after {
  display: block;
  content: '';
  clear: both;
}
```

`3:2` の領域をはみ出したときでも、高さが自動調整されて伸びる。

#### `_clearfix`

`float` の解除をします。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _clearfix;
</code></pre>
    </td>
  </tr>
</table>

**Example:**

```scss
// SCSS
.selector {
  @include _clearfix;
}
```
```css
/* CSS */
.selector::after {
  display: block;
  content: '';
  clear: both;
}
```

#### `_fluid`

1次関数を利用して、画面幅に応じてプロパティの値が流動的に変化する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _fluid($property, $lists...);
</code></pre>
    </td>
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
    <td>画面幅が小さい順に記述された2点以上の座標</td>
  </tr>
</table>

**Example 1:**

```scss
// SCSS
body {
  @include _fluid(font-size, 320px 14px, 1024px 16px);
}
```
```css
/* CSS */
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

画面幅が `320px` のときは `14px`、画面幅が `1024px` のときは `16px` になり、その間は1次関数的に滑らかに変化する。

**Example 2:**

```scss
// SCSS
body {
  @include _fluid(font-size, 320px 14px, 768px 15px, 1024px 16px);
}
```
```css
/* CSS */
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

2点以上の座標を指定できる。

**Example 3:**

```scss
// SCSS
html {
  font-size: 62.5%;  // 10px
}
body {
  @include _fluid(font-size, 320px 14px, 1024px 16px, 10px);
}
```
```css
/* CSS */
html {
  font-size: 62.5%;
}
body {
  font-size: 1.4em;
}
@media (min-width: 20em) {
  body {
    font-size: calc(0.28409vw + 1.30909em);
  }
}
@media (min-width: 64em) {
  body {
    font-size: 1.6em;
  }
}
```

アクセシビリティに配慮するため、`px` 値は `em` 値へ変換して出力される。このように親要素 `html` のフォントサイズが `10px` の場合、最後の引数に `em` 値へ変換する際のベースとなるフォントサイズを指定できる。

```scss
// SCSS
html {
  font-size: 62.5%;
}
body {
  @include _fluid(font-size, 320px 1em, 1024px 2em, 10px);
}
```
```css
/* CSS */
html {
  font-size: 62.5%;
}
body {
  font-size: 1em;
}
@media (min-width: 20em) {
  body {
    font-size: calc(1.42045vw + 0.54545em);
  }
}
@media (min-width: 64em) {
  body {
    font-size: 2em;
  }
}
```

もちろんフォントサイズを `em` 値で指定する際も、ベースとなるフォントサイズは `px` 値で指定すればうまく変換される。

**Example 4:**

```scss
// SCSS
body {
  @include _fluid(padding, 320px _rem(15px), 1024px _rem(40px));
}
```
```css
/* CSS */
body {
  padding: 0.9375rem;
}
@media (min-width: 20em) {
  body {
    padding: calc(3.55114vw + 0.22727rem);
  }
}
@media (min-width: 64em) {
  body {
    padding: 2.5rem;
  }
}
```

例えば、画面左右の余白を流動的に変化させたい場合、親要素に影響されない `rem` 単位を使うと思われる。`px` で指定してしまうと自動的に `em` 値へ変換されてしまうため、`_rem()` 関数を使って `px` から `rem` 値へ変換することで対応できる。

#### `_position`

<code>position</code> 関連プロパティを一括指定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _position($type[, $positions...]);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$type</code></td>
    <td>String</td>
    <td>-</td>
    <td><code>position</code> プロパティの値</td>
  </tr>
  <tr>
    <td><code>$positions...</code></td>
    <td>List</td>
    <td>-</td>
    <td><code>margin</code> や <code>padding</code> プロパティと同じ構文で指定する</td>
</table>

**Example 1:**

```scss
// SCSS
.element {
  @include _position(absolute, 0, 5px, 10px);
}
```
```css
/* CSS */
.element {
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  bottom: 10px;
}
```

数値が3つ指定された場合は、上・左右・下になる。

**Example 2:**

```scss
// SCSS
.element {
  @include _position(absolute, $left: 5px);
}
```
```css
/* CSS */
.element {
  position: absolute;
  left: 5px;
}
```

特定のプロパティにのみ値を指定する場合は変数 `$top` `$left` `$right` `$bottom` を使う。また、`null` を使って引数を指定する方法もある。


#### `_sticky-footer`

コンテンツが少ない場合でも、フッターを下部に固定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th colspan="2">Description</th>
  </tr>
  <tr>
    <td colspan="5">
      <pre lang="scss"><code>
@include _sticky-footer($main, $footer, $type);
</code></pre>
    </td>
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
// SCSS
@include _sticky-footer;
```
```css
/* CSS */
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
// SCSS
@include _sticky-footer($type: grid);
```
```css
/* CSS */
html, body {
  height: 100%;
}
body {
  display: grid;
  grid-template-rows: 1fr auto;
}
```

#### `_z-index`

`z-index` 値を自動的に算出する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _z-index($keys...);
</code></pre>
    </td>
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
// SCSS

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
```
```css
/* CSS */
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
// SCSS

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
```
```css
/* CSS */
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

`$_z-index-reverse` を `true` にすると、逆順で出力する。

**Example 3:**

```scss
// SCSS

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
```
```css
/* CSS */
.main .left {
  z-index: 2;
}
.main .right {
  z-index: 3;
}
```

ネストする際に、下階層がない場合は空配列 `()` を指定しておく。

### Shape

#### `_triangle`

三角形を描画する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="5">
      <pre lang="scss"><code>
@include _triangle($direction, $width, $height, $color, $method, $responsive);
</code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="9" valign="top"><code>$direction</code></td>
    <td rowspan="9" valign="top">String</td>
    <td rowspan="9" valign="top">-</td>
    <td colspan="2">三角形の向き</td>
  </tr>
  <tr>
    <td><code>top</code></td>
    <td>上向き</td>
  </tr>
  <tr>
    <td><code>left</code></td>
    <td>左向き</td>
  </tr>
  <tr>
    <td><code>right</code></td>
    <td>右向き</td>
  </tr>
  <tr>
    <td><code>bottom</code></td>
    <td>下向き</td>
  </tr>
  <tr>
    <td><code>top-left</code></td>
    <td>左上向き</td>
  </tr>
  <tr>
    <td><code>top-right</code></td>
    <td>右上向き</td>
  </tr>
  <tr>
    <td><code>bottom-left</code></td>
    <td>左下向き</td>
  </tr>
  <tr>
    <td><code>bottom-right</code></td>
    <td>右下向き</td>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Number</td>
    <td><code>null</code></td>
    <td colspan="2">横幅</td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Number</td>
    <td><code>null</code></td>
    <td colspan="2">縦幅</td>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td>Color</td>
    <td><code>currentColor</code></td>
    <td colspan="2">色</td>
  </tr>
  <tr>
    <td rowspan="3"><code>$method</code></td>
    <td rowspan="3">String</td>
    <td rowspan="3"><code>border</code></td>
    <td colspan="2">描画手法</td>
  </tr>
  <tr>
    <td><code>border</code></td>
    <td><code>border</code> プロパティを使った手法</td>
  </tr>
  <tr>
    <td><code>gradient</code></td>
    <td><code>linear-gradient()</code> を使った手法</td>
  </tr>
</table>

**Example 1:**

```scss
// SCSS
.element {
  @include _triangle(top, 200px, 100px, #111);
}
```
```css
/* CSS */
.element {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100px 100px;
  border-color: transparent transparent #111;
}
```

**Example 2:**

```scss
// SCSS
.wrapper {
  @include _aspect-ratio(3, 2, '> .element');
}
.element {
  @include _triangle(top, $color: #111, $method: gradient, $responsive: true);
}
```
```css
/* CSS */
.wrapper {
  position: relative;
}
.wrapper::before {
  display: block;
  padding-top: 66.66667%;
  content: '';
}
.wrapper > .element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.element {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0) calc(50% - 1px), #111 50%), linear-gradient(to bottom left, rgba(255, 255, 255, 0) calc(50% - 1px), #111 50%);
  background-position: 0 0, 100% 0;
  background-size: calc(50% + .03px) 100%;
  background-repeat: no-repeat;
}
```

三角形を横幅に応じて可変（レスポンシブ化）させたい場合は、引数 `$method` に `gradient`、`$responsive` に `true` を指定する。このとき、引数 `$width` と `$height` は指定する必要はない。あとは [_aspect-ratio()](#_aspect-ratio) 関数を使って <code>3:2</code> の要素を作成すればよい。

### Animation

#### `_transition`

`transition` プロパティを容易に指定できるようにする。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _transition([$transitions...]);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$transitions...</code></td>
    <td>List</td>
    <td><code>$_transition</code></td>
    <td><code>transition</code> プロパティの値</td>
  </tr>
</table>

**Example 1:**

```scss
// SCSS
.element {
  @include _transition;
}
```
```css
/* CSS */
.element {
  transition: 0.3s;
}
@media screen and (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
```

引数を指定しない場合は、変数 `$_transition` に指定されたデフォルト値が使われる。

**Example 2:**

```scss
// SCSS
.element {
  @include _transition(color .3s, background-color .2s linear);
}
```
```css
/* CSS */
.element {
  transition: color 0.3s, background-color 0.2s linear;
}
@media screen and (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
```

### Utility

#### `_em`

`px` 値を `em` へ変換する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _em($values, $base);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$values</code>
    <td>Number|List</td>
    <td>-</td>
    <td>対象となる <code>px</code> 値</td>
  </tr>
  <tr>
    <td><code>$base</code>
    <td>Number</td>
    <td><code>16px</code></td>
    <td>基準となる <code>px</code> 値</td>
  </tr>
</table>

**Example:**

```scss
// SCSS
body {
  font-size: _em(18px);
  margin: _em(10px 20px, 18px);
  padding: _em(15px 30px, 18px)
}
```
```css
/* CSS */
body {
  font-size: 1.125em;
  margin: 0.55556em 1.11111em;
  padding: 0.83333em 1.66667em;
}
```

#### `_is-bool`

Boolean型かどうかを判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _is-bool($var);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$var</code></td>
    <td>Any</td>
    <td>-</td>
    <td>対象となる値</td>
  </tr>
</table>

#### `_is-list`

List型かどうかを判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _is-list($var);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$var</code></td>
    <td>Any</td>
    <td>-</td>
    <td>対象となる値</td>
  </tr>
</table>

#### `_is-map`

Map型かどうかを判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _is-map($var);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$var</code></td>
    <td>Any</td>
    <td>-</td>
    <td>対象となる値</td>
  </tr>
</table>

#### `_is-num`

Number型かどうかを判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _is-num($var);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$var</code></td>
    <td>Any</td>
    <td>-</td>
    <td>対象となる値</td>
  </tr>
</table>

#### `_is-str`

String型かどうかを判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _is-str($var);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$var</code></td>
    <td>Any</td>
    <td>-</td>
    <td>対象となる値</td>
  </tr>
</table>

#### `_list-get`

配列の値を取得する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-get($list, $indexes...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$indexes...</code></td>
    <td>Number|List</td>
    <td>-</td>
    <td>番目の値</td>
  </tr>
</table>

**Example:**

```scss
@debug _list-get(a b c d, 3);
// => c

@debug _list-get(a (b c) d, 2, 1);
// => b
```

#### `_list-includes`

特定の値が配列に含まれているかどうかを判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-includes($list, $value);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>Any</td>
    <td>-</td>
    <td>判定する値</td>
  </tr>
</table>

**Example:**

```scss
$list: a b c d;

@debug _list-includes($list, b);
// => true

@debug _list-includes($list, e);
// => false
```

#### `_list-prepend`

配列の先頭に値を追加する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-prepend($list, $value);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>String|Number|List</td>
    <td>-</td>
    <td>追加する値</td>
  </tr>
</table>

**Example:**

```scss
$list: a b c d;

@debug _list-prepend($list, e);
// => e a b c d

@debug _list-prepend($list, e f);
// => e f a b c d
```

#### `_list-remove`

配列から指定した番目の要素を削除する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-remove($list, $index);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
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

#### `_list-replace`

配列の指定番目の値を置き換える。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-replace($list, $index, $value);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Number</td>
    <td>-</td>
    <td>置き換える番目</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>Any</td>
    <td>-</td>
    <td>置き換える値</td>
  </tr>
</table>

**Example:**

```scss
$list: a, b, c, d;

@debug _list-replace($list, 3, e);
// => a b e d
```

#### `_list-set`

配列に値を代入する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-set($list, $indexes...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$indexes...</code></td>
    <td>List</td>
    <td>-</td>
    <td>番目の値（配列の最後の値は代入する値）</td>
  </tr>
</table>

**Example:**

```scss
@debug _list-set(a b c d, 3, e);
// => a b e d

@debug _list-set(a (b c) d, 2, 1, e);
// => a (e c) d
```

#### `_list-slice`

配列から指定された範囲を抜き出した配列を生成する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _list-slice($list, $start, $end);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$start</code></td>
    <td>Number</td>
    <td><code>1</code></td>
    <td>抜き出す開始番目</td>
  </tr>
  <tr>
    <td><code>$end</code></td>
    <td>Number</td>
    <td><code>length($list)</code></td>
    <td>抜き出す終了番目</td>
  </tr>
</table>

**Example:**

```scss
$list: a, b, c, d;

@debug _list-slice($list, 2, 3);
// => b c

@debug _list-slice($list, -2);
// => c d
```

#### `_map-get`

ネストされた連想配列の値を取得する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _map-get($map, $keys...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$map</code></td>
    <td>Map</td>
    <td>-</td>
    <td>対象となる連想配列</td>
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

2つ以上の連想配列をマージする。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _map-merge($map...);
</code></pre>
    </td>
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

#### `_rem`

`px` 値を `rem` へ変換する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _rem($values, $base);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$values</code>
    <td>Number|List</td>
    <td>-</td>
    <td>対象となる <code>px</code> 値</td>
  </tr>
  <tr>
    <td><code>$base</code>
    <td>Number</td>
    <td><code>16px</code></td>
    <td>基準となる <code>px</code> 値</td>
  </tr>
</table>

**Example:**

```scss
// SCSS
body {
  font-size: _rem(18px);
  padding: _rem(10px 20px);
}
```
```css
/* CSS */
body {
  font-size: 1.125rem;
  padding: 0.625rem 1.25rem;
}
```

#### `_selector-split`

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _selector-split($string);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$string</code>
    <td>String</td>
    <td>-</td>
    <td>対象となる文字列</td>
  </tr>
</table>

**Example:**

```scss
@debug _selector-split('.a .b > .c, .d + .e');
// => ((".a", " ", ".b", ">", ".c"), (".d", "+", ".e"))

@debug _selector-split('a:not([target="_blank"]) > span');
// => (('a:not([target="_blank"])', ">", "span"))
```

#### `_str-includes`

文字列が特定の文字列を含むか判定する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _str-includes($string, $value);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td>-</td>
    <td>対象となる文字列</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>String</td>
    <td>-</td>
    <td>判定したい文字列</td>
  </tr>
</table>

**Example:**

```scss
$string: 'takamoso';

@debug _str-includes($string, 'o');
// => true

@debug _str-includes($string, 'e');
// => false
```

#### `_str-join`

配列の全ての要素を連結した文字列を生成する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _str-join($list, $separator);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td>-</td>
    <td>対象となる配列</td>
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

@debug _str-join($list);
// => a,b,c,d

@debug _str-join($list, '');
// => abcd
```

#### `_str-replace`

パターンにマッチした文字列を置き換える。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _str-replace($string, $search, $replacement);
</code></pre>
    </td>
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

文字列を指定した文字列で分割する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _str-split($string, $separator, $limit);
</code></pre>
    </td>
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

文字列の両端の空白を削除する。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _str-trim($string);
</code></pre>
    </td>
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

数値の単位を取り除く。

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre lang="scss"><code>
@include _strip-unit($number);
</code></pre>
    </td>
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