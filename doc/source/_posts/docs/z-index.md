---
title: _z-index
layout: docs
categories:
  - [レイアウト]
date: 2019-09-19 10:41:23
---

`z-index` 値を自動的に算出します。

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
_z-index($keys...);
</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>$keys</code></td>
    <td>List</td>
    <td></td>
    <td>キーの配列</td>
  </tr>
</table>

## Map型で管理

ライブラリを読み込む前に定義することに注意が必要です。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
// tatamiを読み込む前に定義する
$_z-indexes: (
  header,
  main,
  footer
);

@import '~@takamoso/tatami';

.header {
  z-index: _z-index(header);
}
.main {
  z-index: _z-index(main);
}
.footer {
  z-index: _z-index(footer);
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.header {
  z-index: 1;
}
.main {
  z-index: 2;
}
.footer {
  z-index: 3;
}
</code></pre>
  </div>
</div>

## 逆順で出力

`$_z-index-reverse` 変数に `true` を指定すると、逆順で出力されます。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$_z-indexes: (
  header,
  main,
  footer
);
$_z-index-reverse: true;

@import '~@takamoso/tatami';

.header {
  z-index: _z-index(header);
}
.main {
  z-index: _z-index(main);
}
.footer {
  z-index: _z-index(footer);
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.header {
  z-index: 3;
}
.main {
  z-index: 2;
}
.footer {
  z-index: 1;
}
</code></pre>
  </div>
</div>

## ネストにも対応

ネストする際に、下階層がない場合は空配列 `()` を指定しておきます。

<div class="c demo">
  <div class="code">
    {% raw %}
      <pre class="language-scss"><code>
$_z-indexes: (
  header: (),
  main: (
    aside,
    left,
    right 
  ),
  footer: ()
);

@import '~@takamoso/tatami';

.main .left {
  z-index: _z-index(main, left);
}
.main .right {
  z-index: _z-index(main, right);
}
</code></pre>
    {% endraw %}
    <pre class="language-css"><code>
.main .left {
  z-index: 2;
}
.main .right {
  z-index: 3;
}
</code></pre>
  </div>
</div>