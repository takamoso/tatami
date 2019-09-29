---
title: _map-merge
layout: docs
date: 2019-09-29 10:14:46
categories:
  - [ユーティリティ]
---

2つ以上の連想配列をマージします。

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
@include _map-merge($map...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$map...</code></td>
    <td>Map...</td>
    <td></td>
    <td>2つ以上の連想配列</td>
  </tr>
</table>

## Mapをマージ

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$map1: (
  a: 1,
  b: (
    c: 2
  ),
  d: 3
);

$map2: (
  b: (
    c: 3,
    e: 4
  ),
  d: 5
);

@debug _map-merge($map1, $map2);
// => (a: 1, b: (c: 3, e: 4), d: 5)
</code></pre>
    {% endraw %}
  </div>
</div>