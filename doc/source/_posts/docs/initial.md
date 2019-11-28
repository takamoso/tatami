---
title: _initial
layout: docs
categories:
  - [セレクタ]
date: 2019-11-28 23:13:54
---

`initial` キーワードに非対応のブラウザでも使えるようにします。

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
@include _initial($properties...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$properties</code></td>
    <td>List...</td>
    <td></td>
    <td>CSSプロパティ名</td>
  </tr>
</table>

## initialキーワード

引数にCSSプロパティ名を指定すると、初期値を設定できます。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
.element {
  @include _initial('max-width');
}
</code></pre>
      <pre class="language-css"><code>
.element {
  max-width: none;
}
</code></pre>
    {% endraw %}
  </div>
</div>

また、複数指定にも対応しています。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
.element {
  @include _initial('max-width', 'width');
}
</code></pre>
      <pre class="language-css"><code>
.element {
  max-width: none;
  width: auto;
}
</code></pre>
    {% endraw %}
  </div>
</div>

## ショートハンド

`margin` や `padding` プロパティなどショートハンド記法の一部の値を変更したい場合には関数として使うこともできます。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
.element {
  margin: 1em _initial('margin') 2em;
}
</code></pre>
      <pre class="language-css"><code>
.element {
  margin: 1em 0 2em;
}
</code></pre>
    {% endraw %}
  </div>
</div>