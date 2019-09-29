---
title: _triangle
layout: docs
categories:
  - [シェイプ]
date: 2019-09-21 21:52:55
---

三角形を描画します。

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
@include _triangle($direction, $width, $height, $color, $method, $responsive);
</code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="9"><code>$direction</code></td>
    <td rowspan="9">String</td>
    <td rowspan="9"></td>
    <td colspan="2">三角形の向き</td>
  </tr>
  <tr>
    <td><code><span class="token string">top</span></code></td>
    <td>上</td>
  </tr>
  <tr>
    <td><code><span class="token string">left</span></code></td>
    <td>左</td>
  </tr>
  <tr>
    <td><code><span class="token string">right</span></code></td>
    <td>右</td>
  </tr>
  <tr>
    <td><code><span class="token string">bottom</span></code></td>
    <td>下</td>
  </tr>
  <tr>
    <td><code><span class="token string">top-left</span></code></td>
    <td>左上</td>
  </tr>
  <tr>
    <td><code><span class="token string">top-right</span></code></td>
    <td>右上</td>
  </tr>
  <tr>
    <td><code><span class="token string">bottom-left</span></code></td>
    <td>左下</td>
  </tr>
  <tr>
    <td><code><span class="token string">bottom-right</span></code></td>
    <td>右下</td>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Number</td>
    <td><code class="language-scss">null</code></td>
    <td colspan="2">横幅</td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Number</td>
    <td><code class="language-scss">null</code></td>
    <td colspan="2">縦幅</td>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td>Color</td>
    <td><code class="language-scss">currentColor</code></td>
    <td colspan="2">色</td>
  </tr>
  <tr>
    <td rowspan="3"><code>$method</code></td>
    <td rowspan="3">String</td>
    <td rowspan="3"><code><span class="token string">border</span></code></td>
    <td colspan="2">手法</td>
  </tr>
  <tr>
    <td><code><span class="token string">border</span></code></td>
    <td><code><span class="token property">border</span></code> プロパティを使った手法</td>
  </tr>
  <tr>
    <td><code><span class="token string">gradient</span></code></td>
    <td><code class="language-scss">linear-gradient()</code> を使った手法</td>
  </tr>
  <tr>
    <td><code>$responsive</code></td>
    <td>Boolean</td>
    <td><code class="language-scss">false</code></td>
    <td colspan="2">レスポンシブに対応するか</td>
  </tr>
</table>

## 三角形

簡単に三角形を描画できます。

<div class="c demo">
  <div class="p triangle preview">
    <div class="triangle"></div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element"></div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _triangle(top, 200px, 100px, #3db57c);
}
</code></pre>
  </div>
</div>

## レスポンシブ対応

三角形を横幅に応じて可変（レスポンシブ化）させたい場合は、`$method` 引数に `gradient`、`$responsive` 引数に `true` を指定します。

<div class="c demo">
  <div class="p triangle preview">
    <div class="responsive">
      <div class="triangle"></div>
    </div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="container">
  <div class="element"></div>
</div>
</code></pre>
    <pre class="language-scss"><code>
.container {
  @include _aspect-ratio(3, 2, '> .element');
}
.element {
  @include _triangle(top, $color: #3db57c, $method: gradient, $responsive: true);
}
</code></pre>
  </div>
</div>

`$width` と `$height` 引数は指定する必要がありません。あとは `_aspect-ratio` 関数を使って3:2の要素を作成します。