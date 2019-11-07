---
title: _asinh
layout: docs
date: 2019-10-04 16:57:57
categories:
  - [ユーティリティ, 数式]
---

ハイパボリックアークサイン (双曲線逆正弦) を算出します。

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
_asinh($x);
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

## 双曲線逆正弦

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _asinh(1);
// => 0.88137

@debug _asinh(0);
// => 0
</code></pre>
    {% endraw %}
  </div>
</div>