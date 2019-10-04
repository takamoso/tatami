---
title: _imul
layout: docs
date: 2019-10-04 17:26:52
categories:
  - [ユーティリティ]
---

32ビット乗算を算出します。

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
_imul($x, $y);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$x</code></td>
    <td>Number</td>
    <td></td>
    <td>対象となる数値</td>
  </tr>
  <tr>
    <td><code>$y</code></td>
    <td>Number</td>
    <td></td>
    <td>対象となる数値</td>
  </tr>
</table>

## 32ビット乗算

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _imul(2, 4);
// => 8

@debug _imul(-1, 8);
// => -8

@debug _imul(-2, -2);
// => 4
</code></pre>
    {% endraw %}
  </div>
</div>