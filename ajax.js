function ajax(url,fnsucc,fnfaild){
if(window.XMLHttpRequest){
		//这里用window的原因是不用window IE6报错，视为js中未定义的变量，加了window则视为未定义的属性，返回undefined，这正是我们想要的，if判断为假
			var oajax=new XMLHttpRequest();//除IE6的所有浏览器
			//XMLHttpRequest为真正的ajax对象
		}
		else{
			var oajax=new ActiveXObject('microsoft.XMLHTTP');//兼容IE6
		}
		//2.连接服务器
		//open(方法，url,异步传输：默认为true)
		oajax.open("GET",url,true);

		//3.发送请求
		oajax.send();

		//4.接受返回值
		oajax.onreadystatechange=function(){
		//onreadyStateChange事件是在readyState属性发生改变时触发
			if(oajax.readyState==4){
		// readyState有五种可取值0：尚未初始化，1：正在加载，2：加载完毕，3：正在处理；4：处理完毕
				if(oajax.status==200){
					fnsucc(oajax.responseText)
				}
				else{
					if(fnfaild){
						fnfaild(oajax.status)
					}
				}
			}
		}
	}