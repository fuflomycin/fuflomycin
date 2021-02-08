(function(w,d,$){if(!$){conole.log('jquery not initialized');return!1}
if(w.tilda_stat_callbacks&&w.tilda_stat_callbacks.length>0){}
var tildaParams={};function generateUniqID(){var d=new Date();var uniq='';var random=Math.floor(Math.random()*(999999-100000))+100000;uniq=''+d.getTime()+'.'+random;return uniq}
var userid='simple';var sessionid='simple';var isSendScrollEvent={p10:0,p25:0,p50:0,p75:0,p90:0};var dStartReadTime=new Date();var isWindowActive=!0;w.onVisibilityWindowChange=function(callback){var visible=!0;if(!callback){throw new Error('no callback given')}
function focused(){if(!visible){callback(visible=!0)}}
function unfocused(){if(visible){callback(visible=!1)}}
try{if('hidden' in document){document.addEventListener('visibilitychange',function(){(document.hidden?unfocused:focused)()})}
if('mozHidden' in document){document.addEventListener('mozvisibilitychange',function(){(document.mozHidden?unfocused:focused)()})}
if('webkitHidden' in document){document.addEventListener('webkitvisibilitychange',function(){(document.webkitHidden?unfocused:focused)()})}
if('msHidden' in document){document.addEventListener('msvisibilitychange',function(){(document.msHidden?unfocused:focused)()})}
if('onfocusin' in document){document.onfocusin=focused;document.onfocusout=unfocused}
window.onpageshow=window.onfocus=focused;window.onpagehide=window.onblur=unfocused}catch(e){}};w.tildastat_scrollEvent=function(){var top=$(document).scrollTop();var wh=$(window).height();var dh=$(document).height();var hh=0,fh=0;var p;var d=new Date();isWindowActive=!0;if($('#t-header').length>0){hh=$('#t-header').height()}
if($('#t-footer').length>0){fh=$('#t-footer').height()}
p=parseInt((top-hh+wh)*100/(dh-hh-fh));if(p<10){return}
if(p>=10&&!isSendScrollEvent.p10){tildaParams.page='/tilda/scroll/10/';w.tildastat('pageview');isSendScrollEvent.p10=!0}else{if(p>=24){if(isSendScrollEvent.p25==0){tildaParams.page='/tilda/scroll/25/';w.tildastat('pageview');isSendScrollEvent.p25=w.setTimeout(function(){w.clearTimeout(isSendScrollEvent.p25);isSendScrollEvent.p25=-1},5000);return}else{if(p<51&&isSendScrollEvent.p25==-1){isSendScrollEvent.p25=0;return}}}
if(p>=49){if(isSendScrollEvent.p50==0){tildaParams.page='/tilda/scroll/50/';w.tildastat('pageview');isSendScrollEvent.p50=w.setTimeout(function(){w.clearTimeout(isSendScrollEvent.p50);isSendScrollEvent.p50=-1},5000);return}else{if(p<76&&isSendScrollEvent.p50==-1){isSendScrollEvent.p50=0;return}}}
if(p>=74){if(isSendScrollEvent.p75==0){tildaParams.page='/tilda/scroll/75/';w.tildastat('pageview');isSendScrollEvent.p75=w.setTimeout(function(){w.clearTimeout(isSendScrollEvent.p75);isSendScrollEvent.p75=-1},5000);return}else{if(p<91&&isSendScrollEvent.p75==-1){isSendScrollEvent.p75=0;return}}}
if(p>=89){if(isSendScrollEvent.p90==0){tildaParams.page='/tilda/scroll/90/';w.tildastat('pageview');isSendScrollEvent.p90=w.setTimeout(function(){w.clearTimeout(isSendScrollEvent.p90);isSendScrollEvent.p90=-1},5000);return}else{if(isSendScrollEvent.p90==-1){isSendScrollEvent.p90=0;return}}}}};w.tildastat=function(event,params){var staturl='https:'+'//stat'+'.tildacdn.'+'com/event/';if(!event){return!1}
if(params){$.extend(tildaParams,params)}
switch(event){case 'create':var tmp=w.location.hostname;if(tmp.substring(0,4)=='www.'){tmp=tmp.substring(4)}
try{if(tmp.lastIndexOf('.')==tmp.length-1){tmp=tmp.slice(0,-1)}}catch(e){}
tildaParams.page=tmp+w.location.pathname;tildaParams.referrer=d.referrer||'';tildaParams.userid=userid;tildaParams.sessionid=sessionid;tildaParams.user_agent=w.navigator.userAgent;tildaParams.user_language=w.navigator.userLanguage||w.navigator.language;tildaParams.projectid=$('#allrecords').data('tilda-project-id')||'0';tildaParams.pageid=$('#allrecords').data('tilda-page-id')||'0';tildaParams.pagealias=$('#allrecords').data('tilda-page-alias')||'';tildaParams.formskey=$('#allrecords').data('tilda-formskey')||'';tildaParams.params={};if(typeof w.tildastatscroll=='undefined'||(w.tildastatscroll!='yes'&&w.tildastatscroll!='no')){w.tildastatscroll=$('#allrecords').data('tilda-statscroll')=='yes'?'yes':'no'}
try{tmp=decodeURIComponent(w.location.search)}catch(e){tmp=w.location.search}
if(tmp>'?'){tildaParams.pagequery=(tmp).substring(1).toLowerCase();if(tildaParams.pagequery.indexOf('utm_')!=-1){var key,arPair,arParams=tildaParams.pagequery.split('&');for(key in arParams){if(arParams[key]){arPair=(arParams[key]).split('=');if(arPair.length>1){if(arPair[0]=='utm_referrer'&&tildaParams.referrer==''){tildaParams.referrer=arPair[1]}else{tildaParams.params[arPair[0]]=arPair[1]}}else{tildaParams.params[arPair[0]]=''}}}}}
var isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile=!0}
tildaParams.ismobile=isMobile;if($('#tildastatscript').length==1){tildaParams.tildastatcode=$('#tildastatscript').get(0).key}
if(w.tildastatscroll=='yes'){try{w.onVisibilityWindowChange(function(visible){isWindowActive=(visible?!0:!1)});$('body').on('mousewheel,mousemove',t_throttle(function(){isWindowActive=!0},1000));$('body').on('keypress',t_throttle(function(){isWindowActive=!0},1000));$('body').on('click',t_throttle(function(){isWindowActive=!0},1000))}catch(e){}}
break;case 'pageview':if(!tildaParams.page){console.log('TildaStat: page empty');var tmp=w.location.hostname;if(tmp.substring(0,4)=='www.'){tmp=tmp.substring(4)}
try{if(tmp.lastIndexOf('.')==tmp.length-1){tmp=tmp.slice(0,-1)}}catch(e){}
tildaParams.page=tmp+w.location.pathname;if(w.location.hash&&w.location.hash.indexOf('#!')==0){tildaParams.page+=w.location.hash}}
if(window.location.protocol!='http:'&&window.location.protocol!='https:'){console.log('TildaStat: cannot work on local page');return!1}
if(tildaParams.page.substring(0,1)=='/'){tildaParams.page=w.location.hostname+tildaParams.page}
if(tildaParams.user_agent>''&&tildaParams.user_agent.indexOf('bot')!=-1){break}
$.ajax({type:"POST",url:staturl,data:tildaParams,dataType:"text",xhrFields:{withCredentials:!1},success:function(text){},fail:function(data){console.log('TildaStat: fail pageview');console.log(data)},timeout:3*1000});if(tildaParams.page&&tildaParams.page.indexOf('tilda/scroll')==-1&&tildaParams.page.indexOf('tilda/readtime')==-1&&tildaParams.page.indexOf('tilda/click')==-1){tildaParams.referrer=tildaParams.page}
tildaParams.page='';w.tildastatload=!0;break;case 'readtime':try{if(w.tildastatscroll=='yes'){if(isWindowActive){tildaParams.page='/tilda/readtime/';isWindowActive=!1;w.tildastat('pageview')}
w.setTimeout(function(){w.tildastat('readtime')},15000)}}catch(e){}
break;case 'scroll':try{if(w.tildastatscroll=='yes'){$(w).on('scroll',t_throttle(w.tildastat_scrollEvent,500))}}catch(e){}
break;default:break}};w.tildastat('create');w.setTimeout(function(){w.tildastat('pageview');w.tildastat('readtime');w.tildastat('scroll')},2000)})(window,document,jQuery)