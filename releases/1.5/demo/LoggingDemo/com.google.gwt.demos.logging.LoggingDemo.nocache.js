var eb='',rb='" for "gwt:onLoadErrorFn"',ob='" for "gwt:onPropertyErrorFn"',mc='"><\/script>',cc='.cache.html',oc='/',Db='698993A8F0A87CCA2A2FF5E2CA96A97F',Eb='7CE07B9352641168EE0418BD806C6B93',Fb='8F49CEAC011DCEBF9F6C73B436F54705',jc='<link rel="stylesheet" href="',gc='<script id="',lc="<script>com_google_gwt_demos_logging_LoggingDemo.onInjectionDone('com.google.gwt.demos.logging.LoggingDemo')<\/script>",lb='=',nb='Bad handler "',dc='DOMContentLoaded',ac='ED21A4DDCCB476260ED98ACFE7B1174F',bc='F748733B6DEA58CD92A0AAAF7B924CB4',ic='LoggingDemo.css',kc='LoggingDemo.css">',nc='SCRIPT',Bb='__gwt_marker_com.google.gwt.demos.logging.LoggingDemo',pc='base',gb='clear.cache.gif',qb='com.google.gwt.demos.logging.LoggingDemo',kb='content',yb='gecko',zb='gecko1_8',fb='gwt.hybrid',pb='gwt:onLoadErrorFn',mb='gwt:onPropertyErrorFn',jb='gwt:property',Cb='hosted.html?com_google_gwt_demos_logging_LoggingDemo',xb='ie6',ec='iframe',qc='img',fc="javascript:''",hb='meta',wb='msie',ib='name',tb='opera',hc='position:absolute;width:0;height:0;border:none',vb='safari',Ab='unknown',sb='user.agent',ub='webkit';function com_google_gwt_demos_logging_LoggingDemo(){var l=window,k=document,t=l.external,ab,w,q,p=eb,z={},db=[],F=[],o=[],C,E;if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={};}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={};}function v(){try{return t&&(t.gwtOnLoad&&l.location.search.indexOf(fb)==-1);}catch(a){return false;}}
function y(){if(ab&&w){var c=k.getElementById(qb);var b=c.contentWindow;b.__gwt_initHandlers=com_google_gwt_demos_logging_LoggingDemo.__gwt_initHandlers;if(v()){b.__gwt_getProperty=function(a){return r(a);};}com_google_gwt_demos_logging_LoggingDemo=null;b.gwtOnLoad(C,qb,p);}}
function s(){var j,h=Bb,i;k.write(gc+h+mc);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=nc){j=j.previousSibling;}function d(b){var a=b.lastIndexOf(oc);return a>=0?b.substring(0,a+1):eb;}
;if(j&&j.src){p=d(j.src);}if(p==eb){var c=k.getElementsByTagName(pc);if(c.length>0){p=c[c.length-1].href;}else{var g=k.location;var e=g.href;p=d(e.substr(0,e.length-g.hash.length));}}else if(p.match(/^\w+:\/\//)){}else{var f=k.createElement(qc);f.src=p+gb;p=d(f.src);}if(i){i.parentNode.removeChild(i);}}
function D(){var f=document.getElementsByTagName(hb);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(ib),b;if(h){if(h==jb){b=e.getAttribute(kb);if(b){var i,c=b.indexOf(lb);if(c>=0){h=b.substring(0,c);i=b.substring(c+1);}else{h=b;i=eb;}z[h]=i;}}else if(h==mb){b=e.getAttribute(kb);if(b){try{E=eval(b);}catch(a){alert(nb+b+ob);}}}else if(h==pb){b=e.getAttribute(kb);if(b){try{C=eval(b);}catch(a){alert(nb+b+rb);}}}}}}
function n(a,b){return b in db[a];}
function m(a){var b=z[a];return b==null?null:b;}
function cb(d,e){var a=o;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[]);}a[d[c]]=e;}
function r(d){var e=F[d](),b=db[d];if(e in b){return e;}var a=[];for(var c in b){a[b[c]]=c;}if(E){E(d,a,e);}throw null;}
F[sb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2]);};if(d.indexOf(tb)!=-1){return tb;}else if(d.indexOf(ub)!=-1){return vb;}else if(d.indexOf(wb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return xb;}}}else if(d.indexOf(yb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return zb;}return yb;}return Ab;};db[sb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};com_google_gwt_demos_logging_LoggingDemo.onInjectionDone=function(){ab=true;y();};com_google_gwt_demos_logging_LoggingDemo.onScriptLoad=function(){w=true;y();};s();D();var bb;if(v()){bb=Cb;}else{try{cb([zb],Db);cb([yb],Eb);cb([xb],Fb);cb([tb],ac);cb([vb],bc);bb=o[r(sb)];}catch(a){return;}bb+=cc;}var B;function A(){if(!q){q=true;y();if(k.removeEventListener){k.removeEventListener(dc,A,false);}if(B){clearInterval(B);}}}
var u;function x(){if(!u){u=true;var a=k.createElement(ec);a.src=fc;a.id=qb;a.style.cssText=hc;k.body.appendChild(a);a.src=p+bb;}}
if(k.addEventListener){k.addEventListener(dc,function(){x();A();},false);}var B=setInterval(function(){if(/loaded|complete/.test(k.readyState)){x();A();}},50);if(!__gwt_stylesLoaded[ic]){__gwt_stylesLoaded[ic]=true;document.write(jc+p+kc);}k.write(lc);}
com_google_gwt_demos_logging_LoggingDemo.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i();}finally{g&&g(a);}};d.onbeforeunload=function(a){var c,b;try{c=e();}finally{b=f&&f(a);}if(c!=null){return c;}if(b!=null){return b;}};d.onunload=function(a){try{j();}finally{h&&h(a);}};};com_google_gwt_demos_logging_LoggingDemo();