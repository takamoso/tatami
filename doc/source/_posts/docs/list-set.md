---
title: _list-set
layout: docs
date: 2019-09-29 09:59:30
categories:
  - [ユーティリティ]
---

配列に値を代入します。

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
_list-set($list, $indexes...);
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
    <td><code>$indexes</code></td>
    <td>List...</td>
    <td></td>
    <td>代入する番目の値（配列の最後の値は代入する値）</td>
  </tr>
</table>

## 配列のN番目に値を代入

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _list-set(a b c d, 3, e);
// => a b e d

@debug _list-set(a (b c) d, 2, 1, e);
// => a (e c) d
</code></pre>
    {% endraw %}
  </div>
</div>