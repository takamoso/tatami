---
title: _acosh
layout: docs
date: 2019-10-04 16:29:33
categories:
  - [ユーティリティ]
---

ハイパボリックアークコサイン (双曲線逆余弦) を算出します。

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
_acosh($x);
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

## 双曲線逆余弦

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _acosh(-1);
// => nan

@debug _acosh(0);
// => nan

@debug _acosh(.5);
// => nan

@debug _acosh(1);
// => 0

@debug _acosh(2);
// => 1.31696
</code></pre>
    {% endraw %}
  </div>
</div>