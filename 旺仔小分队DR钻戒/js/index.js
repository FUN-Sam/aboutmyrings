$(document).ready(function() {
	$(".tou-S").mouseenter(function() {
		//父级移入把定时器删除
		clearInterval(bannerTime)

		$(".arrow").show(100)
	}).mouseleave(function() {
		$(".arrow").hide(100)
		//移出再开启定时器
		bannerTime = setInterval(function() {
			next()
		}, 1000)
	})

	var num = 0
	var bannerTime = null
	$(".you-1").click(function() {
		next()
	})
	$(".zuo-1").click(function() {
		prev()
	})
	//自动播放
	bannerTime = setInterval(function() {
		next()
	}, 1000)

	function prev() {
		var allImg = $(".tou-S").find("img") //获取三张图片

		console.log(num)
		allImg.eq(num).fadeIn().siblings("img").fadeOut() //选择num下标为第几张，然他淡入.让她兄弟img淡出
		num-- //图片下标减 1
		if(num < 0) { //判断num小于零
			num = allImg.length - 1 //再把他的num变为3减去1 等于2
		}
	}

	function next() {
		var allImg = $(".tou-S").find("img")
		//				fadeIn()：淡入
		//				fadeOut()：淡出
		//img 第num个
		console.log(num)
		allImg.eq(num).fadeIn().siblings("img").fadeOut()
		num++
		//  1        2
		if(num > allImg.length - 1) {
			num = 0
		}
	}
	//视频
	 $(".location").click(function(){
	  	 $(".xing1").show()
	  })
	  $("#xx").click(function(){
	  	$(".xing1").hide()
	  })
})