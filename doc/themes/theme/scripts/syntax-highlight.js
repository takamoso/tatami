/**
 * Prism.jsによるシンタックスハイライト
 */

const prism = require('prismjs')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-bash')

hexo.extend.filter.register('after_post_render', data => {
  // シンタックスハイライト
  data.content = data.content.replace(/<pre class="language-(.*?)"(.*?)><code>([\s\S]*?)<\/code><\/pre>/g, (match, language, attribute, code) => `<pre class="language-${language}"${attribute}><code>${prism.highlight(code, prism.languages[language])}</code></pre>`)
  data.content = data.content.replace(/<code class="language-(.*?)">([\s\S]*?)<\/code>/g, (match, language, code) => `<code class="language-${language}">${prism.highlight(code, prism.languages[language], language)}</code>`)
  // preタグ内の最初の改行を削除
  data.content = data.content.replace(/(<pre.*?><code.*?>)[\r\n]*/g, '$1')

  return data
})