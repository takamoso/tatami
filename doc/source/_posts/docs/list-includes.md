---
title: _list-includes
layout: docs
date: 2019-09-28 18:22:16
categories:
  - [ユーティリティ, List型]
---

特定の値が配列に含まれているかどうかを判定します。

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
_list-includes($list, $value);
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
    <td><code>$value</code></td>
    <td>Any</td>
    <td></td>
    <td>判定する値</td>
  </tr>
</table>

## 配列に値が含まれているか

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$list: a b c d;

@debug _list-includes($list, b);
// => true

@debug _list-includes($list, e);
// => false
</code></pre>
    {% endraw %}
  </div>
</div>