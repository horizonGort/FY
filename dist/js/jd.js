"use strict";var bscroll=document.getElementById("bscroll"),bleft=document.getElementById("bleft"),bsexit=document.getElementById("bsexit"),headerNone=document.getElementById("header-none"),mainbody=document.getElementById("mainbody"),headerA=document.getElementById("header-a"),searchM=document.getElementById("search-m"),searchinM=document.getElementById("search-inm"),searchKuang=document.getElementById("search-kuang"),searchCart=document.getElementById("search-cart"),logo=document.getElementById("logo"),bodyMenu=document.getElementById("body-menu"),liArr=bodyMenu.getElementsByTagName("li"),guding=document.getElementById("guding");function $id(e){return document.getElementById(e)}function showtime(){var e=new Date,t=document.getElementsByClassName("timmer__unit"),n=document.getElementsByClassName("coun-desc"),o=jiaLing(2*Math.floor(e.getHours()/2));n[0].innerText=o+":00";o=jiaLing(e.getHours()-o+1);t[0].innerText=o;o=jiaLing(59-e.getMinutes());t[1].innerText=o;e=jiaLing(59-e.getSeconds());t[2].innerText=e}function jiaLing(e){return e<10?"0"+e:e}bleft.onmouseenter=function(){bscroll.style.width="790px",bscroll.onmousemove=function(){bscroll.style.width="790px"}},bleft.onmouseleave=function(){bscroll.style.width="0px"},bscroll.onmouseleave=function(){bscroll.style.width="0px"},bsexit.onclick=function(){bscroll.style.width="0px"},headerNone.onclick=function(){headerA.style.display="none"},window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=headerA.offsetHeight;653+t<e?(searchM.style.position="fixed",searchM.style.top="0",searchM.style.left="0",searchM.style.borderBottom="3px solid red",searchM.style.zIndex="15",searchKuang.style.top="9px",searchCart.style.top="9px",logo.style.backgroundPosition="0px 35px",logo.style.height="40px",guding.style.top=e-600-t+"px"):e<653+t&&(searchM.style.position="relative",searchM.style.borderBottom="none",searchM.style.zIndex="1",searchKuang.style.top="25px",searchCart.style.top="25px",logo.style.backgroundPosition="0px 0px",logo.style.height="120px",guding.style.top="0px")},setInterval(function(){showtime()},1e3);var ti=setInterval(autoPlay,15),num=0;function autoPlay(){$id("u").style.left=num+"px",--num<=-3920&&(num=0)}$id("seckill-list").onmouseover=function(){clearInterval(ti)},$id("seckill-list").onmouseout=function(){ti=setInterval(autoPlay,15)};