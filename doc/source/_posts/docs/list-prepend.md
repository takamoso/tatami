---
title: _list-prepend
layout: docs
date: 2019-09-28 18:27:47
categories:
  - [ユーティリティ]
---

配列の先頭に値を追加します。

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
@include _list-prepend($list, $value);
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
    <td><code>$value</code></td>
    <td>String | Number | List</td>
    <td></td>
    <td>追加する値</td>
  </tr>
</table>

## 配列の先頭に値を追加

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$list: a b c d;

@debug _list-prepend($list, e);
// => e a b c d

@debug _list-prepend($list, e f);
// => e f a b c d
</code></pre>
    {% endraw %}
  </div>
</div>