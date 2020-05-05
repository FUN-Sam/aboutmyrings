$(document).ready(function() {
	$("#select>li:eq(0)").mouseenter(function() {
		$("#select .first").css("display", "block");
	});
	$("#select .first").mouseleave(function() {
		$("#select .first").css("display", "none");
	});
	$(".displaypics01").mouseover(function() {
		console.log(1)
		$(".tu044").find("img").css({
			"transform": "scale(1.08)",
			"transition": ".3s"
		})
	}).mouseout(function() {
		$(".tu044").find("img").css({
			"transform": "scale(1)",
			"transition": ".3s"
		})
	})

	$(".displaypics02").mouseover(function() {
		console.log(1)
		$(".tu022").find("img").css({
			"transform": "scale(1.08)",
			"transition": ".3s"
		})
	}).mouseout(function() {
		$(".tu022").find("img").css({
			"transform": "scale(1)",
			"transition": ".3s"
		})
	})

	$(".displaypics03").mouseover(function() {
		console.log(1)
		$(".tu033").find("img").css({
			"transform": "scale(1.08)",
			"transition": ".3s"
		})
	}).mouseout(function() {
		$(".tu033").find("img").css({
			"transform": "scale(1)",
			"transition": ".3s"
		})
	})

})

$(function() {
	var json = [{
			top: 75,
			left: -40,
			width: 637 * 0.7,
			height: 387 * 0.7,
			opacity: .6,
			z: 3

		}, {
			//放大的那张坚定爱情
			top: 0,
			left: 165,
			width: 685,
			height: 425,
			opacity: 1,
			z: 4

		}, {
			top: 75,
			left: 600,
			width: 637 * 0.7,
			height: 387 * 0.7,
			opacity: .6,
			z: 3
		}, {
			top: 0,
			left: 20,
			width: 637 * 0.5,
			hieght: 387 * 0.5,
			opacity: 0,
			z: 2
		},

		{
			top: 0,
			left: 600,
			width: 637 * 0.5,
			height: 387 * 0.5,
			opacity: 0,
			z: 2
		}, {
			top: 0,
			left: 630,
			width: 637 * 0.5,
			height: 387 * 0.5,
			opacity: 0,
			z: 2
		}
	];
	var flag = true
	$(".arrow01").click(function() {
		next()
	})

	function prev() {
		if(flag) {
			console.log(flag)

			flag = false

			json.push(json.shift()); //把头部的删除添加到尾部
			init(function() {
				flag = true
			})
		}
		console.log(flag)
	}

	var flag2 = true
	$(".arrow02").click(function() {
		prev()
	})

	function next() {
		if(flag2) {
			flag2 = false
			json.unshift(json.pop()) //把尾部删除的添加到头部

			init(function() {
				flag2 = true
			})
		}

	}

	//点击轮播图让他变成当前那张
	$(".changepics-box").each(function(index, ele) {
		$(ele).click(function() {
			var l = $(this).offset().left
			if(l <= 291.5) {
				prev()
			} else if(l >= 931.5) {
				next()
			}
		})

	})

	function init(fn) {

		$(".changepics>div").each(function(i, e) {
			//			console.log(i, e)
			$(e).animate({
				"width": json[i].width,
				"left": json[i].left,
				"opacity": json[i].opacity,
				"height": json[i].height,
				"top": json[i].top,
				"zIndex": json[i].z
			}, function() {
				//如果传了fn这个参数就执行这个fn
				if(fn) {
					fn()
				}
			})
		})
	}

	init()

	//先给右边的箭头加点击事件
	$(".page2-main .theright").click(function() {
		$(".page2-main .theright").hide();
		$(".page3-main .theleft").show();
		$(".page3").show();
		$(".page2").hide();
	})

	//再给左边的箭头加点击事件
	$(".page3-main .theleft").click(function() {
		$(".page2-main .theright").show();
		$(".page3-main .theleft").hide();
		$(".page3").hide();
		$(".page2").show();
	})

	//再给细手和胖手加点击事件，默认是袖长型的细手
	//胖手的点击事件
	$(".change-hand a:last-child").click(function() {
		$(".try-hand-slim").hide();
		$(".try-hand-full").show();
		$(".change-hand a:last-child").addClass("activate")
		$(".change-hand a:first-child").removeClass("activate")
		return false;
	})

	//细手的点击事件
	$(".change-hand a:first-child").click(function() {
		$(".try-hand-slim").show();
		$(".try-hand-full").hide();
		$(".change-hand a:last-child").removeClass("activate")
		$(".change-hand a:first-child").addClass("activate")
		return false;
	})

	//给小圆圈们加点击事件 这个是第2个圆圈
	$(".tryringsmall span:nth-of-type(2)").click(function() {
			$(".wrap-li01").hide();
			$(".wrap-li03").hide();
			$(".wrap-li02").show();
			$(".tryringsmall span:nth-of-type(2)").addClass("active")
			$(".tryringsmall span:nth-of-type(1)").removeClass("active")
			$(".tryringsmall span:nth-of-type(3)").removeClass("active")
		})
		//给小圆圈们加点击事件 这个是第1个圆圈
	$(".tryringsmall span:nth-of-type(1)").click(function() {
			$(".wrap-li01").show();
			$(".wrap-li03").hide();
			$(".wrap-li02").hide();
			$(".tryringsmall span:nth-of-type(1)").addClass("active")
			$(".tryringsmall span:nth-of-type(2)").removeClass("active")
			$(".tryringsmall span:nth-of-type(3)").removeClass("active")
		})
		//给小圆圈们加点击事件 这个是第3个圆圈
	$(".tryringsmall span:nth-of-type(3)").click(function() {
		$(".wrap-li01").hide();
		$(".wrap-li03").show();
		$(".wrap-li02").hide();
		$(".tryringsmall span:nth-of-type(1)").removeClass("active")
		$(".tryringsmall span:nth-of-type(2)").removeClass("active")
		$(".tryringsmall span:nth-of-type(3)").addClass("active")
	})

	//给大钻戒加点击事件
	$(".tryringsame .pic01").click(function() {
		$(".try-hand-show .tu01").show()
		$(".try-left .tu001").show()
		$(".try-left .tu002,.tu003,.tu004,.tu005,.tu006,.tu007,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu02,.tu03,.tu04,.tu05,.tu06,.tu07,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic02").click(function() {
		$(".try-hand-show .tu02").show()
		$(".try-left .tu002").show()
		$(".try-left .tu001,.tu003,.tu004,.tu005,.tu006,.tu007,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu05,.tu06,.tu07,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic03").click(function() {
		$(".try-hand-show .tu03").show()
		$(".try-left .tu003").show()
		$(".try-left .tu001,.tu002,.tu004,.tu005,.tu006,.tu007,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu02,.tu04,.tu05,.tu06,.tu07,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic04").click(function() {
		$(".try-hand-show .tu04").show()
		$(".try-left .tu004").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu007,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu02,.tu05,.tu06,.tu07,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic05").click(function() {
		$(".try-hand-show .tu05").show()
		$(".try-left .tu005").show()
		$(".try-left .tu001,.tu002,.tu003,.tu004,.tu006,.tu007,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu02,.tu06,.tu07,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic06").click(function() {
		$(".try-hand-show .tu06").show()
		$(".try-left .tu006").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu004,.tu007,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu02,.tu05,.tu07,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic07").click(function() {
		$(".try-hand-show .tu07").show()
		$(".try-left .tu007").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu004,.tu008,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu02,.tu05,.tu06,.tu08,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic08").click(function() {
		$(".try-hand-show .tu08").show()
		$(".try-left .tu008").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu007,.tu004,.tu009,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu02,.tu05,.tu07,.tu06,.tu09,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic09").click(function() {
		$(".try-hand-show .tu09").show()
		$(".try-left .tu009").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu007,.tu008,.tu004,.tu010,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu06,.tu05,.tu07,.tu08,.tu02,.tu10,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic10").click(function() {
		$(".try-hand-show .tu10").show()
		$(".try-left .tu010").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu007,.tu008,.tu009,.tu004,.tu011,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu06,.tu05,.tu07,.tu08,.tu09,.tu2,.tu11,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic11").click(function() {
		$(".try-hand-show .tu11").show()
		$(".try-left .tu011").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu007,.tu008,.tu009,.tu010,.tu004,.tu012").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu06,.tu05,.tu07,.tu08,.tu09,.tu2,.tu10,.tu12").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})
	$(".tryringsame .pic12").click(function() {
		$(".try-hand-show .tu12").show()
		$(".try-left .tu012").show()
		$(".try-left .tu001,.tu002,.tu003,.tu005,.tu006,.tu007,.tu008,.tu009,.tu010,.tu011,.tu004").hide()
		$(".try-hand-show .tu01,.tu03,.tu04,.tu06,.tu05,.tu07,.tu08,.tu09,.tu2,.tu10,.tu11").hide()
		$(this).css("border", "1px solid black").siblings().css("border", 0);

	})

	//给碎钻加点击事件
	$(".piclist li").each(function(index, element) {
		$(element).click(function() {

			var imgWidth = $(element).find("img").width()
			var pTxt = $(element).find("span").html()
			console.log(pTxt)
			var imgSrc = $(this).find("img").attr("src")
			$(".bigdrillshow").find("img").width(imgWidth)
			$(".bigdrillshow").find("p").html(pTxt)
			console.log(imgSrc)
			$(".bigdrillshow").find("img").attr("src", imgSrc)
			$(this).css("border", "1px solid black").siblings().css("border", 0);

			smalldiamond = true;
			isShow()
		})
	})

	//给返回上一步加点击事件
	$(".page3 .cancel-btn a:first-child").click(function() {
		$(".page3").hide();
		$(".page2").show();
		$(".page2-main .theright").show();

		return false;
	})

	//给确认佩戴加点击事件
	$(".page2 .cancel-btn a").click(function() {
			console.log(3)
			$(".page3").show();
			$(".page2").hide();
			$(".page3-main .theleft").show();
			isShow()
			return false;
		})
		//给定制好了，我要下单价点击事件
	var bigdiamond = false //大钻石是否被选中
	var smalldiamond = false //小钻石是否被选中

	$(".tryringsame li").click(function() {
		bigdiamond = true;
		isShow()
	})

	//	$(".piclist li").click(function() {
	//		
	//	})
	//点击下单按钮的点击事件
	$(".page3 .cancel-btn .book").click(function() {
		if(!bigdiamond) {
			$(".classcode").html("您还未选择钻戒款式，请先选择款式")
			$(".classcode").addClass("aboutWrong")
		} else if(!smalldiamond) {
			$(".classcode").html("您还未选择钻石规格，请先选择钻石")
			$(".classcode").addClass("aboutWrong")
		} else if(bigdiamond && smalldiamond) {
			window.open("detail.html", "_self")
		}
		return false;
	})

	function isShow() {
		if(bigdiamond == true && smalldiamond == true) {
			$(".classcode").hide()
		}
	}
})