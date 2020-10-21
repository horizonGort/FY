var bscroll = document.getElementById('bscroll');
var bleft = document.getElementById('bleft');
var bsexit = document.getElementById('bsexit');
var headerNone = document.getElementById('header-none');
var mainbody = document.getElementById('mainbody');
var headerA = document.getElementById('header-a');
var searchM = document.getElementById('search-m');
var searchinM = document.getElementById('search-inm');
var searchKuang= document.getElementById('search-kuang');
var searchCart = document.getElementById('search-cart');
var logo = document.getElementById('logo');
var bodyMenu =document.getElementById('body-menu');
var liArr = bodyMenu.getElementsByTagName('li');
var guding = document.getElementById('guding');
var backTop = document.getElementsByClassName('backtop');
function $id(id){
    return document.getElementById(id)
}

bleft.onmouseenter = function(){
    bscroll.style.width = '790px';
    bscroll.onmousemove = function(){
        bscroll.style.width = '790px';
    }
}
bleft.onmouseleave = function(){
    bscroll.style.width = '0px';
}
bscroll.onmouseleave = function(){
    bscroll.style.width = '0px';
}
bsexit.onclick = function(){
    bscroll.style.width = '0px';
}
headerNone.onclick = function(){
    headerA.style.display = 'none';
}
    window.onscroll = function () {
        var scrollt =document.body.scrollTop||document.documentElement.scrollTop;
        var jiance = headerA.offsetHeight;
        if(scrollt>653+jiance){
            searchM.style.position="fixed";
            searchM.style.top="0";
            searchM.style.left="0";
            searchM.style.borderBottom="3px solid red";
            searchM.style.zIndex="15";
            searchKuang.style.top='9px';
            searchCart.style.top='9px';
            logo.style.backgroundPosition="0px 35px";
            logo.style.height = "40px";
            guding.style.top=scrollt-600-jiance+'px';
        }else if(scrollt<653+jiance){
            searchM.style.position="relative";
            searchM.style.borderBottom="none";
            searchM.style.zIndex="1";
            searchKuang.style.top='25px';
            searchCart.style.top='25px';
            logo.style.backgroundPosition="0px 0px";
            logo.style.height = "120px";
            guding.style.top='0px';
        }
    }
//秒杀倒计时
    function showtime(){
        var a = new Date()
        var timmerUnit = document.getElementsByClassName('timmer__unit')
        var counDesc = document.getElementsByClassName('coun-desc')
        var desc = jiaLing(Math.floor(a.getHours()/2)*2)
        counDesc[0].innerText = desc+':00'
        var houer = jiaLing((a.getHours()+1)%2)
        timmerUnit[0].innerText = houer
        var minute =jiaLing(59-a.getMinutes())
        timmerUnit[1].innerText = minute
        var second =jiaLing(59-a.getSeconds())
        timmerUnit[2].innerText = second
    }
    function jiaLing(i){
        if(i<10){
            return "0"+i;
        }else{
            return i;
        }
    }
    setInterval(function(){
        showtime()
    },1000)

//秒杀商品

// var slider_item = document.getElementsByClassName('slider_item')
var ti = setInterval(autoPlay,15);
var num = 0;
function autoPlay(){
    $id("u").style.left = num + "px";
    num--;
    if( num <= -3920 ){
        num = 0;
    }
}
//鼠标移入到容器 停止定时器 
$id("seckill-list").onmouseover = function(){
    clearInterval(ti);
    
}
//鼠标离开启动定时器
$id("seckill-list").onmouseout = function(){
    ti = setInterval(autoPlay,15);
}