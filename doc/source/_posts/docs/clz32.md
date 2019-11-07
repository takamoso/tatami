---
title: _clz32
layout: docs
date: 2019-10-04 17:12:18
categories:
  - [ユーティリティ, 数式]
---

2進数32ビット整数値で表された数の先頭の0の個数を算出します。

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
_clz32($x);
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

## 0の個数

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _clz32(1);
// => 31

@debug _clz32(1000);
// => 22

@debug _clz32(3.5);
// => 30
</code></pre>
    {% endraw %}
  </div>
</div>