"use strict";function $id(t){return document.getElementById(t)}function rand(t,e){return t+parseInt(Math.random()*(e-t+1))}function color(){for(var t="#",e=0;e<6;e++)t+=rand(0,15).toString(16);return t}function has(t,e){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}function norepeat(t){for(var e=[],n=0;n<t.length;n++)has(e,t[n])||e.push(t[n]);return e}function formatDate(t){var e=new Date;t&&e.setTime(t);var n=e.getFullYear(),r=(r=e.getMonth()+1)<10?"0"+r:r,o=(o=e.getDate())<10?"0"+o:o,l=(l=e.getHours())<10?"0"+l:l,t=(t=e.getMinutes())<10?"0"+t:t,e=e.getSeconds();return n+"-"+r+"-"+o+" "+l+":"+t+":"+(e=e<10?"0"+e:e)}function getScroll(){return window.pageYOffset?{top:window.pageYOffset,left:window.pageXOffset}:document.documentElement.scrollLeft?{top:document.documentElement.scrollTop,left:document.documentElement.scrollLeft}:{top:document.body.scrollTop,left:document.body.scrollLeft}}function getStyle(t,e){return(window.getComputedStyle?window.getComputedStyle(t,null):t.currentStyle)[e]}function move(e,n,r,o){clearInterval(e.timer),e.timer=setInterval(function(){var t=(t="opacity"==n?parseInt(100*getStyle(e,n)):parseInt(getStyle(e,n)))+(t<r?Math.ceil((r-t)/10):Math.floor((r-t)/10));t==r?("opacity"==n?(e.style.opacity=r/100,e.style.filter="alpha(opacity="+r+")"):e.style[n]=r+"px",clearInterval(e.timer),o&&o()):"opacity"==n?(e.style.opacity=t/100,e.style.filter="alpha(opacity="+t+")"):e.style[n]=t+"px"},50)}function animate(l,a,c){clearInterval(l.timer),l.timer=setInterval(function(){var t,e,n=!0;for(t in a){e="opacity"==t?parseInt(100*getStyle(l,t)):parseInt(getStyle(l,t));var r=parseInt(a[t]),o=e<r?Math.ceil((r-e)/10):Math.floor((r-e)/10);o="zIndex"==t?r:e+o,"opacity"==t?(l.style.opacity=o/100,l.style.filter="alpha(opacity="+o+")"):"zIndex"==t?l.style.zIndex=o:l.style[t]=o+"px",o!=r&&(n=!1)}n&&(clearInterval(l.timer),c&&c())},1e3/60)}function distance(t){}