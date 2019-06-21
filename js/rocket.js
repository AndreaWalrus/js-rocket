var changeState = function (state) {
	document.body.className = "body-state"+state;

	if (state==2) {
		setTimeout(function(){
		document.getElementById("countdown").innerHTML = document.getElementById("countdown").innerHTML - 1;
		},1000);
	}
}