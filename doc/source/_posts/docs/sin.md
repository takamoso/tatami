---
title: _sin
layout: docs
date: 2019-10-04 17:33:45
categories:
  - [ユーティリティ]
---

サイン（正弦）を算出します。

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
_sin($x);
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

## 正弦

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _sin(0);
// => 0

@debug _sin(1);
// => 0.84147
</code></pre>
    {% endraw %}
  </div>
</div>