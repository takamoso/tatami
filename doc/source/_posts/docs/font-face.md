---
title: _font-face
layout: docs
categories:
  - [タイポグラフィ]
date: 2019-09-16 10:39:31
---

`@font-face` の指定を簡単にします。

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
@include _font-face($name, $path, $weight, $style, $types, $display, $unicodes);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$name</code></td>
    <td>String</td>
    <td></td>
    <td>フォント名</td>
  </tr>
  <tr>
    <td><code>$path</code></td>
    <td>String</td>
    <td></td>
    <td>拡張子を除いたフォントまでのパス</td>
  </tr>
  <tr>
    <td><code>$weight</code></td>
    <td>Number</td>
    <td><code class="language-scss">null</code></td>
    <td>フォントの太さ</td>
  </tr>
  <tr>
    <td><code>$style</code></td>
    <td>Number</td>
    <td><code class="language-scss">null</code></td>
    <td>フォントのスタイル</td>
  </tr>
  <tr>
    <td><code>$types</code></td>
    <td>List</td>
    <td><code><span class="token string">eot woff woff2</span></code></td>
    <td>フォントの拡張子</td>
  </tr>
  <tr>
    <td><code>$display</code></td>
    <td>String</td>
    <td><code class="language-scss">null</code></td>
    <td><code><span class="token property">font-display</span></code> プロパティの値</td>
  </tr>
  <tr>
    <td><code>$unicodes</code></td>
    <td>List</td>
    <td><code class="language-scss">null</code></td>
    <td><code><span class="token property">unicode-range</span></code> プロパティの値</td>
  </tr>
</table>

## NotoSansJPの指定

`$types` 引数の順序は出力の順番となります。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
@include _font-face(NotoSansJP, '../NotoSansCJKjp-Regular', 400, normal);
</code></pre>
    <pre class="language-css"><code>
@font-face {
  font-family: "NotoSansJP";
  font-style: normal;
  font-weight: 400;
  src: url("../NotoSansCJKjp-Regular.eot");
  src: url("../NotoSansCJKjp-Regular.eot?") format("embedded-opentype"),
       url("../NotoSansCJKjp-Regular.woff") format("woff"),
       url("../NotoSansCJKjp-Regular.woff2") format("woff2");
}
</code></pre>
  </div>
</div>

## font-displayにも対応

`font-display` プロパティの値だけ変更したい場合は、`$display` 引数に `swap` と指定します。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
@include _font-face(NotoSansJP, '../NotoSansCJKjp-Regular', 400, normal, $display: swap);
</code></pre>
    <pre class="language-css"><code>
@font-face {
  font-family: "NotoSansJP";
  font-style: normal;
  font-weight: 400;
  src: url("../NotoSansCJKjp-Regular.eot");
  src: url("../NotoSansCJKjp-Regular.eot?") format("embedded-opentype"),
       url("../NotoSansCJKjp-Regular.woff") format("woff"),
       url("../NotoSansCJKjp-Regular.woff2") format("woff2");
  font-display: swap;
}
</code></pre>
  </div>
</div>