function ajax_tool(method, url, data,success) {
	var ajax = new XMLHttpRequest();
	if(method == "GET") {
		if(data) {
			url += "?";
			url += data;
		}
		ajax.open(method, url, true);
		ajax.send();
	} else {
		ajax.open(method, url, true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		if(data) {
			ajax.send(data);
		}
		ajax.send();
	}
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			success(ajax.responseText);
		}
		
	}
};