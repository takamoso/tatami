---
title: _atan
layout: docs
date: 2019-10-04 16:59:58
categories:
  - [ユーティリティ]
---

アークタンジェント (逆正接) を算出します。

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
_atan($x);
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

## 逆正接

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _atan(1);
// => 0.7854

@debug _atan(0);
// => 0
</code></pre>
    {% endraw %}
  </div>
</div>