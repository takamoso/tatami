---
title: _acos
layout: docs
date: 2019-10-04 16:26:55
categories:
  - [ユーティリティ]
---

アークコサイン（逆余弦）を算出します。

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
_acos($x);
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

## 逆余弦

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _acos(-2);
// => nan

@debug _acos(-1);
// => 3.14159

@debug _acos(0);
// => 1.5708

@debug _acos(.5);
// => 1.0472

@debug _acos(1);
// => 0

@debug _acos(2);
// => nan
</code></pre>
    {% endraw %}
  </div>
</div>