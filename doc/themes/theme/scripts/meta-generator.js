/**
 * 自動生成されるmetaタグを削除
 */

hexo.extend.filter.unregister('after_render:html', require('../../../node_modules/hexo/lib/plugins/filter/meta_generator'));