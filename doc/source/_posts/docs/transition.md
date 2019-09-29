---
title: _transition
layout: docs
categories:
  - [アニメーション]
date: 2019-09-22 09:35:49
---

`transition` プロパティを容易に指定できるようにします。

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
@include _transition($transitions...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$transitions...</code></td>
    <td>List</td>
    <td><code class="language-scss">.3s</code></td>
    <td><code><span class="token property">transition</span></code> プロパティの値</td>
  </tr>
</table>

## 初期値

引数を指定しない場合は、`$_transition` 変数に指定された初期値が使われます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _transition;
}
</code></pre>
    <pre class="language-css"><code>
.element {
  transition: 0.3s;
}
@media screen and (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
</code></pre>
  </div>
</div>

## 複数の値

カンマ区切りでプロパティごとに指定できます。

<div class="c demo">
  <div class="code">
    <pre class="language-scss"><code>
.element {
  @include _transition(color .3s, background-color .2s linear);
}
</code></pre>
    <pre class="language-css"><code>
.element {
  transition: color 0.3s, background-color 0.2s linear;
}
@media screen and (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
</code></pre>
  </div>
</div>