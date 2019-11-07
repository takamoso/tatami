---
title: _hypot
layout: docs
date: 2019-10-04 17:24:54
categories:
  - [ユーティリティ, 数式]
---

二乗和の平方根を算出します。

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
_hypot($x...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$x</code></td>
    <td>List...</td>
    <td></td>
    <td>対象となる数値の配列</td>
  </tr>
</table>

## 二乗和の平方根

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _hypot(3, 4);
// => 5

@debug _hypot(3, 4, 5);
// => 7.07107
</code></pre>
    {% endraw %}
  </div>
</div>