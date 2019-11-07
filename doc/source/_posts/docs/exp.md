---
title: _exp
layout: docs
date: 2019-10-04 17:17:40
categories:
  - [ユーティリティ, 数式]
---

自然対数 `e` を底とするべき乗を算出します。

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
_exp($x);
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

## 自然対数を底とするべき乗

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _exp(0);
// => 1

@debug _exp(1);
// => 2.71828

@debug _exp(-1);
// => 0.36788
</code></pre>
    {% endraw %}
  </div>
</div>