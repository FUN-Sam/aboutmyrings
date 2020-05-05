$(document).ready(function() {
	$(".select").mouseenter(function() {
		$(".select>ul").css("display", "block")
	}).mouseleave(function() {
		$(".select>ul").css("display", "none")
	})
	$(".article_header>.right>div>span:eq(0)").css("background-color", "#8b766c")
	$(".article_header>.right>div>p:eq(0)").css("color", "#8b766c")
	$(".baby_1 div .top span i:eq(0)").click(function() {
		$(".baby_1 div .top #text")[0].value += "♥";

	})
	$(".baby_1 div .top span i:eq(1)").click(function() {
		$(".baby_1 div .top #text")[0].value += "&";
	})
	$(".baby_1 div .top span i:eq(2)").click(function() {
		$(".baby_1 div .top #text")[0].value += " ";
	})
	$(".baby_1 div .top span i:eq(3)").click(function() {
		var reg = /^[\u4e00-\u9fa5a-zA-Z\♥\&\ ]{0,5}$/
		var text1 = $(".baby_1 div .top #text").val()
		if(!reg.test(text1)) {
			alert("限输入5个汉字或字母");
		}
	})
	$(".baby_2 div .top span i:eq(0)").click(function() {
		$(".baby_2 div .top #text")[0].value += "♥";

	})
	$(".baby_2 div .top span i:eq(1)").click(function() {
		$(".baby_2 div .top #text")[0].value += "&";
	})
	$(".baby_2 div .top span i:eq(2)").click(function() {
		$(".baby_2 div .top #text")[0].value += " ";
	})
	$(".baby_2 div .top span i:eq(3)").click(function() {
		var reg = /^[\u4e00-\u9fa5a-zA-Z\♥\&\ ]{0,5}$/
		var text2 = $(".baby_2 div .top #text").val()
		if(!reg.test(text2)) {
			alert("限输入5个汉字或字母");
		}
	})

	var b1jiage = parseInt($("#b1value").text())
	var b2jiage = parseInt($("#b2value").text())
	$('input[name="checkall"]').on("click", function() {
		var jiage = parseInt($("#jiage").text())
		var yixuan = parseInt($("#yixuan").text())
		if($(this).is(':checked')) {
			$('input[name="checkbox"]').each(function() {
				$(this).prop("checked", true);
				$("#jiage").empty().append(b1jiage+b2jiage)
				$("#yixuan").empty().append(+2)
			});
		} else {
			$('input[name="checkbox"]').each(function() {
				$(this).prop("checked", false);
				$("#jiage").empty().append(jiage-(b1jiage+b2jiage))
				$("#yixuan").empty().append(yixuan-2)
			});
		}
	});

	$('.check1').on("click", function() {
		var jiage = parseInt($("#jiage").text())
		var yixuan = parseInt($("#yixuan").text())
		if($(this).is(":checked") && $('.check2').is(":checked")) {
			$('input[name="checkall"]').each(function() {
				$(this).prop("checked", true);
			});
		}
		if($(this).is(":checked")) {
			$("#jiage").empty().append(jiage + b1jiage)
			$("#yixuan").empty().append(yixuan + 1)
		} else {
			$('input[name="checkall"]').each(function() {
				$(this).prop("checked", false);
			});
			$("#jiage").empty().append(jiage - b1jiage)
			$("#yixuan").empty().append(yixuan - 1)
		}
	})
	$('.check2').on("click", function() {
		var jiage = parseInt($("#jiage").text())
		var yixuan = parseInt($("#yixuan").text())
		if($(this).is(":checked") && $('.check1').is(":checked")) {
			$('input[name="checkall"]').each(function() {
				$(this).prop("checked", true);
			});
		}
		if($(this).is(":checked")) {
			$("#jiage").empty().append(jiage + b2jiage)
			$("#yixuan").empty().append(yixuan + 1)
		} else {
			$('input[name="checkall"]').each(function() {
				$(this).prop("checked", false);
			});
			$("#jiage").empty().append(jiage - b2jiage)
			$("#yixuan").empty().append(yixuan - 1)
		}
	})

	$("#remove1").click(function() {
		var jiage = parseInt($("#jiage").text())
		var yixuan = parseInt($("#yixuan").text())
		var request = confirm("确认删除？")
		if(request) {
			$(".baby_1").remove()
			$("#yixuan").empty().append(yixuan-1)
			$("#jiage").empty().append(jiage-b1jiage)
		}

	})
	$("#remove2").click(function() {
		var jiage = parseInt($("#jiage").text())
		var yixuan = parseInt($("#yixuan").text())
		var request = confirm("确认删除？")
		if(request) {
			$(".baby_2").remove()
			$("#yixuan").empty().append(yixuan-1)
			$("#jiage").empty().append(jiage-b2jiage)
		}

	})
		$(".got button").click(function(){
			if($("input[name='checkbox']").is(":checked")){
				alert("购买成功")
				location.assign('index.html')
			}else{
				alert("请选择商品")
			}
			
		})
})