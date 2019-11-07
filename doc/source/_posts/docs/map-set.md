---
title: _map-set
layout: docs
date: 2019-10-05 11:29:15
categories:
  - [ユーティリティ, Map型]
---

ネストされた連想配列に値を代入します。

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
_map-set($map, $keys...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$map</code></td>
    <td>Map</td>
    <td></td>
    <td>対象となる連想配列</td>
  </tr>
  <tr>
    <td><code>$keys</code></td>
    <td>List...</td>
    <td></td>
    <td>キーの配列</td>
  </tr>
</table>

## Mapに値を代入

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$map: (
  a: 1,
  b: (
    c: 2,
    d: 3
  ),
  e: 4
);

@debug _map-set($map, 'a', 2);
// =>  (
//   a: 2,
//   b: (
//     c: 2,
//     d: 3
//   ),
//   e: 4
// )

@debug _map-set($map, 'b', 'd', 4);
// =>  (
//   a: 1,
//   b: (
//     c: 2,
//     d: 4
//   ),
//   e: 4
// )
</code></pre>
    {% endraw %}
  </div>
</div>