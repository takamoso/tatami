---
title: _media
layout: docs
categories:
  - [セレクタ]
date: 2019-09-19 15:34:33
---

メディアクエリを扱いやすくします。

<table>
  <tr>
    <th>引数</th>
    <th>型</th>
    <th>初期値</th>
    <th>説明</th>
  </tr>
  <tr>
    <td colspan="4">
      <pre class="language-scss"><code>
@include _media-up($queries...);
@include _media-down($queries...);
@include _media-up-than($queries...);
@include _media-down-than($queries...);
@include _media($queries...);
@include _media-than($queries...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$queries...</code></td>
    <td>List...</td>
    <td></td>
    <td>ブレイクポイントやメディア特性</td>
  </tr>
</table>

## モバイルファースト

引数に `px` または `em` 値の配列を指定すると、よく使うメディアクエリを作成できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media-up(768px) { ... }
  @include _media-up(768px 1024px) { ... }
}
</code></pre>
    <pre class="language-css"><code>
@media (min-width: 48em) {
  .element { ... }  /* 768px以上 */
}
@media (min-width: 48em) and (max-width: 64em) {
  .element { ... }  /* 768px以上1024px以下 */
}
</code></pre>
  </div>
</div>

`_media-up` 関数はメディアクエリをモバイルファーストで作成します。

## デスクトップファースト

`_media-down` 関数はデスクトップファーストで作成します。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media-down(768px) { ... }
  @include _media-down(768px 1024px) { ... }
}
</code></pre>
    <pre class="language-css"><code>
@media (max-width: 48em) {
  .element { ... }  /* 768px以下 */
}
@media (min-width: 48em) and (max-width: 64em) {
  .element { ... }  /* 768px以上1024px以下 */
}
</code></pre>
  </div>
</div>

## より大きい

通常、メディアクエリでは以上や以下でしかブレイクポイントを指定できませんが、この `@mixin` を使えば対応できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media-up-than(768px) { ... }
  @include _media-up-than(768px 1024px) { ... }
}
</code></pre>
    <pre class="language-css"><code>
@media (min-width: 48.0011em) {
  .element { ... }  /* 768pxより大きい */
}
@media (min-width: 48.0011em) and (max-width: 64em) {
  .element { ... }  /* 768pxより大きく1024px以下 */
}
</code></pre>
  </div>
</div>

`_media-up-than` 関数は「より大きい」をモバイルファーストで作成します。

## より小さい

`_media-down-than` 関数は「より小さい」をデスクトップファーストで作成します。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media-down-than(768px) { ... }
  @include _media-down-than(768px 1024px) { ... }
}
</code></pre>
    <pre class="language-css"><code>
@media (max-width: 47.9989em) {
  .element { ... }  /* 768px未満 */
}
@media (min-width: 48em) and (max-width: 63.9989em) {
  .element { ... }  /* 768px以上1024px未満 */
}
</code></pre>
  </div>
</div>

## 短縮記法

短縮記法として `_media` と `_media-than` 関数があります。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media(768px) { ... }
  @include _media(768px 1024px) { ... }
  @include _media-than(768px) { ... }
  @include _media-than(768px 1024px) { ... }
}
</code></pre>
    <pre class="language-css"><code>
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
</code></pre>
  </div>
</div>

`$_media-mobile-first` 変数の値が `true`（初期値）のとき、`_media` 関数は内部で `_media-up` 関数が呼び出され、`_media-than` 関数では内部で `_media-down-than` 関数が呼び出されるようになっています。`$_media-mobile-first` 変数の値が `false` のときはそれぞれ `_media-down` と `_media-up-than` 関数が呼び出されます。

## メディアタイプ

第1引数にメディアタイプ、第2引数に `px` または `em` 値の配列を指定できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media(screen 768px) { ... }
  @include _media('not screen' 768px 1024px) { ... }
}
</code></pre>
    <pre class="language-css"><code>
@media screen and (min-width: 48em) {
  .element { ... }
}
@media not screen and (min-width: 48em) and (max-width: 64em) {
  .element { ... }
}
</code></pre>
  </div>
</div>

`not` 演算子を使う場合は `not screen` のように記述すると配列として解釈されてしまうため、`'not screen'` というように引用符で囲みます。

## 柔軟な指定

スペース区切りでメディアタイプやメディア特性を指定できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _media(screen (resolution) (min-width: 768px)) { ... }
  @include _media((min-width: 768px), print (max-height: 100px)) { ... }
}
</code></pre>
    <pre class="language-css"><code>
@media screen and (resolution) and (min-width: 48em) {
  .element { ... }
}
@media (min-width: 48em), print and (max-height: 6.25em) {
  .element { ... }
}
</code></pre>
  </div>
</div>

カンマ区切りで指定することで、「または」の条件を作成できます。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
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
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
@media (min-width: 36em) {
  .element { ... }
}
@media (min-width: 36em) and (max-width: 47.9989em) {
  .element { ... }
}
</code></pre>
  </div>
</div>

何度も同じブレイクポイントを使う場合は `$_media-breakpoints` 変数であらかじめメディアクエリをキーで定義できます。