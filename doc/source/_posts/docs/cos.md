---
title: _cos
layout: docs
date: 2019-10-04 17:16:06
categories:
  - [ユーティリティ]
---

コサイン (余弦) を算出します。

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
_cos($x);
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

## 余弦

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _cos(0);
// => 1

@debug _cos(1);
// => 0.5403
</code></pre>
    {% endraw %}
  </div>
</div>