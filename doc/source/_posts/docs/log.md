---
title: _log
layout: docs
date: 2019-10-04 17:28:57
categories:
  - [ユーティリティ]
---

自然対数を算出します。

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
_log($x);
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

## 自然対数

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _log(-1);
// => nan

@debug _log(0);
// => -inf

@debug _log(1);
// => 0

@debug _log(10);
// => 2.30259
</code></pre>
    {% endraw %}
  </div>
</div>