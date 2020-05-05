$(function() {

	//拿到左侧导航的每个li
	var $li = $(".box-12xz2 ul li")
	//	$(".box-12xz2ContentChild").eq(0).find("p").css({
	//		"animation": "xianshiqi 1s ease 0.8s  both"
	//	})
	//	$li.map(function(i, e) {
	//		$(this).click(function() {
	//			//				console.log(i)
	//			$(this).find("span:eq(1)").addClass("span2").parent("li").siblings().find("span:eq(1)").removeClass("span2")
	//			$(".box-12xz2Content").animate({
	//				top: i * -850
	//			}, 1000, function() {
	//
	//				$(".box-12xz2ContentChild").eq(i).find("p").css({
	//					"animation": "xianshiqi 1s ease 0.8s  both"
	//				}).parent(".box-12xz2ContentChild").siblings().find("p").css({
	//					"animation": "",
	//					"transform": "translateY(-80px)",
	//					"opacity": "0"
	//				})
	////				$(".box-12xz2ContentChild").eq(i).find("p").siblings()
	//			})
	//		})
	//	})
    
    //fn(i)==封装重复代码为函数，重复调用就可以了
	$li.map(function(i, e) {
		//动画
		function fn(i) {
			//遍历每个div里面的三个弹出框p，i为下标，e为具体到哪个弹出框
			$(".box-12xz2ContentChild").eq(i).find("p").each(function(i, e) {
				console.log(e)
				//因为三个弹出框出来的顺序不一样，当i为0也就是第一个出来的弹出框给他的延迟时间为0*0.3
				                     //当i为1也就是第二个出来的弹出框给他的延迟时间为1*0.3
				                     //当i为2也就是第三个出来的弹出框给他的延迟时间为2*0.3
				var num = i * 0.3
				var time = "0.8s " + num + "s"
				console.log(time)
				$(e).css({
					"transform": "translateY(0)",
					"opacity": "1",
					"transition": time
				}).parents(".box-12xz2ContentChild").siblings().find("p").css({
					"transform": "translateY(-80px)",
					"opacity": "0"
					//再找到当前div的其他所有兄弟姐妹，给里面的p全部清除动画
				})
			})
		}

		//初始化执行一次
		var flag = true //是否是第一次执行     默认执行第一次
		$(window).scroll(function() {
			var offsetTop = $(".box-12xz2").offset().top//第二个大盒子距离浏览器的top值
//			console.log(offsetTop)
//			console.log($(this).scrollTop())
            //如果鼠标滚动的距离大于或者等于盒子距离top值的一半  就让执行动画   也就是触发上面封装好的函数，传个参数0，也就是第一个div执行
			if(parseInt($(this).scrollTop()) >= offsetTop / 2) {
				if(flag) {
					fn(0)
					flag = false //执行完第一次之后就让变为false，再次滚动鼠标就不要再触发此事件
				}

			}
		})

        //给每个当前的li添加点击事件，点击完之后加样式   然后改变装轮播图的top值，每次改变当前下标值*图片的height值
        //改变完了之后给个回调函数，回调函数就是执行上面封装的动画效果函数
		$(this).click(function() {
			//				console.log(i)
			$(this).find("span:eq(1)").addClass("span2").parent("li").siblings().find("span:eq(1)").removeClass("span2")
			$(".box-12xz2Content").animate({
				top: i * -850
			}, 1000, function() {
				//				$(".box-12xz2ContentChild").eq(i).find("p").each(function(i, e) {
				//					var num = i * 0.3
				//					var time = "0.8s " + num + "s"
				//					console.log(time)
				//					$(e).css({
				//							"transform": "translateY(0)",
				//							"opacity": "1",
				//							"transition": time
				//						}).parents(".box-12xz2ContentChild").siblings().find("p").css({
				//							"transform": "translateY(-80px)",
				//							"opacity": "0"
				//						})

				//
				//				})

				fn(i)  
			})
		})
	})
	
	
	var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate();
    $("#d11").val(year + "-" + mon + "-" + date) 
    $(".box-12xz3-bottom2-e a").click(function(){
    	var $select1 = $("#select1").find("option:selected").text()
    	var $select2 = $("#select2").find("option:selected").text()
    	var $name = $("#textname").val()
    	var $phone = $("#textphone").val()
    	//弹出框
        var $alert = $(".box-12xz4")
    	var reg = /^1[0-9]{10}$/
    	if($select1=="请选择城市"||$select2=="请选择店铺"||$name==""||$phone==""){
            alert("请填写完整信息")
    		return false
    	}else if(!reg.test($phone)){
    		console.log(1)
    		alert("请填写正确的电话号码")
    		return false
    	}else{
    		$alert.show()
    		var num=5
			var value=$(".num")
			setInterval(function(){
			   	num--
			   	value.html(num)
			   	if(num==0) $alert.remove()
			},1000)
    		return false	
        }  	
    })
    
    
    //二级联动
    var checkE = '{"巴黎":["巴黎-卢浮宫店"],"香港":["香港-尖沙咀店","香港-铜锣湾店","香港-港隆城店"],"北京":["北京-龙湖长安天街店","北京-新中关购物中心店","北京-银泰in88旗舰店"],"天津市":["天津-海信广场店","天津-陆家嘴店"],"上海市":["上海-香港广场店","上海-来福士广场店","上海-合生汇广场店"],"湖北省":["武汉-光谷店","武汉-江汉路店","武汉-世界城广场店"]}';
    var kind = eval('(' + checkE + ')'); //计算某个字符串，并执行其中的的 JavaScript 代码
	for(var key in kind) {
		$("#checkE").append("<option value='" + key + "'>" + key + "</option>");
	}
	$("#checkE").change(function() {
		var checkEval = $(this).val();
		$("#checkFood").html('<option value="">请选择店铺</option>');
		for(var k in kind[checkEval]) {
			var now_food = kind[checkEval][k];
			$("#checkFood").append('<option value="' + now_food + '">' + now_food + '</option>');
		}
	});
				
   
   
   
    
})