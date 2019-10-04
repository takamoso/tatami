---
title: _tan
layout: docs
date: 2019-10-04 17:35:48
categories:
---

タンジェント（正接）を算出します。

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
_tan($x);
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

## 正接

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _tan(0);
// => 0

@debug _tan(1);
// => 1.55741
</code></pre>
    {% endraw %}
  </div>
</div>