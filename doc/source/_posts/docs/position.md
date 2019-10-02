---
title: _position
layout: docs
categories:
  - [レイアウト]
date: 2019-09-18 19:19:04
---

`position` 関連プロパティを一括指定します。

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
@include _position($type, $positions...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$type</code></td>
    <td>String</td>
    <td></td>
    <td><code><span class="token property">position</span></code> プロパティの値</td>
  </tr>
  <tr>
    <td><code>$positions</code></td>
    <td>List...</td>
    <td></td>
    <td><code><span class="token property">margin</span></code> や <code><span class="token property">padding</span></code> プロパティと同じ構文で指定する</td>
  </tr>
</table>

## 一括指定

数値が3つ指定された場合は、上・左右・下になります。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _position(absolute, 0, 5px, 10px);
}
</code></pre>
    <pre class="language-css"><code>
.element {
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  bottom: 10px;
}
</code></pre>
  </div>
</div>

また、数値が2つ指定された場合は上下・左右、4つ指定された場合は上・右・下・左となります。

## 特定の値のみ指定

特定のプロパティにのみ値を指定する場合は `$top` `$left` `$right` `$bottom` 引数を使います。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _position(absolute, $left: 5px);
}
</code></pre>
    <pre class="language-css"><code>
.element {
  position: absolute;
  left: 5px;
}
</code></pre>
  </div>
</div>

また、`null` 値を使って引数を指定する方法もあります。