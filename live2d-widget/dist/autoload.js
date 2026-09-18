// live2d_path：站点本地资源（已全本地化）
const live2d_path = '/live2d-widget/dist/';
// 如需回退第三方 CDN，可改回：
// const live2d_path = 'https://fastly.jsdelivr.net/npm/live2d-widgets@0/';

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === 'css') {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.href = url;
    }
    else if (type === 'js') {
      tag = document.createElement('script');
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

// 加载 waifu.css live2d.min.js waifu-tips.js
// 如果担心手机上显示效果不佳，可以通过 `if (screen.width >= 768)` 来判断是否加载
Promise.all([
  loadExternalResource(live2d_path + 'waifu.css', 'css'),
  loadExternalResource(live2d_path + 'live2d.min.js', 'js'),
  loadExternalResource(live2d_path + 'waifu-tips.js', 'js')
]).then(() => {
  // 重置可能残留的旧模型 id，避免指向不存在的索引
  localStorage.setItem('modelId', '1');
  localStorage.setItem('modelTexturesId', '0');
  initWidget({
    waifuPath: live2d_path + 'waifu-tips.json',
    // 模型列表与模型文件均使用站点本地路径
    // 结构：/live2d-widget/model_list.json + /live2d-widget/model/<name>/index.json
    cdnPath: '/live2d-widget/',
    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit']
  });
});

console.log(`\n%cLive2D%cWidget%c\n`, 'padding: 8px; background: #cd3e45; font-weight: bold; font-size: large; color: white;', 'padding: 8px; background: #ff5450; font-size: large; color: #eee;', '');
console.log(`
Source: https://github.com/stevenjoezhang/live2d-widget

く__,.ヘヽ.        /  ,ー､ 〉
         ＼ ', !-─‐-i  /  /´
         ／｀ｰ'       L/／｀ヽ､
       /   ／,   /|   ,   ,       ',
     ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
      ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
        !,/7 '0'     ´0iソ|    |
        |.从"    _     ,,,, / |./    |
        ﾚ'| i＞.､,,__  _,.イ /   .i   |
          ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
            | |/i 〈|/   i  ,.ﾍ |  i  |
           .|/ /  ｉ：    ﾍ!    ＼  |
            kヽ>､ﾊ    _,.ﾍ､    /､!
            !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
            ﾚ'ヽL__|___i,___,ンﾚ|ノ
                ﾄ-,/  |___./
                'ｰ'    !_,.:
`);
