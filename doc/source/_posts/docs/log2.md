---
title: _log2
layout: docs
date: 2019-10-04 17:31:48
categories:
  - [ユーティリティ, 数式]
---

`2` を底とした対数を算出します。

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
_log2($x);
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
@debug _log2(3);
// => 1.58496

@debug _log2(2);
// => 1

@debug _log2(1);
// => 0

@debug _log2(0);
// => -inf

@debug _log2(-2);
// => nan

@debug _log2(1024);
// => 10
</code></pre>
    {% endraw %}
  </div>
</div>