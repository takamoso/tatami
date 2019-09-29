---
title: _str-trim
layout: docs
date: 2019-09-29 12:11:37
categories:
  - [ユーティリティ]
---

文字列の両端の空白を削除します。

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
@include _str-trim($string);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td></td>
    <td>文字列</td>
  </tr>
</table>

## 文字列の両端の空白を削除

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _str-trim(' takamoso ');
// => takamoso
</code></pre>
    {% endraw %}
  </div>
</div>