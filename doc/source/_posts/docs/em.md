---
title: _em
layout: docs
date: 2019-09-27 12:55:50
categories:
  - [ユーティリティ]
---

`px` を `em` 値へ変換します。

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
_em($values, $base);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$values</code></td>
    <td>Number | List</td>
    <td></td>
    <td>対象となる <code><span class="token unit">px</span></code> 値</td>
  </tr>
  <tr>
    <td><code>$base</code></td>
    <td>Number</td>
    <td><code class="language-scss">16px</code></td>
    <td>基準となる <code><span class="token unit">px</span></code> 値</td>
  </tr>
</table>

## em値へ変換

`font-size` プロパティに `18px` と指定した場合、基準となる値は `18px` になるので、`$base` 引数に指定する必要があります。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
body {
  font-size: _em(18px);
  margin: _em(10px 20px, 18px);
  padding: _em(15px 30px, 18px)
}
</code></pre>
    <pre class="language-css"><code>
body {
  font-size: 1.125em;
  margin: 0.55556em 1.11111em;
  padding: 0.83333em 1.66667em;
}
</code></pre>
  </div>
</div>