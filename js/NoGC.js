﻿function NoGC(){
	 if (navigator.userAgent.indexOf("Chrome") > -1){
	alert('本系统使用chrome会出bug，请更换浏览器！');
	window.location.href = "http://alan-liang.github.io/"+window.location.href.split("/")[4];
 	}
}