---
title: _strip-unit
layout: docs
date: 2019-09-29 12:13:57
categories:
  - [ユーティリティ]
---

数値の単位を取り除きます。

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
_strip-unit($number);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$number</code></td>
    <td>Number</td>
    <td></td>
    <td>数値</td>
  </tr>
</table>

## 単位を削除

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _strip-unit(100px);
// => 100

@debug _strip-unit(1.1em);
// => 1.1
</code></pre>
    {% endraw %}
  </div>
</div>