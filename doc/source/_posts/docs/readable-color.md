---
title: _readable-color
layout: docs
date: 2019-10-16 13:49:25
categories:
  - [タイポグラフィ]
---

背景色によって見やすい文字色を算出します。

<table>
  <tr>
    <th>引数</th>
    <th>型</th>
    <th>初期値</th>
    <th colspan="2">説明</th>
  </tr>
  <tr>
    <td colspan="5">
      <pre class="language-scss"><code>
_readable-color($method, $background-color, $light-text-color, $dark-text-color, $threshold);
</code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="4"><code>$method</code></td>
    <td rowspan="4">String</td>
    <td rowspan="4"></td>
    <td colspan="2">用いる手法</td>
  </tr>
  <tr>
    <td><code><span class="token string">luminance</span></code></td>
    <td><a href="https://www.w3.org/TR/WCAG20/#contrast-ratiodef" target="_blank">WCAG</a> が公開している色の輝度を使った手法</td>
  </tr>
  <tr>
    <td><code><span class="token string">brightness</span></code></td>
    <td><a href="https://www.w3.org/TR/AERT/#color-contrast" target="_blank">W3C</a> が公開している色の光度を使った手法</td>
  </tr>
  <tr>
    <td><code><span class="token string">difference</span></code></td>
    <td><a href="https://www.w3.org/TR/AERT/#color-contrast" target="_blank">W3C</a> が公開している色の差を使った手法</td>
  </tr>
  <tr>
    <td><code>$background-color</code></td>
    <td>Color</td>
    <td></td>
    <td colspan="2">背景色</td>
  </tr>
  <tr>
    <td><code>$light-text-color</code></td>
    <td>Color</td>
    <td><code class="language-scss">#fff</code></td>
    <td colspan="2">白系の文字色</td>
  </tr>
  <tr>
    <td><code>$dark-text-color</code></td>
    <td>Color</td>
    <td><code class="language-scss">#000</code></td>
    <td colspan="2">黒系の文字色</td>
  </tr>
  <tr>
    <td><code>$threshold</code></td>
    <td>Number</td>
    <td>後述の説明を参照</td>
    <td colspan="2"><code class="language-scss">$method</code> 引数に <code><span class="token string">brightness</span></code> を指定した場合の閾値（0〜255までの整数値）</td>
  </tr>
</table>

## 色の輝度

`$method` 引数に `luminance` を指定すると、色の輝度を使った手法が用いられます。

<div class="c demo">
  <div class="p readable color preview">
    <div class="container">
      <div class="chip" data-luminance data-1>#087f5b</div>
      <div class="chip" data-luminance data-2>#099268</div>
      <div class="chip" data-luminance data-3>#0ca678</div>
      <div class="chip" data-luminance data-4>#12b886</div>
      <div class="chip" data-luminance data-5>#20c997</div>
      <div class="chip" data-luminance data-6>#38d9a9</div>
      <div class="chip" data-luminance data-7>#63e6be</div>
      <div class="chip" data-luminance data-8>#96f2d7</div>
      <div class="chip" data-luminance data-9>#c3fae8</div>
      <div class="chip" data-luminance data-10>#e6fcf5</div>
    </div>
  </div>
  <div class="c code">
    <pre class="language-html"><code>
<div class="chip-1">#087f5b</div>
<div class="chip-2">#099268</div>
<div class="chip-3">#0ca678</div>
<div class="chip-4">#12b886</div>
<div class="chip-5">#20c997</div>
<div class="chip-6">#38d9a9</div>
<div class="chip-7">#63e6be</div>
<div class="chip-8">#96f2d7</div>
<div class="chip-9">#c3fae8</div>
<div class="chip-10">#e6fcf5</div>
</code></pre>
    {% raw %}
      <pre class="language-scss"><code>
$colors: (
  #087f5b,
  #099268,
  #0ca678,
  #12b886,
  #20c997,
  #38d9a9,
  #63e6be,
  #96f2d7,
  #c3fae8,
  #e6fcf5,
);

