---
title: _pow
layout: docs
date: 2019-10-04 17:32:25
categories:
  - [ユーティリティ]
---

累乗を算出します。

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
_log($x, $y);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$x</code></td>
    <td>Number</td>
    <td></td>
    <td>底となる数値</td>
  </tr>
  <tr>
    <td><code>$y</code></td>
    <td>Number</td>
    <td></td>
    <td>累乗する指数</td>
  </tr>
</table>

## 累乗

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _pow(7, 2);
// => 49

@debug _pow(4, .5);
// => 2

@debug _pow(7, -2);
// => 0.02041

@debug _pow(-7, 2);
// => 49
</code></pre>
    {% endraw %}
  </div>
</div>