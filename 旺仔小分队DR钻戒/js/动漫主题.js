window.onload = function() {
	$(window).scroll(function(e) {
		var sTop = $(this).scrollTop() //滚动条滚了多少  获取滚动条顶部距离
//		console.log(sTop)
		var offsetHeight = ($(".background-z").height()) / 2 //div背景的高度除以二
//		console.log(offsetHeight)
		if(sTop > offsetHeight) { //如果滚动条的距离大于背景图片的一半 (就是背景图片除以二)
			//回调函数：当动画执行完成后在执行的函数
			$(".scroll .bg").animate({
				"width": "1567" //当滚动条大于offsetHeight图片宽度一半的时候让这个div宽度从零走到1567px
			}, 1000)
			$(".scroll").animate({ // 以回调函数的方式:然后就让(.scroll)这个div运动宽度1920 (时间是1秒之后开始动画)
				"width": "1920"
			}, 1000, function() { //等动画执行完之后再让(happiness)这个div, fadeIn()方式淡入出现
				$(".happiness").fadeIn()
			})

		}
	})

	//动态设置轮播图父盒子宽度
	var oneWidth = $(".happiness .img-a img").eq(0).width() //.happiness .img-a img"第一张图片的宽度
//	console.log(oneWidth)
	var boxWidth = oneWidth * $(".happiness .img-a img").length //(.happiness .img-a img"第一张图片的宽度)乘以所有图片的长度, 并以boxWidth变量接收
	$(".happiness .img-a").width(boxWidth) //然后(.happiness .img-a) 然后boxWidth变量就得到了(.happiness .img-a)div的所有宽度

	//循环li
	for(var i = 0; i <= $(".navigation li").length; i++) { //循环遍历所有li
		$(".navigation li").eq(i).click(function() { //当(.navigation li)的下面所有li 点击时候
			var num = $(this).index() //点击时 拿到当前索引下标
				//siblings()选择兄弟元素
			$(this).addClass("e").siblings().removeClass("e") //给点击li时给它一个背景样式,同时给他的同胞兄弟(siblings())去除(removeClass()去除样式)e样式
//			console.log(num)
			$(".happiness .img-a").animate({ //给当前的img的父级加上动画函数(animate())，改变轮播图父级的left值：值为当前点击li的下标乘一张图片的宽度
				"left": -(num * oneWidth)
			})
		})
	}
	//卷轴轮播图所有js

	var num = -1 //初始值下标从-1开始 三个张图片以下标开始
	$(".hand").click(function() { //进入点击事件下标从零开始
			num++
			if(num == 0) { //如果点击第一张图片 就让(.nanhai)这个图片显示
				$(".nanhai").fadeIn(500)
			} else if(num == 1) {
				$(".love").fadeIn(500) //点击第二次就让(.love)这个div显示
			} else if(num == 2) {
				$(".love").fadeOut(500) //点击第三次就让(.love)隐藏  并且让(.myimg)显示
				$(".myimg").fadeIn(500)
			} else {
				$(".hand").fadeOut(500) //第四次点击完让(.hand)小手消失
			}
		})
		//我的爱情主张
	$(".text").click(function() {
			$(this).css("display", "none")
		})
		//我对爱情的态度隐藏

	//	function limitImport(str, num) {
	//		$(document).on('input propertychange', str, function() {
	//			var self = $(this);
	//			var content = self.val();
	//			if(content.length > num) {
	//				self.val(content.substring(0, num));
	//			}
	//			self.siblings('.zero').text(self.val().length + '/' + num);
	//		});
	//	}
	//
	//	//用法示例
	//	limitImport('.muyimg', 100);

	$(".muyimg").keyup(function() {
		limitImport(100)
	})

	function limitImport(length) { //自定义函数
		//当键盘抬起时执行
		//		把文本域输出的值存在content变量里
		var content = $(".muyimg").val()

		if(content.length > length) {
			//只截取前面100个并赋给文本域
			$(".muyimg").val(content.substring(0, length))
		} else {
			$(".zero").html(content.length + "/" + length) //改变div html文本

		}
		//改变还能输入多少字

	}
	        var l = 0
			var t = 0
			var pageX = 0
			var pageY = 0
	$(".gray").mousedown(function(e){
		var disX = e.pageX-$(".single").offset().left-parseInt($(this).css("left"))
		var disY = e.pageY-$(".single").offset().top-parseInt($(this).css("top"))
		
		$(document).mousemove(function(e){
			l = e.pageX-$(".single").offset().left-disX
			t = e.pageY-$(".single").offset().top-disY
//			console.log(l,t)
			$(".gray").css({
				"left":l,
				"top":t
			})
		})
		$(document).mouseup(function(){
//			console.log("距离",$(".single").width()/2)
//			console.log("l",l)
			//判断l是否在范围之内
			if(l>$(".single").width()/2-300&&$(".single").width()/2+300>l){
				$(".gray").hide()
				$(".boy").show()
				$(".lovers").hide()
			}else{
				//否则还原
				$(".gray").css({
					"left":100,
					"top":120
				})
			}
			//移除事件
			$(this).unbind()
		})
		
		return false
	})
	
	
	
            var m = 0
			var f= 0
			var pageX = 0
			var pageY = 0
	 $(".lovers").mousedown(function(e){
	 	var youx = e.pageX-$(".single").offset().left-parseInt($(this).css("left"))
	 	var youY = e.pageY-$(".single").offset().top-parseInt($(this).css("top"))
//	 	 console.log(youx,youY)
	 $(document).mousemove(function(e){
	 	m = e.pageX-$(".single").offset().left-youx
		f = e.pageY-$(".single").offset().top-youY
		console.log(m,f)
		$(".lovers").css({
				"left":m,
				"top":f
			})
	 })
	 $(document).mouseup(function(){
	 	if(m>$(".single").width()/2-300&&$(".single").width()/2+300>m){
	 		$(".lovers").hide()
	 		$(".girl").show()
	 		$(".gray").hide()
	 	}else{
	 		$(".lovers").css({
					"left":1100,
					"top":120
				})
	 	}
	 	$(this).unbind()
	 })
	      return false
	 })
      
}