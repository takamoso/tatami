---
title: _map-to-css
layout: docs
date: 2019-10-09 21:00:09
categories:
  - [ユーティリティ]
---

連想配列をCSSとして出力します。

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
@include _map-to-css($map);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$map</code></td>
    <td>Map</td>
    <td></td>
    <td>対象となる連想配列</td>
  </tr>
</table>

## CSSとして出力

Sassを記述するのと同じように、連想配列を使ってネストされたCSSを出力できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _map-to-css((
    display: flex,
    color: red,
    '&:hover': (
      color: blue,
      '&::before': (
        content: 'nested',
      ),
    ),
  ));
}
</code></pre>
    <pre class="language-css"><code>
.element {
  display: flex;
  color: red;
}
.element:hover {
  color: blue;
}
.element:hover::before {
  content: "nested";
}
</code></pre>
  </div>
</div>

## カンマ区切りの値

CSSプロパティにカンマ区切りの値を指定する場合は、引用符 `''` で囲む必要があります。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _map-to-css((
    transition: 'color .2s, background-color .3s ease-out',
  ));
}
</code></pre>
    <pre class="language-css"><code>
.element {
  transition: color .2s, background-color .3s ease-out;
}
</code></pre>
  </div>
</div>