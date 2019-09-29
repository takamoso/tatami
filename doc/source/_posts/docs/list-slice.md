---
title: _list-slice
layout: docs
date: 2019-09-29 10:03:32
categories:
  - [ユーティリティ]
---

配列から指定された範囲を抜き出した配列を生成します。

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
@include _list-slice($list, $start, $end);
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
    <td><code>$start</code></td>
    <td>Number</td>
    <td><code><span class="token number">1</span></code></td>
    <td>抜き出す開始の番目</td>
  </tr>
  <tr>
    <td><code>$end</code></td>
    <td>Number</td>
    <td><code class="language-scss">length($list)</code></td>
    <td>抜き出す終了の番目</td>
  </tr>
</table>

## 配列から抜き出す

`$start` `$end` 引数に負の値を指定すると配列の後ろから抜き出します。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$list: a, b, c, d;

@debug _list-slice($list, 2, 3);
// => b c

@debug _list-slice($list, -2);
// => c d
</code></pre>
    {% endraw %}
  </div>
</div>