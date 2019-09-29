---
title: _clearfix
layout: docs
categories: 
  - [レイアウト]
date: 2019-09-18 06:08:57
---

`float` の解除をします。

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
@include _clearfix;
</code></pre>
    </td>
  </tr>
</table>

## floatの解除

`float` プロパティを使った要素の親要素で `_clearfix` 関数を呼び出します。

<div class="c demo">
  <div class="p clearfix preview">
    <ul class="list">
      <li class="item">1</li>
      <li class="item">2</li>
      <li class="item">3</li>
    </ul>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<ul class="list">
  <li class="item">1</li>
  <li class="item">2</li>
  <li class="item">3</li>
</ul>
</code></pre>
    <pre class="language-scss"><code>
.list {
  @include _clearfix;
}
.item {
  float: left;
  width: percentage(1/3);
}
</code></pre>
  </div>
</div>