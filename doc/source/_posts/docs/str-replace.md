---
title: _str-replace
layout: docs
date: 2019-09-29 12:03:21
categories:
  - [ユーティリティ]
---

パターンにマッチした文字列を置き換えます。

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
_str-replace($string, $search, $replacement);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td></td>
    <td>置き換えられる文字列</td>
  </tr>
  <tr>
    <td><code>$search</code></td>
    <td>String</td>
    <td></td>
    <td>マッチする文字列</td>
  </tr>
  <tr>
    <td><code>$replacement</code></td>
    <td>String</td>
    <td><code class="language-scss">''</code></td>
    <td>置換文字列</td>
  </tr>
</table>

## 文字列の置換

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$string: 'takamoso';

@debug _str-replace($string, 'a');
// => tkmoso

@debug _str-replace($string, 'a', 'o');
// => tokomoso
</code></pre>
    {% endraw %}
  </div>
</div>