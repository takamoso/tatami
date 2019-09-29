---
title: _list-replace
layout: docs
date: 2019-09-28 18:38:47
categories:
  - [ユーティリティ]
---

配列の指定番目の値を置き換えます。

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
@include _list-replace($list, $index, $value);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td></td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$index</code></td>
    <td>Number</td>
    <td></td>
    <td>置き換える番目</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>Any</td>
    <td></td>
    <td>置き換える値</td>
  </tr>
</table>

## 配列のN番目の値を置換

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$list: a, b, c, d;

@debug _list-replace($list, 3, e);
// => a b e d
</code></pre>
    {% endraw %}
  </div>
</div>