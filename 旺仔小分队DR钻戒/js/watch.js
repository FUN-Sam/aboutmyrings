//function fn(inid) {
//	console.log(inid); //调用时传入什么inid就是什么，这个的意思是我鼠标移上去，移到谁就跳到谁
//	var divdoms = document.getElementsByClassName("drring_highsearch-same"); //得到了下拉框
//	//让div都隐藏起来
//	for(var i = 0; i < divdoms.length; i++) {
//		divdoms[i].style.display = "none";
//	}
//	//让图片显示出来                     //content3
//	document.getElementById(inid).style.display = "block"
//	document.getElementById(inid).onmouseout = function() {
//		document.getElementById(inid).style.display = "none"
//	}
//}
$(document).ready(function() {
	
	
	
	$(".ring-highsearch .fl li").children(".span-list").hover(function() {
		$(this).find(".drring_highsearch-same").show()
	},function(){
		$(this).find(".drring_highsearch-same").hide()
	})
	$(".star").click(function(){
		$(this).toggleClass("starimg")
	})
})
window.onload = function() {
	var imgboxDom = document.getElementsByClassName("imgbox")[0]
	var imgboxDom01 = document.getElementsByClassName("imgbox01")[0]
	var imgboxDom02 = document.getElementsByClassName("imgbox02")[0]
	var imgboxDom03 = document.getElementsByClassName("imgbox03")[0]
	var imgboxDom04 = document.getElementsByClassName("imgbox04")[0]

	var imgDom = document.getElementsByClassName("img-pic2-1")
	var imgDom01 = document.getElementsByClassName("img-pic2-2")
	var imgDom02 = document.getElementsByClassName("img-pic2-3")
	var imgDom03 = document.getElementsByClassName("img-pic2-4")
	var imgDom04 = document.getElementsByClassName("img-pic2-5")
	imgboxDom.onmouseenter = function() {
		imgDom[0].style.display = "block"

	}
	imgboxDom.onmouseleave = function() {
		imgDom[0].style.display = "none"

	}

	imgboxDom01.onmouseenter = function() {
		imgDom01[0].style.display = "block"

	}

	imgboxDom01.onmouseleave = function() {
		imgDom01[0].style.display = "none"

	}

	imgboxDom02.onmouseenter = function() {
		imgDom02[0].style.display = "block"

	}

	imgboxDom02.onmouseleave = function() {
		imgDom02[0].style.display = "none"

	}

	imgboxDom03.onmouseenter = function() {
		imgDom03[0].style.display = "block"

	}

	imgboxDom03.onmouseleave = function() {
		imgDom03[0].style.display = "none"

	}

	imgboxDom04.onmouseenter = function() {
		imgDom04[0].style.display = "block"

	}

	imgboxDom04.onmouseleave = function() {
		imgDom04[0].style.display = "none"

	}

	//	$(".span-list").each(function(i,e){
	//		$(this).mouseover(function(e){
	//			
	//			e.stopPropagation()
	//			$(this).next().addClass("show")
	//			$(this).next().removeClass("hide")
	//		}).mouseout(function(){
	//			$(this).next().addClass("hide")
	//			$(this).next().removeClass("show")
	//		})
	//	})
	//	

}