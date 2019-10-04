---
title: _atanh
layout: docs
date: 2019-10-04 17:00:48
categories:
  - [ユーティリティ]
---

ハイパボリックアークタンジェント (双曲線逆正接) を算出します。

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
_atanh($x);
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

## 双曲線逆正接

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _atanh(-2);
// => nan

@debug _atanh(-1);
// => -inf

@debug _atanh(0);
// => 0

@debug _atanh(.5);
// => 0.54931

@debug _atanh(1);
// => inf

@debug _atanh(2);
// => nan
</code></pre>
    {% endraw %}
  </div>
</div>