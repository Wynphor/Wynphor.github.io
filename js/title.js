//动态标题
var OriginTitile = document.title;
var OriginHref = document.getElementsByTagName("link")[0].href;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.getElementsByTagName("link")[0].href = "/img/logo.png";
    document.title = '❤️⭐大爷，快来玩呀~⭐❤️ | Wynphor の Nest';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.getElementsByTagName("link")[0].href = "/img/logo.png";
    document.title = '🤣性感咲楓，在线胡说~🤣 | Wynphor の Nest';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.getElementsByTagName("link")[0].href = OriginHref;
      document.title = OriginTitile;
    }, 2000);
  }
});