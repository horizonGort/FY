var box = $id('slider');//轮播图容器
        var width = box.offsetWidth;//容器/图片的宽度
        var imgArr = box.children[0].children[0].children;//所有图片所在li的集合
        var sliderCtrl = box.children[1];//轮播图控制按钮存放容器
        var prev = $id('prev');//上一张按钮
        var index = 0;//index是一个全局变量,记录当前显示的图片的索引
        
        for(var i=0;i<imgArr.length;i++){
            //1 根据图片的数量自动生成小圆点(类名:slider-ctrl-con)
            var span = document.createElement('span');
            span.className = "slider-ctrl-con";
            span.innerHTML = i;//为了后期点击span的时候能够知道他是第几个
            // span.index = i; //为了后期点击span的时候能够知道他是第几个
            // 希望把span插入到slider-ctrl的子元素的前面
            sliderCtrl.insertBefore(span,prev);

            //3 其他里都放到右边(左边left:-310px,右边left:310px)
            imgArr[i].style.left = width+"px";
        }

        //2 点亮第一个小圆点(当前小圆点:current)
        var spanArr = sliderCtrl.children;
        spanArr[index].className = "slider-ctrl-con current";
        //3 显示第一个li
        imgArr[index].style.left = 0;


        //4 把小圆点,左右箭头的事件都委托给父元素sliderCtrl
        sliderCtrl.onclick = function(e){
            e = e||window.event;
            var target = e.target||e.srcElement;
            if(target.className=="prev"){
                console.log("你点击了上一张按钮");
                //如果当前图片索引是index,那么现在要看的索引是newIndex
                var newIndex = index-1;
                //如果newIndex<0,就是想看最后一张
                if(newIndex<0){
                    newIndex = imgArr.length-1;
                }
                //那么我要看的图一定在左边
                imgArr[newIndex].style.left = -width+"px";
                //原来索引是index的图去右边
                animate(imgArr[index],{left:width})
                //现在索引newIndex的图去中间
                animate(imgArr[newIndex],{left:0});
                //更新最新的索引
                index = newIndex;
                //点亮小圆点
                light();

            }
            else if(target.className=="next"){
                console.log("你点击了下一张按钮");
                nextImg();
                
            }
            else if(target.className.indexOf('slider-ctrl-con')>-1){
                console.log("你点击了小圆点,点击的小圆点的索引是"+target.innerHTML);
                //你要看的索引是newIndex
                var newIndex = target.innerHTML;
                //如果要看的索引newIndex>index,索引newIndex必须在右边
                if(newIndex>index){
                    //索引是newIndex的图片必须在右边
                    imgArr[newIndex].style.left = width+"px";
                    //原来索引是index的图去左边
                    animate(imgArr[index],{left:-width})
                    //现在索引是newIndex的图去中间
                    animate(imgArr[newIndex],{left:0})

                }
                //如果要看的索引newIndex<index,索引newIndex必须在左边
                else if(newIndex<index){
                    //索引是newIndex的图片必须在左边
                    imgArr[newIndex].style.left = -width+"px";
                    //原来索引是index的去右边
                    animate(imgArr[index],{left:width})
                    //现在索引是newIndex的去中间
                    animate(imgArr[newIndex],{left:0})
                }

                //不管是newIndex<index还是newIndex>index,运动完以后都要更新索引index,并点亮小圆点
                index = newIndex;
                light();

            }
        }
        //鼠标放在小圆点上切换图片
        sliderCtrl.onmouseover = function(e){
            e = e||window.event;
            var target = e.target||e.srcElement;
            if(target.className.indexOf('slider-ctrl-con')>-1){
                console.log("你点击了小圆点,点击的小圆点的索引是"+target.innerHTML);
                //你要看的索引是newIndex
                var newIndex = target.innerHTML;
                //如果要看的索引newIndex>index,索引newIndex必须在右边
                if(newIndex>index){
                    //索引是newIndex的图片必须在右边
                    imgArr[newIndex].style.left = width+"px";
                    //原来索引是index的图去左边
                    animate(imgArr[index],{left:-width})
                    //现在索引是newIndex的图去中间
                    animate(imgArr[newIndex],{left:0})

                }
                //如果要看的索引newIndex<index,索引newIndex必须在左边
                else if(newIndex<index){
                    //索引是newIndex的图片必须在左边
                    imgArr[newIndex].style.left = -width+"px";
                    //原来索引是index的去右边
                    animate(imgArr[index],{left:width})
                    //现在索引是newIndex的去中间
                    animate(imgArr[newIndex],{left:0})
                }

                //不管是newIndex<index还是newIndex>index,运动完以后都要更新索引index,并点亮小圆点
                index = newIndex;
                light();

            }
        }
        var sliderctrl =  $id('slider-ctrl');
        sliderctrl.children[0].style.left='20px';
        sliderctrl.children[1].style.left='40px';
        sliderctrl.children[2].style.left='60px';
        sliderctrl.children[3].style.left='80px';
        sliderctrl.children[4].style.left='100px';
        sliderctrl.children[5].style.left='120px';
        sliderctrl.children[6].style.left='140px';
        sliderctrl.children[7].style.left='160px';
        // 7 轮播图会自动轮播
        var timer = setInterval(nextImg,2500);
        // 8 鼠标移入slider盒子,停止轮播,鼠标移出slider盒子,继续轮播
        box.onmouseenter = function(){
            clearInterval(timer)
        }
        box.onmouseleave = function(){
            clearInterval(timer);
            timer = setInterval(nextImg,2500);
        }

        //点亮小圆点
        function light(){
            for(var i=0;i<imgArr.length;i++){
                //图片有几个,小圆点就有几个
                spanArr[i].className = "slider-ctrl-con"
            }
            spanArr[index].className = "slider-ctrl-con current";
        }
        //显示下一张
        function nextImg(){
            //如果当前图片索引是index,那么现在要看的索引是newIndex
            var newIndex = +index+1;//在一个字符串前面写加号表示正号
            //如果newIndex>imgArr.length-1
            if(newIndex>imgArr.length-1){
                newIndex=0;
            }
            //那么我要看的图一定在右边
            imgArr[newIndex].style.left = width+"px";
            //原来索引index的图片去左边
            //现在索引newIndex的图片去中间
            animate(imgArr[index],{left:-width})
            animate(imgArr[newIndex],{left:0})
            //更新当前索引index
            index = newIndex;
            //点亮小圆点
            light();
        }