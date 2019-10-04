---
title: _expm1
layout: docs
date: 2019-10-04 17:20:28
categories:
  - [ユーティリティ]
---

`_exp` 関数の結果から `1` 引いた数を算出します。

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
_expm1($x);
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
@debug _expm1(0);
// => 0

@debug _expm1(1);
// => 1.71828

@debug _expm1(-1);
// => -0.63212
</code></pre>
    {% endraw %}
  </div>
</div>