$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 400) {
			$(".TopHeaderAll+.bigNav").show()
		} else {
			$(".TopHeaderAll+.bigNav").hide()
		}
	})
	$(".body_float p").mouseenter(function() {
		$(this).find("span").show().animate({
			left: -58,
			opacity: 1
		})
	}).mouseleave(function() {
		$(this).find("span").hide().stop(true, true).css("left", "0")
	})
	$(".body_float p").mouseenter(function() {
		$(this).find("#ewm").show().animate({
			left: -140,
			opacity: 1
		})
	}).mouseleave(function() {
		$(this).find("#ewm").hide().stop(true, true).css("left", "0")
	})
	$("#select").children("li").hover(function() {
		$("#select .first").show();
	}, function() {
		$("#select .first").hide();

	})

	$(".bigNav").children(".disp").hover(function() {
		$(this).find(".divnav").show()
	}, function() {
		$(this).find(".divnav").hide()
	})
	$(".bigNav .zatyd .right img").mouseenter(function() {
		$(this).css("opacity", ".7")
	}).mouseleave(function() {
		$(this).css("opacity", "1")
	})
	$("#select>li").mouseenter(function() {
		$("#select .first").css("display", "block");
	});
	$("#select .first").mouseleave(function() {
		$("#select .first").css("display", "none");
	});
	$(".dr_footer>.dr_tint>.wxandwb>.logo>a:eq(0)").mouseover(function() {
		$(".dr_footer>.dr_tint>.wxandwb>.logo>img").css("display", "block")
	})
	$(".dr_footer>.dr_tint>.wxandwb>.logo>a:eq(0)").mouseout(function() {
		$(".dr_footer>.dr_tint>.wxandwb>.logo>img").css("display", "none")
	})
	$(".dr_footer>.dr_footer-icon>li>a").mouseenter(function(){
		$(this).find("i").css("background-position-y","-60px")
	}).mouseleave(function(){
		$(this).find("i").css("background-position-y","0px")
	})
	
	
	
	
})
