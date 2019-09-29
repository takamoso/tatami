---
title: _fluid
layout: docs
categories:
  - [レイアウト]
date: 2019-09-18 06:44:06
---

1次関数を利用して、画面幅に応じてプロパティの値が流動的に変化します。

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
@include _fluid($property, $lists...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$property</code></td>
    <td>String</td>
    <td></td>
    <td>CSSのプロパティ名</td>
  </tr>
  <tr>
    <td><code>$lists...</code></td>
    <td>List...</td>
    <td></td>
    <td>画面幅が小さい順に2点以上の座標を記述する</td>
  </tr>
</table>

## 流動的な文字サイズ

ブラウザの画面幅が `320px` のときは `14px`、画面幅が `1440px` のときは `20px` になり、その間は1次関数的に滑らかに変化します。

<div class="c demo">
  <div class="p fluid preview">
    <div class="fluid"></div>
    {% raw %}
      <script>
        !function() {
          var element = document.querySelector('.p.fluid.preview > .fluid');
          var timeout;

          element.innerHTML = getComputedStyle(element).fontSize;

          window.addEventListener('resize', function() {
            if (timeout) cancelAnimationFrame(timeout);

            timeout = requestAnimationFrame(function() {
              element.innerHTML = getComputedStyle(element).fontSize;
            });
          });
        }();
      </script>
    {% endraw %}
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">...</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _fluid(font-size, 320px 14px, 1440px 20px);
}
</code></pre>
  </div>
</div>

ブラウザの幅を変えると、デモの `px` 値が変化するのが分かると思います。

## より細かい指定

2点以上の座標を指定できるので、細かい調整をしたいときに便利です。

<div class="c demo">
  <div class="p fluid preview">
    <div class="complex"></div>
    {% raw %}
      <script>
        !function() {
          var element = document.querySelector('.p.fluid.preview > .complex');
          var timeout;

          element.innerHTML = getComputedStyle(element).fontSize;

          window.addEventListener('resize', function() {
            if (timeout) cancelAnimationFrame(timeout);

            timeout = requestAnimationFrame(function() {
              element.innerHTML = getComputedStyle(element).fontSize;
            });
          });
        }();
      </script>
    {% endraw %}
  </div>
  <div class="code">
    <pre class="language-html"><code>
<div class="element">...</div>
</code></pre>
    <pre class="language-scss"><code>
.element {
  @include _fluid(font-size, 320px 14px, 1024px 17px, 1440px 20px);
}
</code></pre>
  </div>
</div>

## アクセシビリティ

アクセシビリティに配慮するため、`px` 値は `em` 値へ変換して出力されます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
html {
  font-size: 62.5%;  // 10px（ブラウザの設定が16pxの場合）
}
body {
  @include _fluid(font-size, 320px 14px, 1440px 20px, 10px);
}
</code></pre>
    <pre class="language-css"><code>
html {
  font-size: 62.5%;  /* 10px */
}
body {
  font-size: 1.4em;  /* 14px */
}
@media (min-width: 20em) {
  body {
    font-size: calc(0.53571vw + 1.22857em);
  }
}
@media (min-width: 90em) {
  body {
    font-size: 2em;  /* 20px */
  }
}
</code></pre>
  </div>
</div>

上記のように親要素 `html` の文字サイズが `10px` の場合、最後の引数に `em` 値へ変換する際のベースとなるフォントサイズを指定できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
html {
  font-size: 62.5%;  // 10px（ブラウザの設定が16pxの場合）
}
body {
  @include _fluid(font-size, 320px 1em, 1440px 2em, 10px);
}
</code></pre>
    <pre class="language-css"><code>
html {
  font-size: 62.5%;
}
body {
  font-size: 1em;
}
@media (min-width: 20em) {
  body {
    font-size: calc(0.89286vw + 0.71429em);
  }
}
@media (min-width: 90em) {
  body {
    font-size: 2em;
  }
}
</code></pre>
  </div>
</div>

もちろんフォントサイズを `em` 値で指定する際も、ベースとなるフォントサイズは `px` 値で指定すればうまく変換されます。

## rem単位の使用

例えば、画面左右の余白を流動的に変化させたい場合、親要素に影響されない `rem` 単位を使うと思われます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
body {
  @include _fluid(padding, 320px _rem(15px), 1024px _rem(40px));
}
</code></pre>
    <pre class="language-css"><code>
body {
  padding: 0.9375rem;
}
@media (min-width: 20em) {
  body {
    padding: calc(3.55114vw + 0.22727rem);
  }
}
@media (min-width: 64em) {
  body {
    padding: 2.5rem;
  }
}
</code></pre>
  </div>
</div>

`px` で指定してしまうと自動的に `em` 値へ変換されてしまうため、`_rem` 関数を使って `px` から `rem` 値へ変換することで対応できます。