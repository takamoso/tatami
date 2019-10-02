---
title: _list-remove
layout: docs
date: 2019-09-28 18:33:53
categories:
  - [ユーティリティ]
---

配列から指定した番目の要素を削除します。

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
_list-remove($list, $index);
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
    <td>削除する番目</td>
  </tr>
</table>

## 配列のN番目の値を削除

`$index` 引数に負の値を指定すると、配列の後ろから指定できます。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$list: a, b, c, d;

@debug _list-remove($list, 3);
// => a b d

@debug _list-remove($list, -3);
// => a c d
</code></pre>
    {% endraw %}
  </div>
</div>