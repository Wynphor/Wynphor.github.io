//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '❤️⭐大爷，快来玩呀~⭐❤️|Wynphor の Nest';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🤣性感咲楓，在线胡说~🤣|Wynphor の Nest';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});