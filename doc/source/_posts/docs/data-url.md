---
title: _data-url
layout: docs
date: 2019-10-02 21:39:48
categories:
  - [ユーティリティ]
---

Base64エンコードされたData URLを作成します。

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
_data-url($data...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$data</code></td>
    <td>List...</td>
    <td></td>
    <td>ルートディレクトリからのファイルパス、またはインラインSVG</td>
  </tr>
</table>

## インラインSVGをBase64エンコード

改行なしのSVGを指定するとBase64エンコードされてCSSの `url` 関数として出力されます。

<div class="c demo">
  <div class="code">
      <pre class="language-scss"><code>
.element {
  background-image: _data-url('<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100"/></svg>');
}
</code></pre>
    <pre class="language-css"><code>
.element {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiLz48L3N2Zz4=);
}
</code></pre>
  </div>
</div>

## ファイル名の指定

プロジェクトルートからのファイルパスを指定すると、ファイルが読み込まれてBase64エンコードされます。

<div class="c demo">
  <div class="code">
      <pre class="language-scss"><code>
.element {
  background-image: _data-url('img/background.svg');
}
</code></pre>
  </div>
</div>