var xbox = $id('bcr-lunbo');//轮播图容器
        var rboxwidth = xbox.offsetWidth;//容器/图片的宽度
        var Arr = xbox.children;//所有li的集合
        var suoying = 0;
        var newIndex1;
        var bcrjian = $id('bcr-jian')
        bcrjian = xbox;//轮播图控制按钮存放容器
        var jianprev = $id('bcr-jian-prev');//上一张按钮
        var jiannext = $id('bcr-jian-next');
        var timerr = setInterval(nextLi,5000);
        // 8 鼠标移入slider盒子,停止轮播,鼠标移出slider盒子,继续轮播
        xbox.onmouseover= function(){
            clearInterval(timerr);
        }
        
        xbox.onmouseout= function(){
            timerr = setInterval(nextLi,5000);
        }
        bcrjian.onmouseenter = function(){
            jianprev.style.display = 'block';
            jiannext.style.display = 'block';
        }
        bcrjian.onmouseleave = function(){
            jianprev.style.display = 'none';
            jiannext.style.display = 'none';
        }
        //显示下一张
        function nextLi(){
            //如果当前图片索引是index,那么现在要看的索引是newIndex
            newIndex1 = +suoying+1;//在一个字符串前面写加号表示正号
            //如果newIndex>imgArr.length-1
            if(newIndex1>Arr.length-2){
                newIndex1=0;
            }
            //那么我要看的图一定在右边
            Arr[newIndex1].style.display= "block";
            //原来索引index的图片去左边
            //现在索引newIndex的图片去中间
            Arr[suoying].style.display='none';
            suoying = newIndex1;
        }
        jiannext.onclick = function(){
                    console.log('dianji');
                newIndex1 = suoying-1;
                //如果newIndex<0,就是想看最后一张
                if(newIndex1<0){
                    newIndex1 = Arr.length-2;
                }
                //那么我要看的图一定在左边
                Arr[newIndex1].style.display = 'block';
                //原来索引是index的图去右边
                Arr[suoying].style.display='none';
                //更新最新的索引
                suoying = newIndex1;

        }
        jianprev.onclick = function(){
            console.log('dianji');
                newIndex1 = suoying+1;
                //如果newIndex<0,就是想看最后一张
                if(newIndex1>Arr.length-2){
                    newIndex1 = 0;
                }
                //那么我要看的图一定在左边
                Arr[newIndex1].style.display = 'block';
                //原来索引是index的图去右边
                Arr[suoying].style.display='none';
                //更新最新的索引
                suoying = newIndex1;
        }