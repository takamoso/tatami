---
title: _cbrt
layout: docs
date: 2019-10-04 17:11:18
categories:
  - [ユーティリティ, 数式]
---

立方根を算出します。

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
_cbrt($x);
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

## 立方根

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _cbrt(-1);
// => -1

@debug _cbrt(0);
// => 0

@debug _cbrt(1);
// => 1

@debug _cbrt(2);
// => 1.25992
</code></pre>
    {% endraw %}
  </div>
</div>