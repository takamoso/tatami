---
title: _log10
layout: docs
date: 2019-10-04 17:31:09
categories:
  - [ユーティリティ]
---

`10` を底とした対数を算出します。

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
_log10($x);
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

## 対数

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _log10(2);
// => 0.30103

@debug _log10(1);
// => 0

@debug _log10(0);
// => -inf

@debug _log10(-2);
// => nan

@debug _log10(100000);
// => 5
</code></pre>
    {% endraw %}
  </div>
</div>