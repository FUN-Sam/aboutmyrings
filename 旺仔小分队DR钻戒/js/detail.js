$(document).ready(function() {
	//图片切换js写法：
	//	var boxLeftP = document.getElementsByClassName("detail-boxLeftP")[0]
	//	var boxLeftPImg = boxLeftP.firstElementChild.firstElementChild
	//	var boxLeftLi1 = document.getElementById("detail-boxLeftLi1")
	//	var boxLeftLi2 = document.getElementById("detail-boxLeftLi2")
	//	var boxLeftLi3 = document.getElementById("detail-boxLeftLi3")
	//	var boxLeftLi4 = document.getElementById("detail-boxLeftLi4")
	//	boxLeftLi1.onmouseover = function() {
	//		boxLeftPImg.setAttribute("src", "../images/detail-1.jpg")
	//		boxLeftLi1.firstElementChild.style.border = "1px solid red"
	//	}
	//	boxLeftLi1.onmouseout = function() {
	//		boxLeftLi1.firstElementChild.style.border = ""
	//	}
	//	boxLeftLi2.onmouseover = function() {
	//		boxLeftPImg.setAttribute("src", "../images/detail-2.jpg")
	//		boxLeftLi2.firstElementChild.style.border = "1px solid red"
	//	}
	//	boxLeftLi2.onmouseout = function() {
	//		boxLeftLi2.firstElementChild.style.border = ""
	//	}
	//	boxLeftLi3.onmouseover = function() {
	//		boxLeftPImg.setAttribute("src", "../images/detail-3.jpg")
	//		boxLeftLi3.firstElementChild.style.border = "1px solid red"
	//	}
	//	boxLeftLi3.onmouseout = function() {
	//		boxLeftLi3.firstElementChild.style.border = ""
	//	}
	//	boxLeftLi4.onmouseover = function() {
	//		boxLeftPImg.setAttribute("src", "../images/detail-4.jpg")
	//		boxLeftLi4.firstElementChild.style.border = "1px solid red"
	//	}
	//	boxLeftLi4.onmouseout = function() {
	//		boxLeftLi4.firstElementChild.style.border = ""
	//	}

	//图片切换   jQuery写法
	//获取所有的li，然后给所有的li遍历   然后再加点击事件     each：遍历的意思
	$(".detail-boxLeftUl").children().each(function(ele, index) {
		$(this).click(function() {
			var _thisSrc = $(this).find("img").attr("src") //attr获取当前的src值    find：寻找的意思
			console.log(_thisSrc)
			$(".small img").attr("src", _thisSrc) //设置初始化的src值  也就是改变路径     attr传一个值是获取  传两个值是改变
			$(".big img").attr("src", _thisSrc) //设置放大镜的src值   改变其路径
			for(var i = 0; i < $(".detail-boxLeftUl").children().length; i++) {
				$(".detail-boxLeftUl").children()[i].style.border = ""
			} //先循环清除所有li的边框样式
			$(this).css("border", "1px solid #ffa6a6") //然后再给当前点击的li加边框样式
		})
	})

	//放大镜
	//mouseover鼠标移入时让小div跟右侧的div显示 ==show       mouseout鼠标移出时让两个都消失==hide
	$(".detail-boxLeftP").mouseover(function() {
		$("#myDiv").show()
		$(".big").show()
	}).mouseout(function() {
		$("#myDiv").hide()
		$(".big").hide()
	})
	//mousemove 加移动事件
	$(".detail-boxLeftP").mousemove(function(e) {
		//获取移动的鼠标位置==鼠标距离浏览器的距离-自身图片距离浏览器的距离      -$("#myDiv").width()/2是为了让鼠标在移动的div正中间
		var l = e.clientX - $(".detail-boxLeftP").offset().left - $("#myDiv").width() / 2
		//+$(window).scrollTop()    鼠标上下滚动时的距离
		var t = e.clientY - $(".detail-boxLeftP").offset().top + $(window).scrollTop() - $("#myDiv").width() / 2
		//判断让移动的div不要出移动的区域范围
		if(l < 0) {
			l = 0
		} else if(l > $(".detail-boxLeftP").width() - $("#myDiv").width()) {
			l = $(".detail-boxLeftP").width() - $("#myDiv").width()
		}
		if(t < 0) {
			t = 0
		} else if(t > $(".detail-boxLeftP").height() - $("#myDiv").height()) {
			t = $(".detail-boxLeftP").height() - $("#myDiv").height()
		}
		//给span设置left  top 值
		$("#myDiv").css({
			"left": l,
			"top": t
		})
		//算需要放大的图片显示比例   
		var percentX = l / ($(".detail-boxLeftP").width() - $("#myDiv").width())
		var percentY = t / ($(".detail-boxLeftP").height() - $("#myDiv").height())
		//		console.log(percentX)
		//		console.log(percentY)
		//设置被放大div的left  top  值 
		$(".big img").css({
			"left": -percentX * ($(".big img").width() - $(".big").width()),
			"top": -percentY * ($(".big img").height() - $(".big").height())
		})
	})

	//戒托材质选择循环    点击
	//ul3liDom  拿到所有的li集合
	var ul3liDom = document.getElementById("ul3").getElementsByTagName("li")
	//循环给li加点击事件，然后给当前点击的li添加样式  current 
	for(var i = 0; i < ul3liDom.length; i++) {
		ul3liDom[i].onclick = function() {
			//先循环清除所有的li样式名
			for(var j = 0; j < ul3liDom.length; j++) {
				ul3liDom[j].className = ""
			}
			this.className = "current" //给当前点击的li加样式
			return false; //阻止默认的a标签跳转
		}
	}

	//尺寸选择循环 点击
	//ul4liDom   拿到所有的li集合
	var ul4liDom = document.getElementById("ul4").getElementsByTagName("li")
	//循环给li加点击事件，然后给当前点击的li添加样式  current 
	for(var i = 0; i < ul4liDom.length; i++) {
		ul4liDom[i].onclick = function() {
			//先循环清除所有的li样式名
			for(var j = 0; j < ul4liDom.length; j++) {
				ul4liDom[j].className = ""
			}
			this.className = "current" //给当前点击的li加样式
			return false;
		}
	}

	//底部点击转换
	//dbUl  拿到底部需要点击的的ul
	var dbUl = document.getElementsByClassName("detail-box1Top")[0].getElementsByTagName("ul")[0]
	//liDom 拿到底部需要点击的ul里面的所有li集合
	var liDom = dbUl.getElementsByTagName("li")
	//dbBox 拿到底部需要替换的所有div集合  一共四个wrap1、2、3、4
	var dbBox = document.getElementsByClassName("d-b-box")[0].children
	//循环给每个li加点击事件
	for(var i = 0; i < liDom.length; i++) {
		//		liDom[i].num = i   ******
		//给li添加一个index属性，设置值为每次循环的i，方便根据下标值找到当前需要显示的div
		liDom[i].setAttribute("index", i)
		liDom[i].onclick = function() {
			//			console.log(this.getAttribute("index"))
			//   每次进循环先清除所有样式
			for(var j = 0; j < liDom.length; j++) {
				//清除需要点击的li里面所有a标签的样式名字
				liDom[j].children[0].className = ""
				//默认让需要替换的所有div隐藏hide
				dbBox[j].className = "hide"
			}
			//			dbBox[this.num].className = "show"  *******

			//this.getAttribute("index"):拿当前点击的li里面的index值  也就是下标，然后根据下标来让当前的div显示
			dbBox[this.getAttribute("index")].className = "show"

			//给当前循环到的li下面的a加一个active  样式
			this.children[0].className = " active1"
			this.children[0].style.color="black"
			//		    plDom.children[0].src = "../images/rhgm.jpg"
			return false
		}
	}

	//	var li1Dom = document.getElementById("li1")
	//	var li2Dom = document.getElementById("li2")
	//	var li3Dom = document.getElementById("li3")
	//	var ul1Dom = document.getElementById("ul1")
	//	var tuDom = document.getElementById("tu")
	//	var plDom = document.getElementById("pl")
	//	li0Dom.onclick = function(){
	//      ul1Dom.style.display="block"
	//  	tuDom.style.display="block"
	//  	plDom.style.display="none"
	//  	li0Dom.firstElementChild.style.borderBottom="2px solid #000"
	//  	return false;
	//  	li1Dom1.firstElementChild.style.borderBottom=""
	//  	li1Dom2.firstElementChild.style.borderBottom=""
	//  	li1Dom3.firstElementChild.style.borderBottom=""
	//  }
	//	li1Dom.onclick = function(){
	//      ul1Dom.style.display="none"
	//  	tuDom.style.display="none"
	//  	plDom.style.display="block"
	//  	plDom.firstElementChild.setAttribute("src","../images/pinglun.png")
	//  	li1Dom.firstElementChild.style.borderBottom="2px solid #000"
	//  	return false;
	//  }
	//	li2Dom.onclick = function(){
	//		ul1Dom.style.display="none"
	//  	tuDom.style.display="none"
	//  	plDom.style.display="block"
	//  	plDom.firstElementChild.setAttribute("src","../images/shouhou.jpg")
	//  	li2Dom.firstElementChild.style.borderBottom="2px solid #000"
	//  	return false;
	//	}
	//	li3Dom.onclick = function(){
	//		ul1Dom.style.display="none"
	//  	tuDom.style.display="none"
	//  	plDom.style.display="block"
	//  	plDom.firstElementChild.setAttribute("src","../images/rhgm.jpg")
	//  	li1Dom.firstElementChild.style.borderBottom="2px solid #000"
	//  	return false;
	//	}

	//	var mya = document.getElementById("a")
	//		mya.onclick = function(){
	//			console.log("a被点击了")
	//			return false;//默认点a会跳转，加了这句就不会执行默认的跳转行为
	//		}

	//  li1Dom.addEventListener("click", function(e) {
	//		e = e || window.event;
	//		e.stopPropagation()
	//		e.cancelBubble = true;
	//		e.stopPropagation()?e.stopPropagation():e.cancelBubble=true
	//			ul1Dom.style.display="none"
	//  	    tuDom.style.display="none"
	//  	    plDom.style.display="block"	
	//		}, false)

})