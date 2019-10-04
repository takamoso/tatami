---
title: _asin
layout: docs
date: 2019-10-04 16:34:42
categories:
  - [ユーティリティ]
---

アークサイン (逆正弦) を算出します。

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
_asin($x);
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

## 逆正弦

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _asin(-2);
// => nan

@debug _asin(-1);
// => -1.5708

@debug _asin(0);
// => 0

@debug _asin(.5);
// => 0.5236

@debug _asin(1);
// => 1.5708

@debug _asin(2);
// => nan
</code></pre>
    {% endraw %}
  </div>
</div>