function cToF(){
	
	var cTemp = parseInt(document.getElementById("value1").value);
	
	var cToFahr = cTemp * 9 / 5 + 32;
	
	var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	
}

function fToC(){
	
	var fTemp = parseInt(document.getElementById("value1").value);
	
	var fToC = (fTemp-32) * 5 / 9;
	
	var message = fTemp+'\xB0F is ' + fToC + ' \xB0C.'; 
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	
}

