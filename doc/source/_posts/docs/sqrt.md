---
title: _sqrt
layout: docs
date: 2019-10-04 17:35:19
categories:
  - [ユーティリティ]
---

平方根を算出します。

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
_sqrt($x);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$x</code></td>
    <td>Number</td>
    <td></td>
    <td>対象となる数値</td>
  </tr>
</table>

## 平方根

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _sqrt(9);
// => 3

@debug _sqrt(2);
// => 1.41421
</code></pre>
    {% endraw %}
  </div>
</div>