---
title: _str-split
layout: docs
date: 2019-09-29 12:08:40
categories:
  - [ユーティリティ, String型]
---

文字列を指定した文字列で分割します。

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
_str-split($string, $separator, $limit);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$string</code></td>
    <td>String</td>
    <td></td>
    <td>文字列</td>
  </tr>
  <tr>
    <td><code>$separator</code></td>
    <td>String</td>
    <td><code class="language-scss">null</code></td>
    <td>分割する文字列</td>
  </tr>
  <tr>
    <td><code>$limit</code></td>
    <td>Number</td>
    <td><code class="language-scss">null</code></td>
    <td>分割する回数</td>
  </tr>
</table>

## 文字列を分割

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$string: 'takamoso';

@debug _str-split($string, 'a');
// => "t" "k" "moso"

@debug _str-split($string, '');
// => "t" "a" "k" "a" "m" "o" "s" "o"

@debug _str-split($string, '', 4);
// => "t" "a" "k" "a"
</code></pre>
    {% endraw %}
  </div>
</div>