function ajax_tool(option){
	var ajax = new XMLHttpRequest();
	if(option.method == "GET"){
		if(option.data){
			option.url += "?";
			option.url += option.data;
		}
		ajax.open(option.method,option.url,true);
		ajax.send();
	}else{
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
		ajax.open(option.methon,option.url,true);
		if(option.data){
			ajax.send(data);
		}
		ajax.send();
	}
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			option.success(ajax.responseText);
		}
	}
	
}
