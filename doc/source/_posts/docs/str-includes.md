---
title: _str-includes
layout: docs
date: 2019-09-29 10:23:19
categories:
  - [ユーティリティ]
---

文字列が特定の文字列を含むか判定します。

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
@include _str-includes($string, $value);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td></td>
    <td>対象となる文字列</td>
  </tr>
  <tr>
    <td><code>$value</code></td>
    <td>String</td>
    <td></td>
    <td>判定したい文字列</td>
  </tr>
</table>

## 文字列を含むか

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$string: 'takamoso';

@debug _str-includes($string, 'o');
// => true

@debug _str-includes($string, 'e');
// => false
</code></pre>
    {% endraw %}
  </div>
</div>