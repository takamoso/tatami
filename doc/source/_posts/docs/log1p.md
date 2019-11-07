---
title: _log1p
layout: docs
date: 2019-10-04 17:30:04
categories:
  - [ユーティリティ, 数式]
---

引数に `1` を足した数の自然対数を算出します。

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
_log1p($x);
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

## 自然対数

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _log1p(1);
// => 0.69315

@debug _log1p(0);
// => 0

@debug _log1p(-1);
// => -inf

@debug _log1p(-2);
// => nan
</code></pre>
    {% endraw %}
  </div>
</div>