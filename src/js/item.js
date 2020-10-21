/* 
			需求分析:
				1 鼠标移入small,mask显示,big显示
				2 鼠标移出small,mask隐藏,big隐藏
				3 mask跟着鼠标移动,鼠标在mask的中间
				4 big里面显示mask里面对应的放大图部分
		*/

		// 1 鼠标移入small,mask显示,big显示
		$('#preview-img').onmouseover = function(){
            console.log(aa)
			$('#mask').style.display = "block";
			$('#bigbox').style.display = "block";
		}
		// 2 鼠标移出small,mask隐藏,big隐藏
		$('#preview-img').onmouseleave = function(){
			$('#mask').style.display = "none";
			$('#bigbox').style.display = "none";
		}
		// 3 mask跟着鼠标移动,鼠标在mask的中间
		$('#preview-img').onmousemove = function(e){
			e = e||window.event;
			//计算鼠标相对small的坐标 = 鼠标相对性页面的坐标 - box距离页面的距离
			var left = e.pageX -$('#preview').offsetLeft;
			var top = e.pageY - $('#preview').offsetTop;
			//由于鼠标必须在mask的中间,所有mask左上角的坐标需要减去自己宽度和高度的一般
			left = left - $('#mask').offsetWidth/2;
			top = top - $('#mask').offsetHeight/2;
			//边界检测
			if(left<0){
				left=0;
			}
			if(top<0){
				top=0;
			}
			if(left>$('#preview').offsetWidth-$('#mask').offsetWidth){
				left=$('#preview').offsetWidth-$('#mask').offsetWidth
			}
			if(top>$('#preview').offsetHeight-$('#mask').offsetHeight){
				top=$('#preview').offsetHeight-$('#mask').offsetHeight
			}
			$('#mask').style.left = left+"px";
			$('#mask').style.top = top+"px";

			// 4 big里面显示mask里面对应的放大图部分
			// 大图的marginLeft为负数表示左移,为正数表示右移动
			// mask距离small左边的距离/small的总宽度 = bigImg距离big左边的距离/bigImg的总宽度
			$('#bigimg').style.marginLeft = - left*$('#bigimg').offsetWidth/$('.smallimg').offsetWidth+"px";
			// mask距离small上部的距离/small的总高度 = bigImg距离big上面的距离/bigImg的总高度
			$('#bigimg').style.marginTop = -top*$('#bigimg').offsetHeight/$('.smallimg').offsetHeight+"px";
		}