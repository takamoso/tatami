---
title: _map-get
layout: docs
date: 2019-09-29 10:08:17
categories:
  - [ユーティリティ]
---

ネストされた連想配列の値を取得します。

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
@include _map-get($map, $keys...);
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
    <td><code>$keys...</code></td>
    <td>List...</td>
    <td></td>
    <td>キーの配列</td>
  </tr>
</table>

## Mapの値を取得

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

@debug _map-get($map, 'a');
// => 1

@debug _map-get($map, 'b', 'd');
// => 3
</code></pre>
    {% endraw %}
  </div>
</div>