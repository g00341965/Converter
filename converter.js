function cToF(){
	
	var cTemp = parseInt(document.getElementById("value1").value);
	
	var cToFahr = cTemp * 9 / 5 + 32;
	
	var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	
}
