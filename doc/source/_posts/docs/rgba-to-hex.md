---
title: _rgba-to-hex
layout: docs
date: 2019-10-16 09:00:40
categories:
  - [ユーティリティ]
---

`rgba` から `hex` 値へ色を変換します。

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
_rgba-to-hex($color, $background);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$color</code></td>
    <td>Color</td>
    <td></td>
    <td><code>rgba()</code> 関数で指定された色</td>
  </tr>
  <tr>
    <td><code>$background</code></td>
    <td>Color</td>
    <td><code class="language-scss">#fff</code></td>
    <td>16進数表記の色</td>
  </tr>
</table>

## rgbaからhexへ変換

<div class="c demo">
  <div class="c code">
    {% raw %}
      <pre class="language-scss"><code>
@debug _rgba-to-hex(rgba(255, 1, 1, .4));
// => #ff9999

@debug _rgba-to-hex(rgba(255, 1, 1, .4), #fafafa);
// => #fc9696
</code></pre>
    {% endraw %}
  </div>
</div>