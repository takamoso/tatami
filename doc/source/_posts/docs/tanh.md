---
title: _tanh
layout: docs
date: 2019-10-04 17:36:20
categories:
  - [ユーティリティ, 数式]
---

ハイパボリックサイン (双曲線正接) を算出します。

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
_tanh($x);
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

## 双曲線正接

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _tanh(0);
// => 0

@debug _tanh(1);
// => 0.76159
</code></pre>
    {% endraw %}
  </div>
</div>