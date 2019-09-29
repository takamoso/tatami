---
title: _truncate
layout: docs
categories:
  - [タイポグラフィ]
date: 2019-09-21 21:35:56
---

文字が横幅に収まりきらなくなった場合に省略記号を表示します。

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
@include _truncate($line, $line-height);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$line</code></td>
    <td>Number</td>
    <td><code><span class="token number">1</span></code></td>
    <td>表示する行数</td>
  </tr>
  <tr>
    <td><code>$line-height</code></td>
    <td>Number</td>
    <td><code class="language-scss">null</code></td>
    <td>指定すると <code><span class="token property">-webkit-line-clamp</span></code> プロパティに対応していないブラウザの表示を最適化できる</td>
  </tr>
</table>

## 1行の省略

引数を指定しなければ1行の省略となります。

<div class="c demo">
  <div class="p truncate preview">
    <div class="truncate">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">...</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _truncate;
}
</code></pre>
  </div>
</div>

## 2行以上の省略

3行目に省略記号が表示され、`-webkit-line-clamp` プロパティに非対応のブラウザでは違和感がないように調整されます。

<div class="c demo">
  <div class="p truncate preview">
    <div class="clamp">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。</div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">...</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _truncate(3, 1.7);
}
</code></pre>
  </div>
</div>

ただし、非対応のブラウザでは省略記号 `...` は表示されません。