.chip {
  @each $color in $colors {
    &-#{index($colors, $color)} {
      color: _readable-color('luminance', $color);
      background-color: $color;
    }
  }
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.chip-1 {
  color: #fff;
  background-color: #087f5b;
}
.chip-2 {
  color: #000;
  background-color: #099268;
}
.chip-3 {
  color: #000;
  background-color: #0ca678;
}
.chip-4 {
  color: #000;
  background-color: #12b886;
}
.chip-5 {
  color: #000;
  background-color: #20c997;
}
.chip-6 {
  color: #000;
  background-color: #38d9a9;
}
.chip-7 {
  color: #000;
  background-color: #63e6be;
}
.chip-8 {
  color: #000;
  background-color: #96f2d7;
}
.chip-9 {
  color: #000;
  background-color: #c3fae8;
}
.chip-10 {
  color: #000;
  background-color: #e6fcf5;
}
</code></pre>
  </div>
</div>

色の輝度を使った手法では、濃いめの色でも文字色として黒が選択されています。

## 色の光度

`$method` 引数に `brightness` を指定すると、色の光度を使った手法が用いられます。

<div class="c demo">
  <div class="p readable color preview">
    <div class="container">
      <div class="chip" data-brightness data-1>#087f5b</div>
      <div class="chip" data-brightness data-2>#099268</div>
      <div class="chip" data-brightness data-3>#0ca678</div>
      <div class="chip" data-brightness data-4>#12b886</div>
      <div class="chip" data-brightness data-5>#20c997</div>
      <div class="chip" data-brightness data-6>#38d9a9</div>
      <div class="chip" data-brightness data-7>#63e6be</div>
      <div class="chip" data-brightness data-8>#96f2d7</div>
      <div class="chip" data-brightness data-9>#c3fae8</div>
      <div class="chip" data-brightness data-10>#e6fcf5</div>
    </div>
  </div>
  <div class="c code">
    <pre class="language-html"><code>
<div class="chip-1">#087f5b</div>
<div class="chip-2">#099268</div>
<div class="chip-3">#0ca678</div>
<div class="chip-4">#12b886</div>
<div class="chip-5">#20c997</div>
<div class="chip-6">#38d9a9</div>
<div class="chip-7">#63e6be</div>
<div class="chip-8">#96f2d7</div>
<div class="chip-9">#c3fae8</div>
<div class="chip-10">#e6fcf5</div>
</code></pre>
    {% raw %}
      <pre class="language-scss"><code>
$colors: (
  #087f5b,
  #099268,
  #0ca678,
  #12b886,
  #20c997,
  #38d9a9,
  #63e6be,
  #96f2d7,
  #c3fae8,
  #e6fcf5,
);

.chip {
  @each $color in $colors {
    &-#{index($colors, $color)} {
      color: _readable-color('brightness', $color);
      background-color: $color;
    }
  }
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.chip-1 {
  color: #fff;
  background-color: #087f5b;
}
.chip-2 {
  color: #fff;
  background-color: #099268;
}
.chip-3 {
  color: #fff;
  background-color: #0ca678;
}
.chip-4 {
  color: #000;
  background-color: #12b886;
}
.chip-5 {
  color: #000;
  background-color: #20c997;
}
.chip-6 {
  color: #000;
  background-color: #38d9a9;
}
.chip-7 {
  color: #000;
  background-color: #63e6be;
}
.chip-8 {
  color: #000;
  background-color: #96f2d7;
}
.chip-9 {
  color: #000;
  background-color: #c3fae8;
}
.chip-10 {
  color: #000;
  background-color: #e6fcf5;
}
</code></pre>
  </div>
</div>

また、この手法では閾値を指定でき、初期値は `$light-color-text` と `$dark-color-text` 引数の値の中間となっています。

<div class="c demo">
  <div class="p readable color preview">
    <div class="container">
      <div class="chip" data-brightness data-1 data-threshold>#087f5b</div>
      <div class="chip" data-brightness data-2 data-threshold>#099268</div>
      <div class="chip" data-brightness data-3 data-threshold>#0ca678</div>
      <div class="chip" data-brightness data-4 data-threshold>#12b886</div>
      <div class="chip" data-brightness data-5 data-threshold>#20c997</div>
      <div class="chip" data-brightness data-6 data-threshold>#38d9a9</div>
      <div class="chip" data-brightness data-7 data-threshold>#63e6be</div>
      <div class="chip" data-brightness data-8 data-threshold>#96f2d7</div>
      <div class="chip" data-brightness data-9 data-threshold>#c3fae8</div>
      <div class="chip" data-brightness data-10 data-threshold>#e6fcf5</div>
    </div>
  </div>
  <div class="c code">
    <pre class="language-html"><code>
