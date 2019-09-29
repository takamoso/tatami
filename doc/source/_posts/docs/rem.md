---
title: _rem
layout: docs
date: 2019-09-29 10:17:35
categories:
  - [ユーティリティ]
---

`px` を `rem` 値へ変換します。

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
@include _rem($values, $base);
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

## rem値へ変換

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
body {
  font-size: _rem(18px);
  padding: _rem(10px 20px);
}
</code></pre>
      <pre class="language-css"><code>
body {
  font-size: 1.125rem;
  padding: 0.625rem 1.25rem;
}
</code></pre>
    {% endraw %}
  </div>
</div>