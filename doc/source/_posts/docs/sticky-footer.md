---
title: _sticky-footer
layout: docs
categories:
  - [レイアウト]
date: 2019-09-18 19:37:20
---

コンテンツが少ない場合でも、フッターを下部に固定します。

<table>
  <tr>
    <th>引数</th>
    <th>型</th>
    <th>初期値</th>
    <th colspan="2">説明</th>
  </tr>
  <tr>
    <td colspan="5">
      <pre class="language-scss"><code>
@include _sticky-footer($main, $footer, $type);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$main</code></td>
    <td>String</td>
    <td><code><span class="token selector">.main</span></code></td>
    <td colspan="2">メインとなる要素で、<code class="language-scss">$type</code> が <code class="language-scss">table</code> <code class="language-scss">flex</code> のときは必須</td>
  </tr>
  <tr>
    <td><code>$footer</code></td>
    <td>String</td>
    <td><code><span class="token selector">.footer</span></code></td>
    <td colspan="2">フッターとなる要素で、<code class="language-scss">$type</code> が <code class="language-scss">flex</code> <code class="language-scss">sticky</code> のときは必須</td>
  </tr>
  <tr>
    <td rowspan="5"><code>$type</code></td>
    <td rowspan="5">String</td>
    <td rowspan="5"><code class="language-scss">flex</code></td>
    <td colspan="2">用いる手法</td>
  </tr>
  <tr>
    <td><code class="langauge-scss">table</code></td>
    <td><code class="language-scss">display: table;</code> を使った手法</td>
  </tr>
  <tr>
    <td><code class="language-scss">flex</code></td>
    <td><code class="language-scss">display: flex;</code> を使った手法</td>
  </tr>
  <tr>
    <td><code class="language-scss">grid</code></td>
    <td><code class="language-scss">display: grid;</code> を使った手法</td>
  </tr>
  <tr>
    <td><code class="language-scss">sticky</code></td>
    <td><code class="language-scss">position: sticky;</code> を使った手法</td>
  </tr>
</table>

## 初期値

メイン部分のコンテンツが少ない場合、フッターは下部に固定され、コンテンツが多い場合はそのまま下に続くようになります。

<div class="c demo">
  <div class="p sticky footer preview">
    <div class="c browser">
      <div class="inner container">
        <div class="main">
          <button class="button">メイン部分に追加</button>
        </div>
        <div class="footer">フッター</div>
      </div>
    </div>
    {% raw %}
      <script>
        !function() {
          var button = document.querySelector('.p.sticky.footer.preview .button');
          var main = document.querySelector('.p.sticky.footer.preview .main');
          var content = document.createElement('p');
          var flag = false;

          content.innerHTML = 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。';

          button.addEventListener('click', function(event) {
            flag = !flag;

            if (flag) {
              main.appendChild(content);
            } else {
              main.removeChild(content);
            }
          });
        }();
      </script>
    {% endraw %}
  </div>
  <div class="code">
    <pre class="language-html"><code>
<html>
<body>
  <div class="main">メイン</div>
  <div class="footer">フッター</div>
</body>
</html>
</code></pre>
    <pre class="language-scss"><code>
@include _sticky-footer;
</code></pre>
  </div>
</div>

[メイン部分に追加] ボタンをクリックすると、動作を確認できます。

## 色々な手法

Sticky Footerを実装する手法をいくつか用意しています。

<div class="c demo">
  <div class="code">
    <pre class="language-html"><code>
<html>
<body>
  <div>メイン</div>
  <div>フッター</div>
</body>
</html>
</code></pre>
    <pre class="language-scss"><code>
@include _sticky-footer($type: grid);
</code></pre>
  </div>
</div>

Gridレイアウトで実装したいときは `$type` 引数に `grid` と指定します。