---
title: _list-get
layout: docs
date: 2019-09-28 18:14:20
categories:
  - [ユーティリティ]
---

配列の値を取得します。

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
_list-get($list, $indexes...);
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
    <td><code>$indexes</code></td>
    <td>Number | List	</td>
    <td></td>
    <td>番目の値</td>
  </tr>
</table>

## 配列のN番目の値を取得

ネストされた配列にも対応しています。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _list-get(a b c d, 3);
// => c

@debug _list-get(a (b c) d, 2, 1);
// => b
</code></pre>
    {% endraw %}
  </div>
</div>