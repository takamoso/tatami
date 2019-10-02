---
title: _str-join
layout: docs
date: 2019-09-29 11:57:00
categories:
  - [ユーティリティ]
---

配列の全ての要素を連結した文字列を生成します。

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
_str-join($list, $separator);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$list</code></td>
    <td>List</td>
    <td></td>
    <td>対象となる配列</td>
  </tr>
  <tr>
    <td><code>$separator</code></td>
    <td>String</td>
    <td><code>,</code></td>
    <td>配列の各要素を区切る文字列</td>
  </tr>
</table>

## 配列から文字列を生成

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$list: a, b, c, d;

@debug _str-join($list);
// => a,b,c,d

@debug _str-join($list, '');
// => abcd
</code></pre>
    {% endraw %}
  </div>
</div>