<div class="chip-1">#087f5b</div>
<div class="chip-2">#099268</div>
<div class="chip-3">#0ca678</div>
<div class="chip-4">#12b886</div>
<div class="chip-5">#20c997</div>
<div class="chip-6">#38d9a9</div>
<div class="chip-7">#63e6be</div>
<div class="chip-8">#96f2d7</div>
<div class="chip-9">#c3fae8</div>
<div class="chip-10">#e6fcf5</div>
</code></pre>
    {% raw %}
      <pre class="language-scss"><code>
$colors: (
  #087f5b,
  #099268,
  #0ca678,
  #12b886,
  #20c997,
  #38d9a9,
  #63e6be,
  #96f2d7,
  #c3fae8,
  #e6fcf5,
);

.chip {
  @each $color in $colors {
    &-#{index($colors, $color)} {
      color: _readable-color('brightness', $color, $threshold: 150);
      background-color: $color;
    }
  }
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.chip-1 {
  color: #fff;
  background-color: #087f5b;
}
.chip-2 {
  color: #fff;
  background-color: #099268;
}
.chip-3 {
  color: #fff;
  background-color: #0ca678;
}
.chip-4 {
  color: #fff;
  background-color: #12b886;
}
.chip-5 {
  color: #fff;
  background-color: #20c997;
}
.chip-6 {
  color: #000;
  background-color: #38d9a9;
}
.chip-7 {
  color: #000;
  background-color: #63e6be;
}
.chip-8 {
  color: #000;
  background-color: #96f2d7;
}
.chip-9 {
  color: #000;
  background-color: #c3fae8;
}
.chip-10 {
  color: #000;
  background-color: #e6fcf5;
}
</code></pre>
  </div>
</div>

閾値を変えると、微調整できます。

## 色の差

`$method` 引数に `difference` を指定すると、色の差を使った手法が用いられます。

<div class="c demo">
  <div class="p readable color preview">
    <div class="container">
      <div class="chip" data-difference data-1>#087f5b</div>
      <div class="chip" data-difference data-2>#099268</div>
      <div class="chip" data-difference data-3>#0ca678</div>
      <div class="chip" data-difference data-4>#12b886</div>
      <div class="chip" data-difference data-5>#20c997</div>
      <div class="chip" data-difference data-6>#38d9a9</div>
      <div class="chip" data-difference data-7>#63e6be</div>
      <div class="chip" data-difference data-8>#96f2d7</div>
      <div class="chip" data-difference data-9>#c3fae8</div>
      <div class="chip" data-difference data-10>#e6fcf5</div>
    </div>
  </div>
  <div class="c code">
    <pre class="language-html"><code>
<div class="chip-1">#087f5b</div>
<div class="chip-2">#099268</div>
<div class="chip-3">#0ca678</div>
<div class="chip-4">#12b886</div>
<div class="chip-5">#20c997</div>
<div class="chip-6">#38d9a9</div>
<div class="chip-7">#63e6be</div>
<div class="chip-8">#96f2d7</div>
<div class="chip-9">#c3fae8</div>
<div class="chip-10">#e6fcf5</div>
</code></pre>
    {% raw %}
      <pre class="language-scss"><code>
$colors: (
  #087f5b,
  #099268,
  #0ca678,
  #12b886,
  #20c997,
  #38d9a9,
  #63e6be,
  #96f2d7,
  #c3fae8,
  #e6fcf5,
);

.chip {
  @each $color in $colors {
    &-#{index($colors, $color)} {
      color: _readable-color('difference', $color);
      background-color: $color;
    }
  }
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.chip-1 {
  color: #fff;
  background-color: #087f5b;
}
.chip-2 {
  color: #fff;
  background-color: #099268;
}
.chip-3 {
  color: #fff;
  background-color: #0ca678;
}
.chip-4 {
  color: #fff;
  background-color: #12b886;
}
.chip-5 {
  color: #000;
  background-color: #20c997;
}
.chip-6 {
  color: #000;
  background-color: #38d9a9;
}
.chip-7 {
  color: #000;
  background-color: #63e6be;
}
.chip-8 {
  color: #000;
  background-color: #96f2d7;
}
.chip-9 {
  color: #000;
  background-color: #c3fae8;
}
.chip-10 {
  color: #000;
  background-color: #e6fcf5;
}
</code></pre>
  </div>
</div>