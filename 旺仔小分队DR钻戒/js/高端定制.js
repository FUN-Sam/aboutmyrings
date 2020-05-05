$(document).ready(function(){
    var start = true;
	var current = -1;
	var reg=/^[0123]{1}$/
	$("#phone+a").click(function(){
		return false
	})
	$(".fpl").click(function(){
		current--
		if(!reg.test(current)) {
			current = 3;
			$(".lunbo").animate({
				"left": (current*-954)
			})
		}
		$(".lunbo").animate({
			"left": (current * -954)
		})
		console.log(current)
	})
	$(".fpr").click(function(){
		current++
		if(!reg.test(current)) {
			current = 0;
			$(".lunbo").animate({
				"left": "0"
			})
		}
		$(".lunbo").animate({
			"left": (current * -954)
		})
		console.log(current)
	})
    function slide() {
		if(start) {
			current++;
			console.log(current)
			if(!reg.test(current)) {
				current = 0;
				$(".lunbo").animate({
					"left": "0"
				})
			}
			$(".lunbo").animate({
                "left": (current * -954)
			})
		}
		setTimeout(slide, 1000)
	}
    slide();
    $(".lunbobox").mouseover(function() {
		start = false;
	}).mouseout(function() {
		start = true;
	})
	
})