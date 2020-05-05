//七夕献礼 挚爱唯一的移入和移出
$(function() {
	$(".DRactive").mouseover(function() {
		$(".act-official").show();
		$(".act-shop").hide();
		$(".DRactive").addClass("actives");
		$(".header01").removeClass("actives")
	})

	$(".header01").mouseover(function() {
		$(".act-official").hide();
		$(".act-shop").show();
		$(".header01").addClass("actives");
		$(".DRactive").removeClass("actives")
	})

	//礼物的显示和隐藏
	$(".qx-giftshow>li").each(function(index, element) {
		//给每一个li加入移入事件，
		$(element).hover(function() {
			$(this).find(".graybox").show();
		}, function() {
			$(this).find(".graybox").hide();
		})
	})
	//玫瑰花盒的定时器
	var num = 0
	setTimeout(move, 2000)

	function move() {
		$(".actpic>li").eq(num).fadeIn().siblings().fadeOut()
		num++
		if(num > $(".actpic>li").length - 1) {
			num = 0
		}

	}
	move()
})

//以情为媒 承诺真爱的移入和移出
$(function() {
	$(".header02").eq(0).addClass("actives")
	$(".qx-propics").eq(0).addClass("pannelselected")
})

function doselect(index) {
	$(".header02").removeClass("actives");
	$(".header02").eq(index).addClass("actives")
	$(".qx-propics").removeClass("pannelselected");
	$(".qx-propics").eq(index).addClass("pannelselected")
}

//实体店的轮播图
//每次都让所有图片隐藏，再显示一张图片
var currentindex = -1;
var myimg = document.getElementsByClassName("yu-pictures"); //得到了所有的图片
var mydian = document.getElementsByClassName("dians"); //得到导航     

function myfun() {
	currentindex++;
	if(currentindex > myimg.length - 1) {
		currentindex = 0;
	}

	//1:循环让所有图片都隐藏,并且删除
	for(var i = 0; i < myimg.length; i++) {
		myimg[i].style.display = "none";
		mydian[i].src = "img/yuandian2.png"
	}
	//2:设置current的图片显示出来
	myimg[currentindex].style.display = "block";
	mydian[currentindex].src = "img/yuandian1.png"
}
setInterval(myfun, 2000)

//myfun()

//设置小鸟的出现，当滚动到小鸟的时候才出现
$(function() {
	$(window).on("scroll", function() {
		//console.log("鸟", $(".bird-box").offset().top) //鸟距离屏幕上方的距离
		//console.log($(this).scrollTop()) //window的滚动距离
		if($(this).scrollTop() > $(".bird-box").offset().top - 400) {
			$(".bird").show()
		} else {
			$(".bird").hide()
		}
	})

})
$(function() {
	//弹出框的设置
	var newDate = new Date(); //获取当前的时间
	var year = newDate.getFullYear() //年
	var month = newDate.getMonth() + 1 //月
	var date = newDate.getDate() //日
	$("#d11").val(year + "-" + month + "-" + date) //赋值给到日历插件的那一栏
	//点击预约进店时的事件
	$(".shopbutton").click(function() {
		var $choose1 = $("#provinceshop").find("option:selected").html();
		var $choose2 = $("#shopments").find("option:selected").html();
		var $name = $("#username").val();
		var $phone = $("#userphone").val();
		//弹出框
		var $alertbox = $(".shop-alert");
		var reg = /^1[0-9]{10}$/;
		if($choose1 == "请选择城市" || $choose2 == "请选择店铺" || $name == "" || $phone == "") {
			alert("请填写完整信息")
			return false;
		} else if(!reg.test($phone)) {
			alert("请填写正确的电话")
			return false;
		} else {
			$alertbox.show();
			var num = 5;
			var value = $(".num");
			setInterval(function() {
				num--;
				value.html(num); //赋值
				if(num == 0) {
					$alertbox.remove()
				}
			}, 1000)
			return false;
		}

	})
})

//立即参与的事件
$(function() {
	$(".towrite").click(function() {
		$(".wetchat-box").show();
	});
	$(".isclose").click(function() {
		$(".wetchat-box").hide();
	})

})

//情书的点击事件
$(function() {
	var qsImgArr = ["img/pic01.jpg", "img/pic02.jpg", "img/pic03.jpg", "img/pic04.jpg", "img/pic05.jpg", "img/pic06.jpg"]
	$(".qx-letterbox>li").each(function(index, element) {
		$(element).click(function() {
			console.log(element); //得到了每一个li
			console.log(index)
			$(".qs-letter").find(".qs-tu01").attr("src", qsImgArr[index])
			$(".qs-letter").show();
			$(".dr_theblackwall").show();

		})
	})

	//当点击叉叉的时候，情书又消失
	$(".qs-letter>.iscloses").click(function(e) {
		$(".dr_theblackwall").hide();
		$(".qs-letter").hide();
		e.stopPropagation()

	})
})

//活动规则弹出框的设置
$(function() {
	$(".btn>.btn-regular").click(function() {
		console.log(5)
		$(".tc-rule").show();
		$(".dr_theblackwall").show();

	})
	$(".tc-rule>.isclose").click(function() {
		$(".tc-rule").hide();
		$(".dr_theblackwall").hide();
	})

	$(".tc-rule>.isclose").click(function() {
		$(".tc-rule").hide();
		$(".dr_theblackwall").hide();

	})
//	$(document).scroll(function(e){
//		e=e||window.event
//		var top=$("body").scrollTop()
//		console.log(top)
//	})
	//预约到店的点击事件， 当我一点击预约到店的时候， 页面就滚到预约到店
	$(".go-to-shop").click(function(e) {
		e=e||window.event
		$("html,body").animate({
			scrollTop:5400
		},500)
	})

	//城市的对应的点击选择
	var position = [
		[
			"巴黎",
			"香港",
			"北京",
			"天津市",
			"河北省",
			"山西省",
			"内蒙古自治区",
			"辽宁省",
			"吉林省",
			"黑龙江",
			"上海市",
			"上海市",
			"江苏省",
			"浙江省",
			"安徽省",
			"福建省",
			"江西省",
			"山东省",
			"河南省",
			"湖南省",
			"湖北省",
			"广东省",
			"广西壮族自治区",
			"海南省",
			"重庆市",
			"四川省",
			"贵州省",
			"云南省",
			"西藏自治区",
			"陕西省",
			"甘肃省",
			"青海省",
			"宁夏回族自治区",
			"新疆维吾尔族自治区"

		],
		[
			"巴黎-卢浮宫店",
		],
		[
			"香港-尖沙咀店",
			"香港-铜锣湾店"
		],
		[
			"北京-龙湖长安天街店",
			"新中关购物中心店",
			"世贸天街店",
			"丰科万达店"
		],
		[
			"天津-陆家嘴广场店",
			"天津-万象城店",
			"天津-爱琴海店"

		]
	]
	for(var i = 0; i < position[0].length; i++) {
		console.log(position[0][i])
		$("#provinceshop").append($("<option>" + position[0][i] + "</option>"))
	}
	$("#provinceshop").change(function() {
		var val = $(this).val()
		console.log(val)
		$("#shopments").html("")
		if(val == "请选择城市") {
			console.log(1)
			$("#shopments").html("<option value=''>请选择店铺</option>")
			return
		}
		for(var i = 0; i < position[0].length; i++) {
			if(val == position[0][i]) {
				var index = i
				console.log(index)
				for(var j = 0; j < position[index + 1].length; j++) {
					console.log(position[index + 1][j])

					$("#shopments").append($("<option>" + position[index + 1][j] + "</option>"))
				}
			}
		}
	})
})