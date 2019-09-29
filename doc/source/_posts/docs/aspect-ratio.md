---
title: _aspect-ratio
layout: docs
categories: 
  - [レイアウト]
date: 2019-09-12 14:49:10
---

アスペクト比の固定をします。

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
@include _aspect-ratio($width, $height, $selector, $fit);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$width</code></td>
    <td>Number</td>
    <td></td>
    <td>横のアスペクト比</td>
  </tr>
  <tr>
    <td><code>$height</code></td>
    <td>Number</td>
    <td></td>
    <td>縦のアスペクト比</td>
  </tr>
  <tr>
    <td><code>$selector</code></td>
    <td>String</td>
    <td><code class="language-scss">null</code></td>
    <td>アスペクト比を固定したい要素のセレクタ</td>
  </tr>
  <tr>
    <td><code>$fit</code></td>
    <td>Boolean</td>
    <td><code class="language-scss">false</code></td>
    <td>アスペクト比を固定した要素を内容がはみ出す際、高さを自動調整して合わせるかどうか</td>
  </tr>
</table>

## YouTube動画の埋め込み

アスペクト比の固定を使うと、YouTube動画のレスポンシブ化ができます。

<div class="c demo">
  <div class="p aspect ratio preview">
    <div class="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Bey4XXJAqS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Bey4XXJAqS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  // Flexアイテムなどのように横幅が0になることがある場合は、明示的にwidthやmax-width、flexプロパティで横幅を指定する。
  @include _aspect-ratio(16, 9, '> iframe');
}
</code></pre>
  </div>
</div>

どの画面幅でも16:9のアスペクト比が保たれるようになります。

## 内容がはみ出す場合

アスペクト比を固定した要素内にテキストなどの流動的な内容を記述している場合、要素からはみ出すことがあります。

<div class="c demo">
  <div class="p aspect ratio preview">
    <div class="overflow">
      <div class="inner">
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
      </div>
    </div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">
  <div class="inner">
    あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
  </div>
</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _aspect-ratio(3, 2, '> .inner');
}
</code></pre>
  </div>
</div>

このように3:2の要素内（青色の領域）からテキストがはみ出すと、後続の要素に重なってしまいます。

<div class="c demo">
  <div class="p aspect ratio preview">
    <div class="fit">
      あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
    </div>
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">
  あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _aspect-ratio(3, 2, $fit: true);
}
</code></pre>
  </div>
</div>

`$fit` 引数を指定すると、要素内に収まりきらなくなった場合に高さが自動で伸びるようになります。