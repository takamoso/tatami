---
title: _atan2
layout: docs
date: 2019-10-04 17:09:06
categories:
  - [ユーティリティ]
---

比率のアークタンジェント (逆正接) を算出します。

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
_atan2($y, $x);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$y</code></td>
    <td>Number</td>
    <td></td>
    <td>点のy座標</td>
  </tr>
  <tr>
    <td><code>$x</code></td>
    <td>Number</td>
    <td></td>
    <td>点のx座標</td>
  </tr>
</table>

## 比率の逆正接

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _atan2(90, 15);
// => 1.40565

@debug _atan2(15, 90);
// => 0.16515
</code></pre>
    {% endraw %}
  </div>
</div>