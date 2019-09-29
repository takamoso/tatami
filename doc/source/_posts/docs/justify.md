---
title: _justify
layout: docs
categories:
  - [タイポグラフィ]
date: 2019-09-16 10:34:35
---

文字を両端揃えにします。

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
@include _justify($first);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$first</code></td>
    <td>Boolean</td>
    <td><code class="language-scss">false</code></td>
    <td>文章が1行のとき、両端揃えにするかどうか</td>
  </tr>
</table>

## 両端揃え

`_jusfity` 関数を使うと文章を両端揃えにして、右側の改行位置が揃うようになります。

<div class="c demo">
  <div class="p justify preview">
    <div class="justify">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。</div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">...</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _justify;
}
</code></pre>
  </div>
</div>

## 1行の場合

文章が1行の場合も両端揃えにしたい場合は、引数に `true` を指定します。

<div class="c demo">
  <div class="p justify preview">
    <div class="first">ポラーノ</div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">...</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _justify(true);
}
</code></pre>
  </div>
</div>