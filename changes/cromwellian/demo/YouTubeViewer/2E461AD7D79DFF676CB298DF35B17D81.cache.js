(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,rs='com.google.gwt.core.client.',ss='com.google.gwt.demos.youtubeviewer.client.',ts='com.google.gwt.lang.',us='com.google.gwt.user.client.',vs='com.google.gwt.user.client.impl.',ws='com.google.gwt.user.client.ui.',xs='com.google.gwt.user.client.ui.impl.',ys='com.google.gwt.widgetideas.client.',zs='java.lang.',As='java.util.';function qs(){}
function dn(a){return this===a;}
function en(){return tn(this);}
function bn(){}
_=bn.prototype={};_.eQ=dn;_.hC=en;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!ic(a,2)){return false;}return B(b,hc(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new bn();_.eQ=C;_.hC=D;_.tI=7;function xb(a){a.a=em(new dm(),'mc336q361N0');}
function yb(a){xb(a);return a;}
function Ab(d){var a,b,c,e,f;d.a=em(new dm(),'k56DbGDBsNk');rk(d.a,'YouTubeViewer');sk(d.a,'443px');qk(d.a,'369px');pf(xj(),d.a);pf(xj(),yi(new Eg(),'<BR><BR>'));a=vg(new tg(),5,3);e=kk(new ck());hk(e,'iuywmPePYKQ');ri(a,0,0,'<B>Video ID:<\/B>');ti(a,0,1,e);ti(a,0,2,Bf(new tf(),'Set',ab(new F(),d,e)));f=kk(new ck());hk(f,'443px');ri(a,1,0,'<B>Width:<\/B>');ti(a,1,1,f);ti(a,1,2,Bf(new tf(),'Set',eb(new db(),d,f)));b=kk(new ck());hk(b,'369px');ri(a,2,0,'<B>Height:<\/B>');ti(a,2,1,b);ti(a,2,2,Bf(new tf(),'Set',ib(new hb(),d,b)));c=kk(new ck());hk(c,'http://www.google.com');ri(a,3,0,'<B>Plugins Page:<\/B>');ti(a,3,1,c);ti(a,3,2,Bf(new tf(),'Set',mb(new lb(),d,c)));ti(a,4,0,Bf(new tf(),'Enable AutoPlay',qb(new pb(),d)));ti(a,4,1,Bf(new tf(),'Enable Related',ub(new tb(),d)));pf(xj(),a);}
function E(){}
_=E.prototype=new bn();_.tI=0;function ab(b,a,c){b.a=a;b.b=c;return b;}
function cb(a){jm(this.a.a,gk(this.b));}
function F(){}
_=F.prototype=new bn();_.C=cb;_.tI=8;function eb(b,a,c){b.a=a;b.b=c;return b;}
function gb(a){sk(this.a.a,gk(this.b));}
function db(){}
_=db.prototype=new bn();_.C=gb;_.tI=9;function ib(b,a,c){b.a=a;b.b=c;return b;}
function kb(a){qk(this.a.a,gk(this.b));}
function hb(){}
_=hb.prototype=new bn();_.C=kb;_.tI=10;function mb(b,a,c){b.a=a;b.b=c;return b;}
function ob(b){var a;a=this.a.a.d;Bl(a,gk(this.b));bm(this.a.a,a);}
function lb(){}
_=lb.prototype=new bn();_.C=ob;_.tI=11;function qb(b,a){b.a=a;return b;}
function sb(a){if(this.a.a.a){im(this.a.a,false);yf(hc(a,3),'Enable AutoPlay');}else{im(this.a.a,true);yf(hc(a,3),'Disable AutoPlay');}}
function pb(){}
_=pb.prototype=new bn();_.C=sb;_.tI=12;function ub(b,a){b.a=a;return b;}
function wb(a){if(this.a.a.c){km(this.a.a,false);yf(hc(a,3),'Enable Related');}else{km(this.a.a,true);yf(hc(a,3),'Disable Related');}}
function tb(){}
_=tb.prototype=new bn();_.C=wb;_.tI=13;function Cb(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function Eb(a,b,c){return a[b]=c;}
function Fb(b,a){return b[a];}
function ac(a){return a.length;}
function cc(e,d,c,b,a){return bc(e,d,c,b,0,ac(b),a);}
function bc(j,i,g,c,e,a,b){var d,f,h;if((f=Fb(c,e))<0){throw new Fm();}h=Cb(new Bb(),f,Fb(i,e),Fb(g,e),j);++e;if(e<a){j=mn(j,1);for(d=0;d<f;++d){Eb(h,d,bc(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Eb(h,d,b);}}return h;}
function dc(a,b,c){if(c!==null&&a.b!=0&& !ic(c,a.b)){throw new mm();}return Eb(a,b,c);}
function Bb(){}
_=Bb.prototype=new bn();_.tI=0;function gc(b,a){return !(!(b&&lc[b][a]));}
function hc(b,a){if(b!=null)gc(b.tI,a)||kc();return b;}
function ic(b,a){return b!=null&&gc(b.tI,a);}
function kc(){throw new pm();}
function jc(a){if(a!==null){throw new pm();}return a;}
function mc(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var lc;function qc(){qc=qs;jd=Fp(new Dp());{ed=new pe();te(ed);}}
function rc(b,a){qc();Ee(ed,b,a);}
function sc(a,b){qc();return re(ed,a,b);}
function tc(){qc();return af(ed,'button');}
function uc(){qc();return af(ed,'div');}
function vc(a){qc();return af(ed,a);}
function wc(){qc();return bf(ed,'text');}
function xc(){qc();return af(ed,'tbody');}
function yc(){qc();return af(ed,'td');}
function zc(){qc();return af(ed,'table');}
function Cc(b,a,d){qc();var c;c=o;{Bc(b,a,d);}}
function Bc(b,a,c){qc();var d;if(a===id){if(Ec(b)==8192){id=null;}}d=Ac;Ac=b;try{c.B(b);}finally{Ac=d;}}
function Dc(b,a){qc();cf(ed,b,a);}
function Ec(a){qc();return df(ed,a);}
function Fc(a){qc();ye(ed,a);}
function ad(a,b){qc();return ef(ed,a,b);}
function bd(a){qc();return ff(ed,a);}
function cd(a){qc();return ze(ed,a);}
function dd(a){qc();return Ae(ed,a);}
function fd(c,a,b){qc();Ce(ed,c,a,b);}
function gd(a){qc();var b,c;c=true;if(jd.b>0){b=jc(dq(jd,jd.b-1));if(!(c=null.hb())){Dc(a,true);Fc(a);}}return c;}
function hd(b,a){qc();gf(ed,b,a);}
function kd(a,b,c){qc();hf(ed,a,b,c);}
function ld(a,b){qc();jf(ed,a,b);}
function md(a,b){qc();kf(ed,a,b);}
function nd(a,b){qc();lf(ed,a,b);}
function od(b,a,c){qc();mf(ed,b,a,c);}
function pd(a,b){qc();ve(ed,a,b);}
var Ac=null,ed=null,id=null,jd;function sd(a){if(ic(a,5)){return sc(this,hc(a,5));}return x(mc(this,qd),a);}
function td(){return y(mc(this,qd));}
function qd(){}
_=qd.prototype=new v();_.eQ=sd;_.hC=td;_.tI=14;function xd(a){return x(mc(this,ud),a);}
function yd(){return y(mc(this,ud));}
function ud(){}
_=ud.prototype=new v();_.eQ=xd;_.hC=yd;_.tI=15;function Ed(){Ed=qs;ae=Fp(new Dp());{Fd();}}
function Fd(){Ed();ee(new Ad());}
var ae;function Cd(){while((Ed(),ae).b>0){jc(dq((Ed(),ae),0)).hb();}}
function Dd(){return null;}
function Ad(){}
_=Ad.prototype=new bn();_.F=Cd;_.ab=Dd;_.tI=16;function de(){de=qs;fe=Fp(new Dp());ne=Fp(new Dp());{je();}}
function ee(a){de();aq(fe,a);}
function ge(){de();var a,b;for(a=lo(fe);eo(a);){b=hc(fo(a),6);b.F();}}
function he(){de();var a,b,c,d;d=null;for(a=lo(fe);eo(a);){b=hc(fo(a),6);c=b.ab();{d=c;}}return d;}
function ie(){de();var a,b;for(a=lo(ne);eo(a);){b=jc(fo(a));null.hb();}}
function je(){de();__gwt_initHandlers(function(){me();},function(){return le();},function(){ke();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ke(){de();var a;a=o;{ge();}}
function le(){de();var a;a=o;{return he();}}
function me(){de();var a;a=o;{ie();}}
var fe,ne;function Ee(c,b,a){b.appendChild(a);}
function af(b,a){return $doc.createElement(a);}
function bf(b,c){var a=$doc.createElement('INPUT');a.type=c;return a;}
function cf(c,b,a){b.cancelBubble=a;}
function df(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function ef(d,a,b){var c=a[b];return c==null?null:String(c);}
function ff(b,a){return a.__eventBits||0;}
function gf(c,b,a){b.removeChild(a);}
function hf(c,a,b,d){a[b]=d;}
function jf(c,a,b){a.__listener=b;}
function kf(c,a,b){if(!b){b='';}a.innerHTML=b;}
function lf(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function mf(c,b,a,d){b.style[a]=d;}
function oe(){}
_=oe.prototype=new bn();_.tI=0;function ye(b,a){a.preventDefault();}
function ze(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function Ae(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function Be(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){Cc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!gd(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)Cc(b,a,c);};$wnd.__captureElem=null;}
function Ce(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function De(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function we(){}
_=we.prototype=new oe();_.tI=0;function re(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function te(a){Be(a);se(a);}
function se(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ve(c,b,a){De(c,b,a);ue(c,b,a);}
function ue(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function pe(){}
_=pe.prototype=new we();_.tI=0;function ok(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pk(b,a){if(b.k!==null){ok(b,b.k,a);}b.k=a;}
function qk(b,a){od(b.k,'height',a);}
function rk(b,a){uk(b.k,a);}
function sk(a,b){od(a.k,'width',b);}
function tk(b,a){pd(b.k,a|bd(b.k));}
function uk(a,b){kd(a,'className',b);}
function mk(){}
_=mk.prototype=new bn();_.tI=0;_.k=null;function fl(a){if(a.i){throw Am(new zm(),"Should only call onAttach when the widget is detached from the browser's document");}a.i=true;ld(a.k,a);a.q();a.D();}
function gl(a){if(!a.i){throw Am(new zm(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.E();}finally{a.r();ld(a.k,null);a.i=false;}}
function hl(a){if(a.j!==null){a.j.cb(a);}else if(a.j!==null){throw Am(new zm(),"This widget's parent does not implement HasWidgets");}}
function il(b,a){if(b.i){ld(b.k,null);}pk(b,a);if(b.i){ld(a,b);}}
function jl(c,b){var a;a=c.j;if(b===null){if(a!==null&&a.i){gl(c);}c.j=null;}else{if(a!==null){throw Am(new zm(),'Cannot set a new parent without first clearing the old parent');}c.j=b;if(b.i){fl(c);}}}
function kl(){}
function ll(){}
function ml(a){}
function nl(){}
function ol(){}
function pl(a){il(this,a);}
function vk(){}
_=vk.prototype=new mk();_.q=kl;_.r=ll;_.B=ml;_.D=nl;_.E=ol;_.db=pl;_.tI=17;_.i=false;_.j=null;function ij(b,a){jl(a,b);}
function kj(b,a){jl(a,null);}
function lj(){var a,b;for(b=this.y();b.x();){a=hc(b.A(),8);fl(a);}}
function mj(){var a,b;for(b=this.y();b.x();){a=hc(b.A(),8);gl(a);}}
function nj(){}
function oj(){}
function hj(){}
_=hj.prototype=new vk();_.q=lj;_.r=mj;_.D=nj;_.E=oj;_.tI=18;function eg(a){a.a=Ck(new wk(),a);}
function fg(a){eg(a);return a;}
function gg(c,a,b){hl(a);Dk(c.a,a);rc(b,a.k);ij(c,a);}
function ig(b,c){var a;if(c.j!==b){return false;}kj(b,c);a=c.k;hd(dd(a),a);dl(b.a,c);return true;}
function jg(){return bl(this.a);}
function kg(a){return ig(this,a);}
function dg(){}
_=dg.prototype=new hj();_.y=jg;_.cb=kg;_.tI=19;function of(a){fg(a);a.db(uc());od(a.k,'position','relative');od(a.k,'overflow','hidden');return a;}
function pf(a,b){gg(a,b,a.k);}
function rf(a){od(a,'left','');od(a,'top','');od(a,'position','');}
function sf(b){var a;a=ig(this,b);if(a){rf(b.k);}return a;}
function nf(){}
_=nf.prototype=new dg();_.cb=sf;_.tI=20;function ng(){ng=qs;sl(),ul;}
function mg(b,a){sl(),ul;pg(b,a);return b;}
function og(b,a){switch(Ec(a)){case 1:if(b.b!==null){bg(b.b,b);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function pg(b,a){il(b,a);tk(b,7041);}
function qg(a){if(this.b===null){this.b=Ff(new Ef());}aq(this.b,a);}
function rg(a){og(this,a);}
function sg(a){pg(this,a);}
function lg(){}
_=lg.prototype=new vk();_.l=qg;_.B=rg;_.db=sg;_.tI=21;_.b=null;function wf(){wf=qs;sl(),ul;}
function vf(b,a){sl(),ul;mg(b,a);return b;}
function xf(b,a){md(b.k,a);}
function yf(b,a){nd(b.k,a);}
function uf(){}
_=uf.prototype=new lg();_.tI=22;function Cf(){Cf=qs;sl(),ul;}
function zf(a){sl(),ul;vf(a,tc());Df(a.k);rk(a,'gwt-Button');return a;}
function Af(b,a){sl(),ul;zf(b);xf(b,a);return b;}
function Bf(c,a,b){sl(),ul;Af(c,a);c.l(b);return c;}
function Df(b){Cf();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function tf(){}
_=tf.prototype=new uf();_.tI=23;function Bn(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function Dn(a){throw yn(new xn(),'add');}
function En(b){var a;a=Bn(this,this.y(),b);return a!==null;}
function An(){}
_=An.prototype=new bn();_.n=Dn;_.p=En;_.tI=0;function ko(b,a){throw Dm(new Cm(),'Index: '+a+', Size: '+b.b);}
function lo(a){return bo(new ao(),a);}
function mo(b,a){throw yn(new xn(),'add');}
function no(a){this.m(this.fb(),a);return true;}
function oo(e){var a,b,c,d,f;if(e===this){return true;}if(!ic(e,13)){return false;}f=hc(e,13);if(this.fb()!=f.fb()){return false;}c=lo(this);d=f.y();while(eo(c)){a=fo(c);b=fo(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function po(){var a,b,c,d;c=1;a=31;b=lo(this);while(eo(b)){d=fo(b);c=31*c+(d===null?0:d.hC());}return c;}
function qo(){return lo(this);}
function ro(a){throw yn(new xn(),'remove');}
function Fn(){}
_=Fn.prototype=new An();_.m=mo;_.n=no;_.eQ=oo;_.hC=po;_.y=qo;_.bb=ro;_.tI=24;function Ep(a){{bq(a);}}
function Fp(a){Ep(a);return a;}
function aq(b,a){rq(b.a,b.b++,a);return true;}
function bq(a){a.a=z();a.b=0;}
function dq(b,a){if(a<0||a>=b.b){ko(b,a);}return nq(b.a,a);}
function eq(b,a){return fq(b,a,0);}
function fq(c,b,a){if(a<0){ko(c,a);}for(;a<c.b;++a){if(mq(b,nq(c.a,a))){return a;}}return (-1);}
function gq(c,a){var b;b=dq(c,a);pq(c.a,a,1);--c.b;return b;}
function hq(d,a,b){var c;c=dq(d,a);rq(d.a,a,b);return c;}
function jq(a,b){if(a<0||a>this.b){ko(this,a);}iq(this.a,a,b);++this.b;}
function kq(a){return aq(this,a);}
function iq(a,b,c){a.splice(b,0,c);}
function lq(a){return eq(this,a)!=(-1);}
function mq(a,b){return a===b||a!==null&&a.eQ(b);}
function oq(a){return dq(this,a);}
function nq(a,b){return a[b];}
function qq(a){return gq(this,a);}
function pq(a,c,b){a.splice(c,b);}
function rq(a,b,c){a[b]=c;}
function sq(){return this.b;}
function Dp(){}
_=Dp.prototype=new Fn();_.m=jq;_.n=kq;_.p=lq;_.v=oq;_.bb=qq;_.fb=sq;_.tI=25;_.a=null;_.b=0;function Ff(a){Fp(a);return a;}
function bg(d,c){var a,b;for(a=lo(d);eo(a);){b=hc(fo(a),7);b.C(c);}}
function Ef(){}
_=Ef.prototype=new Dp();_.tI=26;function di(a){a.h=zh(new uh());}
function ei(a){di(a);a.g=zc();a.c=xc();rc(a.g,a.c);a.db(a.g);tk(a,1);return a;}
function fi(d,c,b){var a;gi(d,c);if(b<0){throw Dm(new Cm(),'Column '+b+' must be non-negative: '+b);}a=d.a;if(a<=b){throw Dm(new Cm(),'Column index: '+b+', Column size: '+d.a);}}
function gi(c,a){var b;b=c.b;if(a>=b||a<0){throw Dm(new Cm(),'Row index: '+a+', Row size: '+b);}}
function hi(e,c,b,a){var d;d=mh(e.d,c,b);li(e,d,a);return d;}
function ji(a){return yc();}
function ki(d,b,a){var c,e;e=th(d.f,d.c,b);c=xg(d);fd(e,c,a);}
function li(d,c,a){var b,e;b=cd(c);e=null;if(b!==null){e=Bh(d.h,b);}if(e!==null){oi(d,e);return true;}else{if(a){md(c,'');}return false;}}
function oi(b,c){var a;if(c.j!==b){return false;}kj(b,c);a=c.k;hd(dd(a),a);Eh(b.h,a);return true;}
function mi(d,b,a){var c,e;fi(d,b,a);c=hi(d,b,a,false);e=th(d.f,d.c,b);hd(e,c);}
function ni(d,c){var a,b;b=d.a;for(a=0;a<b;++a){hi(d,c,a,false);}hd(d.c,th(d.f,d.c,c));}
function pi(b,a){b.d=a;}
function qi(b,a){b.e=a;qh(b.e);}
function ri(e,c,a,b){var d;yg(e,c,a);d=hi(e,c,a,b===null);if(b!==null){md(d,b);}}
function si(b,a){b.f=a;}
function ti(d,b,a,e){var c;yg(d,b,a);if(e!==null){hl(e);c=hi(d,b,a,true);Ch(d.h,e);rc(c,e.k);ij(d,e);}}
function ui(){return Fh(this.h);}
function vi(a){switch(Ec(a)){case 1:{break;}default:}}
function wi(a){return oi(this,a);}
function Fg(){}
_=Fg.prototype=new hj();_.y=ui;_.B=vi;_.cb=wi;_.tI=27;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function ug(a){ei(a);pi(a,jh(new ih(),a));si(a,new rh());qi(a,oh(new nh(),a));return a;}
function vg(c,b,a){ug(c);Cg(c,b,a);return c;}
function xg(b){var a;a=ji(b);md(a,'&nbsp;');return a;}
function yg(c,b,a){zg(c,b);if(a<0){throw Dm(new Cm(),'Cannot access a column with a negative index: '+a);}if(a>=c.a){throw Dm(new Cm(),'Column index: '+a+', Column size: '+c.a);}}
function zg(b,a){if(a<0){throw Dm(new Cm(),'Cannot access a row with a negative index: '+a);}if(a>=b.b){throw Dm(new Cm(),'Row index: '+a+', Row size: '+b.b);}}
function Cg(c,b,a){Ag(c,a);Bg(c,b);}
function Ag(d,a){var b,c;if(d.a==a){return;}if(a<0){throw Dm(new Cm(),'Cannot set number of columns to '+a);}if(d.a>a){for(b=0;b<d.b;b++){for(c=d.a-1;c>=a;c--){mi(d,b,c);}}}else{for(b=0;b<d.b;b++){for(c=d.a;c<a;c++){ki(d,b,c);}}}d.a=a;}
function Bg(b,a){if(b.b==a){return;}if(a<0){throw Dm(new Cm(),'Cannot set number of rows to '+a);}if(b.b<a){Dg(b.c,a-b.b,b.a);b.b=a;}else{while(b.b>a){ni(b,--b.b);}}}
function Dg(g,f,c){var h=$doc.createElement('td');h.innerHTML='&nbsp;';var d=$doc.createElement('tr');for(var b=0;b<c;b++){var a=h.cloneNode(true);d.appendChild(a);}g.appendChild(d);for(var e=1;e<f;e++){g.appendChild(d.cloneNode(true));}}
function tg(){}
_=tg.prototype=new Fg();_.tI=28;_.a=0;_.b=0;function ej(a){a.db(uc());tk(a,131197);rk(a,'gwt-Label');return a;}
function gj(a){switch(Ec(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function dj(){}
_=dj.prototype=new vk();_.B=gj;_.tI=29;function xi(a){ej(a);a.db(uc());tk(a,125);rk(a,'gwt-HTML');return a;}
function yi(b,a){xi(b);Ai(b,a);return b;}
function Ai(b,a){md(b.k,a);}
function Eg(){}
_=Eg.prototype=new dj();_.tI=30;function bh(a){{eh(a);}}
function ch(b,a){b.b=a;bh(b);return b;}
function eh(a){while(++a.a<a.b.b.b){if(dq(a.b.b,a.a)!==null){return;}}}
function fh(a){return a.a<a.b.b.b;}
function gh(){return fh(this);}
function hh(){var a;if(!fh(this)){throw new ms();}a=dq(this.b.b,this.a);eh(this);return a;}
function ah(){}
_=ah.prototype=new bn();_.x=gh;_.A=hh;_.tI=0;_.a=(-1);function jh(b,a){b.a=a;return b;}
function lh(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function mh(c,b,a){return lh(c,c.a.c,b,a);}
function ih(){}
_=ih.prototype=new bn();_.tI=0;function oh(b,a){b.b=a;return b;}
function qh(a){if(a.a===null){a.a=vc('colgroup');fd(a.b.g,a.a,0);rc(a.a,vc('col'));}}
function nh(){}
_=nh.prototype=new bn();_.tI=0;_.a=null;function th(c,a,b){return a.rows[b];}
function rh(){}
_=rh.prototype=new bn();_.tI=0;function yh(a){a.b=Fp(new Dp());}
function zh(a){yh(a);return a;}
function Bh(c,a){var b;b=bi(a);if(b<0){return null;}return hc(dq(c.b,b),8);}
function Ch(b,c){var a;if(b.a===null){a=b.b.b;aq(b.b,c);}else{a=b.a.a;hq(b.b,a,c);b.a=b.a.b;}ci(c.k,a);}
function Dh(c,a,b){ai(a);hq(c.b,b,null);c.a=wh(new vh(),b,c.a);}
function Eh(c,a){var b;b=bi(a);Dh(c,a,b);}
function Fh(a){return ch(new ah(),a);}
function ai(a){a['__widgetID']=null;}
function bi(a){var b=a['__widgetID'];return b==null?-1:b;}
function ci(a,b){a['__widgetID']=b;}
function uh(){}
_=uh.prototype=new bn();_.tI=0;_.a=null;function wh(c,a,b){c.a=a;c.b=b;return c;}
function vh(){}
_=vh.prototype=new bn();_.tI=0;_.a=0;_.b=null;function vj(){vj=qs;Aj=pr(new vq());}
function uj(b,a){vj();of(b);if(a===null){a=wj();}b.db(a);fl(b);return b;}
function xj(){vj();return yj(null);}
function yj(c){vj();var a,b;b=hc(vr(Aj,c),9);if(b!==null){return b;}a=null;if(Aj.c==0){zj();}wr(Aj,c,b=uj(new pj(),a));return b;}
function wj(){vj();return $doc.body;}
function zj(){vj();ee(new qj());}
function pj(){}
_=pj.prototype=new nf();_.tI=31;var Aj;function sj(){var a,b;for(b=ep(sp((vj(),Aj)));lp(b);){a=hc(mp(b),9);if(a.i){gl(a);}}}
function tj(){return null;}
function qj(){}
_=qj.prototype=new bn();_.F=sj;_.ab=tj;_.tI=32;function fk(){fk=qs;sl(),ul;}
function ek(b,a){sl(),ul;mg(b,a);tk(b,1024);return b;}
function gk(a){return ad(a.k,'value');}
function hk(b,a){kd(b.k,'value',a!==null?a:'');}
function ik(a){if(this.a===null){this.a=Ff(new Ef());}aq(this.a,a);}
function jk(a){var b;og(this,a);b=Ec(a);if(b==1){if(this.a!==null){bg(this.a,this);}}else{}}
function dk(){}
_=dk.prototype=new lg();_.l=ik;_.B=jk;_.tI=33;_.a=null;function lk(){lk=qs;sl(),ul;}
function kk(a){sl(),ul;ek(a,wc());rk(a,'gwt-TextBox');return a;}
function ck(){}
_=ck.prototype=new dk();_.tI=34;function Ck(b,a){b.a=cc('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[4],null);return b;}
function Dk(a,b){al(a,b,a.b);}
function Fk(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function al(d,e,a){var b,c;if(a<0||a>d.b){throw new Cm();}if(d.b==d.a.a){c=cc('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[d.a.a*2],null);for(b=0;b<d.a.a;++b){dc(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){dc(d.a,b,d.a[b-1]);}dc(d.a,a,e);}
function bl(a){return yk(new xk(),a);}
function cl(c,b){var a;if(b<0||b>=c.b){throw new Cm();}--c.b;for(a=b;a<c.b;++a){dc(c.a,a,c.a[a+1]);}dc(c.a,c.b,null);}
function dl(b,c){var a;a=Fk(b,c);if(a==(-1)){throw new ms();}cl(b,a);}
function wk(){}
_=wk.prototype=new bn();_.tI=0;_.a=null;_.b=0;function yk(b,a){b.b=a;return b;}
function Ak(){return this.a<this.b.b-1;}
function Bk(){if(this.a>=this.b.b){throw new ms();}return this.b.a[++this.a];}
function xk(){}
_=xk.prototype=new bn();_.x=Ak;_.A=Bk;_.tI=0;_.a=(-1);function sl(){sl=qs;tl=rl(new ql());ul=tl;}
function rl(a){sl();return a;}
function ql(){}
_=ql.prototype=new bn();_.tI=0;var tl,ul;function El(a){a.db(uc());return a;}
function am(e){var a,b,c,d,f;if(e.d===null){return;}b='<object width="100%" height="100%"';b+='>';c=kr(ur(e.d.d));while(dr(c)){a=er(c);d=hc(a.t(),1);f=hc(a.u(),1);b+='<param name="'+d+'" value="'+f+'"/>';}b+='<embed height="100%" width="100%" type="'+e.d.c+'"'+'src="'+e.d.b+'"';if(e.d.a!==null){b+=' pluginspage="'+e.d.a+'"';}b+='><\/embed>';b+='<\/object>';md(e.k,b);}
function bm(b,a){cm(b,a,true);}
function cm(c,a,b){c.d=a;if(b){am(c);}}
function vl(){}
_=vl.prototype=new vk();_.tI=35;_.d=null;function xl(a){a.d=pr(new vq());}
function yl(c,d,a,b){xl(c);c.b=a;Dl(c,d);return c;}
function Al(b,a,c){wr(b.d,a,c);}
function Bl(b,a){b.a=a;}
function Cl(b,a){b.b=a;}
function Dl(a,b){switch(b){case 0:a.c='application/x-shockwave-flash';break;default:throw xm(new wm(),'type invalid: Unrecognized type');}}
function wl(){}
_=wl.prototype=new bn();_.tI=0;_.a=null;_.b=null;_.c=null;function em(b,a){fm(b,a,false);return b;}
function fm(c,b,a){El(c);c.a=a;cm(c,yl(new wl(),0,null,c),false);jm(c,b);return c;}
function hm(a){var b;b='http://www.youtube.com/v/'+a.b;if(a.a){b+='&autoplay=1';}if(a.c){b+='&rel=1';}else{b+='&rel=0';}return b;}
function im(b,a){b.a=a;}
function jm(c,b){var a,d;c.b=b;d=hm(c);a=c.d;Cl(a,d);Al(a,'movie',d);am(c);}
function km(b,a){b.c=a;}
function dm(){}
_=dm.prototype=new vl();_.tI=36;_.a=false;_.b=null;_.c=false;function vn(b,a){a;return b;}
function un(){}
_=un.prototype=new bn();_.tI=3;function um(b,a){vn(b,a);return b;}
function tm(){}
_=tm.prototype=new un();_.tI=4;function gn(b,a){um(b,a);return b;}
function fn(){}
_=fn.prototype=new tm();_.tI=5;function mm(){}
_=mm.prototype=new fn();_.tI=37;function pm(){}
_=pm.prototype=new fn();_.tI=38;function xm(b,a){gn(b,a);return b;}
function wm(){}
_=wm.prototype=new fn();_.tI=39;function Am(b,a){gn(b,a);return b;}
function zm(){}
_=zm.prototype=new fn();_.tI=40;function Dm(b,a){gn(b,a);return b;}
function Cm(){}
_=Cm.prototype=new fn();_.tI=41;function Fm(){}
_=Fm.prototype=new fn();_.tI=42;function ln(g){var a=pn;if(!a){a=pn={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function mn(b,a){return b.substr(a,b.length-a);}
function nn(a,b){return String(a)==b;}
function on(a){if(!ic(a,1))return false;return nn(this,a);}
function qn(){return ln(this);}
_=String.prototype;_.eQ=on;_.hC=qn;_.tI=2;var pn=null;function tn(a){return s(a);}
function yn(b,a){gn(b,a);return b;}
function xn(){}
_=xn.prototype=new fn();_.tI=43;function bo(b,a){b.c=a;return b;}
function eo(a){return a.a<a.c.fb();}
function fo(a){if(!eo(a)){throw new ms();}return a.c.v(a.b=a.a++);}
function go(a){if(a.b<0){throw new zm();}a.c.bb(a.b);a.a=a.b;a.b=(-1);}
function ho(){return eo(this);}
function io(){return fo(this);}
function ao(){}
_=ao.prototype=new bn();_.x=ho;_.A=io;_.tI=0;_.a=0;_.b=(-1);function qp(f,d,e){var a,b,c;for(b=kr(f.s());dr(b);){a=er(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){fr(b);}return a;}}return null;}
function rp(b){var a;a=b.s();return uo(new to(),b,a);}
function sp(b){var a;a=ur(b);return cp(new bp(),b,a);}
function tp(a){return qp(this,a,false)!==null;}
function up(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ic(d,14)){return false;}f=hc(d,14);c=rp(this);e=f.z();if(!Ap(c,e)){return false;}for(a=wo(c);Do(a);){b=Eo(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function vp(b){var a;a=qp(this,b,false);return a===null?null:a.u();}
function wp(){var a,b,c;b=0;for(c=kr(this.s());dr(c);){a=er(c);b+=a.hC();}return b;}
function xp(){return rp(this);}
function so(){}
_=so.prototype=new bn();_.o=tp;_.eQ=up;_.w=vp;_.hC=wp;_.z=xp;_.tI=44;function Ap(e,b){var a,c,d;if(b===e){return true;}if(!ic(b,15)){return false;}c=hc(b,15);if(c.fb()!=e.fb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.p(d)){return false;}}return true;}
function Bp(a){return Ap(this,a);}
function Cp(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function yp(){}
_=yp.prototype=new An();_.eQ=Bp;_.hC=Cp;_.tI=45;function uo(b,a,c){b.a=a;b.b=c;return b;}
function wo(b){var a;a=kr(b.b);return Bo(new Ao(),b,a);}
function xo(a){return this.a.o(a);}
function yo(){return wo(this);}
function zo(){return this.b.a.c;}
function to(){}
_=to.prototype=new yp();_.p=xo;_.y=yo;_.fb=zo;_.tI=46;function Bo(b,a,c){b.a=c;return b;}
function Do(a){return a.a.x();}
function Eo(b){var a;a=b.a.A();return a.t();}
function Fo(){return Do(this);}
function ap(){return Eo(this);}
function Ao(){}
_=Ao.prototype=new bn();_.x=Fo;_.A=ap;_.tI=0;function cp(b,a,c){b.a=a;b.b=c;return b;}
function ep(b){var a;a=kr(b.b);return jp(new ip(),b,a);}
function fp(a){return tr(this.a,a);}
function gp(){return ep(this);}
function hp(){return this.b.a.c;}
function bp(){}
_=bp.prototype=new An();_.p=fp;_.y=gp;_.fb=hp;_.tI=0;function jp(b,a,c){b.a=c;return b;}
function lp(a){return a.a.x();}
function mp(a){var b;b=a.a.A().u();return b;}
function np(){return lp(this);}
function op(){return mp(this);}
function ip(){}
_=ip.prototype=new bn();_.x=np;_.A=op;_.tI=0;function rr(){rr=qs;yr=Er();}
function or(a){{qr(a);}}
function pr(a){rr();or(a);return a;}
function qr(a){a.a=z();a.d=A();a.b=mc(yr,v);a.c=0;}
function sr(b,a){if(ic(a,1)){return cs(b.d,hc(a,1))!==yr;}else if(a===null){return b.b!==yr;}else{return bs(b.a,a,a.hC())!==yr;}}
function tr(a,b){if(a.b!==yr&&as(a.b,b)){return true;}else if(Dr(a.d,b)){return true;}else if(Br(a.a,b)){return true;}return false;}
function ur(a){return ir(new Fq(),a);}
function vr(c,a){var b;if(ic(a,1)){b=cs(c.d,hc(a,1));}else if(a===null){b=c.b;}else{b=bs(c.a,a,a.hC());}return b===yr?null:b;}
function wr(c,a,d){var b;if(a!==null){b=fs(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=es(c.a,a,d,ln(a));}if(b===yr){++c.c;return null;}else{return b;}}
function xr(c,a){var b;if(ic(a,1)){b=hs(c.d,hc(a,1));}else if(a===null){b=c.b;c.b=mc(yr,v);}else{b=gs(c.a,a,a.hC());}if(b===yr){return null;}else{--c.c;return b;}}
function zr(e,c){rr();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f]);}}}}
function Ar(d,a){rr();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=zq(c.substring(1),e);a.n(b);}}}
function Br(f,h){rr();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(as(h,d)){return true;}}}}return false;}
function Cr(a){return sr(this,a);}
function Dr(c,d){rr();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(as(d,a)){return true;}}}return false;}
function Er(){rr();}
function Fr(){return ur(this);}
function as(a,b){rr();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function ds(a){return vr(this,a);}
function bs(f,h,e){rr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(as(h,d)){return c.u();}}}}
function cs(b,a){rr();return b[':'+a];}
function es(f,h,j,e){rr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(as(h,d)){var i=c.u();c.eb(j);return i;}}}else{a=f[e]=[];}var c=zq(h,j);a.push(c);}
function fs(c,a,d){rr();a=':'+a;var b=c[a];c[a]=d;return b;}
function gs(f,h,e){rr();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(as(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function hs(c,a){rr();a=':'+a;var b=c[a];delete c[a];return b;}
function vq(){}
_=vq.prototype=new so();_.o=Cr;_.s=Fr;_.w=ds;_.tI=47;_.a=null;_.b=null;_.c=0;_.d=null;var yr;function xq(b,a,c){b.a=a;b.b=c;return b;}
function zq(a,b){return xq(new wq(),a,b);}
function Aq(b){var a;if(ic(b,16)){a=hc(b,16);if(as(this.a,a.t())&&as(this.b,a.u())){return true;}}return false;}
function Bq(){return this.a;}
function Cq(){return this.b;}
function Dq(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Eq(a){var b;b=this.b;this.b=a;return b;}
function wq(){}
_=wq.prototype=new bn();_.eQ=Aq;_.t=Bq;_.u=Cq;_.hC=Dq;_.eb=Eq;_.tI=48;_.a=null;_.b=null;function ir(b,a){b.a=a;return b;}
function kr(a){return br(new ar(),a.a);}
function lr(c){var a,b,d;if(ic(c,16)){a=hc(c,16);b=a.t();if(sr(this.a,b)){d=vr(this.a,b);return as(a.u(),d);}}return false;}
function mr(){return kr(this);}
function nr(){return this.a.c;}
function Fq(){}
_=Fq.prototype=new yp();_.p=lr;_.y=mr;_.fb=nr;_.tI=49;function br(c,b){var a;c.c=b;a=Fp(new Dp());if(c.c.b!==(rr(),yr)){aq(a,xq(new wq(),null,c.c.b));}Ar(c.c.d,a);zr(c.c.a,a);c.a=lo(a);return c;}
function dr(a){return eo(a.a);}
function er(a){return a.b=hc(fo(a.a),16);}
function fr(a){if(a.b===null){throw Am(new zm(),'Must call next() before remove().');}else{go(a.a);xr(a.c,a.b.t());a.b=null;}}
function gr(){return dr(this);}
function hr(){return er(this);}
function ar(){}
_=ar.prototype=new bn();_.x=gr;_.A=hr;_.tI=0;_.a=null;_.b=null;function ms(){}
_=ms.prototype=new fn();_.tI=50;function lm(){Ab(yb(new E()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lm();}catch(a){b(d);}else{lm();}}
var lc=[{},{},{1:1},{4:1},{4:1},{4:1},{4:1},{2:1},{7:1},{7:1},{7:1},{7:1},{7:1},{7:1},{2:1,5:1},{2:1},{6:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{3:1,8:1,10:1,11:1,12:1},{13:1},{13:1},{13:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,9:1,10:1,11:1,12:1},{6:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{8:1,10:1,11:1,12:1},{4:1},{4:1},{4:1},{4:1},{4:1},{4:1},{4:1},{14:1},{15:1},{15:1},{14:1},{16:1},{15:1},{4:1}];if (com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo) {  var __gwt_initHandlers = com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo.__gwt_initHandlers;  com_google_gwt_demos_youtubeviewer_YouTubeViewerDemo.onScriptLoad(gwtOnLoad);}})();