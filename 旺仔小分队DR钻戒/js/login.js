$(document).ready(function() {
	$("#com").click(function() {
		$("#tion").hide(200)
		$(".jumen").show(200)
		return false
	})
	$("#logo").click(function() {
		$("#tion").show(200)
		$(".jumen").hide(200)
		return false
	})
	//获取短信验证码
	var timer = 11
	var time = null
	var myimg = true
	$(".inpit-fu").click(function() {
		if(myimg) {
			myimg = false
			//     			var ethis = this
			time = setInterval(function() {
				if(timer <= 0) {
					$(".inpit-fu").val("获取短信验证码")
					$(".inpit-fu").css({
						"background-image": "linear-gradient(white,#f4f4f4)",
						"color": "#9b745c"
					})
					clearInterval(time)
					myimg = true
					timer = 11
				} else {
					timer -= 1
					var en = timer + "秒后重新获取"
					$(".inpit-fu").val(en)
					$(".inpit-fu").css({
						"background": "#f6f6f6",
						"color": "gray",
						"width": "100px",
						"border": "1px solid gainsboro",
						"border-radius": "4px"
					})
				}
			}, 1000)
		}
	})
	//按钮定时器
	var e = true
	$("#inen").click(function() {
		if(e) {
			$(".inpit-fu").val("获取语音验证码")
			$("#inen").html("获取短信验证码")
			e = false
			return false
		} else {
			$("#inen").html("获取语音验证码")
			$(".inpit-fu").val("获取短信验证码")
			e = true
			return false
		}
	})
	//互换短信语音验证码

	var test = false
	var test1 = false

	$("#tion").submit(function(e) {
		var v = $(".inpit-x").val()
		var Dom = /^18[7894][0-9]{8}$/
		if(v == "") {
			$("#warning").html("手机号不能为空")
			$("#warning").css("display", "block")
			test = false
		} else if(!Dom.test(v)) {
			$("#warning").html("手机号码格式不正确")
			$("#warning").css("display", "block")
			test = false
		} else {
			$("#warning").css("display", "none")
			test = true
			//手机验证

			var e = $(".inpit-p").val()
			console.log(e)
			var img = /^18[7894][0-9]{3}$/
			if(e == "") {
				$("#warning").html("验证码不能为空")
				$("#warning").css("display", "block")
				test1 = false
			} else if(!img.test(e)) {
				$("#warning").html("验证码错误!")
				$("#warning").css("display", "block")
				test1 = false
			} else {
				$("#warning").css("display", "none")
				test1 = true
			}
		}
		//短信验证
		//         var j = $(".com").val()
		//         var hide = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
		//         var en = /^13[5789][0-9]{8}$/ 
		//         if(j==""){
		//         	$("#warning").html("手机号不能为空")
		//			$("#warning").css("display", "block")
		//         }
		if(test == true && test1 == true) {
			return true
		}
		return false
	})
	//跳转后的验证
	var anin = false
	var qing = false
	$("#myimg").submit(function() {
		var j = $(".com").val()
		var hide = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
		var en = /^13[5789][0-9]{8}$/
		if(j == "") {
			$("#warning").html("手机号和邮箱不能为空")
			$("#warning").css("display", "block")
			anin = false

		} else if(!hide.test(j) && !en.test(j)) {
			$("#warning").html("手机号码或邮箱格式不正确")
			$("#warning").css("display", "block")
			anin = false
		} else {
			$("#warning").css("display", "none")
			anin = true
			var t = $(".mima").val()
			var rig = /^[\w]{6,20}$/;
			if(t == "") {
				$("#warning").html("密码不能为空")
				$("#warning").css("display", "block")
				qing = false
			} else if(!rig.test(t)) {
				$("#warning").html("请输入6-20位数的密码")
				$("#warning").css("display", "block")
				qing = false
			} else {
				$("#warning").css("display", "none")
				qing = true
			}

		}
		//账号登录

		//密码登录
		if(anin == true && qing == true) {
			return true
		}
		return false
	})

})