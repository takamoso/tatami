---
title: _hack
layout: docs
categories:
  - [セレクタ]
date: 2019-09-19 11:29:23
---

CSSハックを利用して、特定のブラウザのバージョンにCSSを適用します。

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
@include _hack($target);
</code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="5"><code>$target</code></td>
    <td rowspan="5">String</td>
    <td rowspan="5"></td>
    <td colspan="2">ブラウザのバージョン</td>
  </tr>
  <tr>
    <td><code><span class="token string">ie10</span></code></td>
    <td>Internet Explorer 10</td>
  </tr>
  <tr>
    <td><code><span class="token string">ie11</span></code></td>
    <td>Internet Explorer 11</td>
  </tr>
  <tr>
    <td><code><span class="token string">edge</span></code></td>
    <td>Edgeのすべてのバージョン</td>
  </tr>
</table>

## 特定のブラウザのみ適用

ブラウザがプロパティや疑似クラスに対応しているかどうかで、特定のブラウザのみにCSSを適用させることができます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _hack(ie11) {
    font-size: 2em;
  }
}
</code></pre>
    <pre class="language-css"><code>
_:-ms-fullscreen, :root .element {
  font-size: 2em;
}
</code></pre>
  </div>
</div>