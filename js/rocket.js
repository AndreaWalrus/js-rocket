var timer = null;

var countdownNum = 10;

var changeState = function (state) {
	document.body.className = "body-state"+state;

	clearInterval(timer);
	countdownNum = 10;
	document.getElementById("countdown").innerHTML = countdownNum;

	if (state==2) {
		timer = setInterval(function () {
			countdownNum = countdownNum - 1;
			document.getElementById("countdown").innerHTML = countdownNum;	
			if (countdownNum<=0){
				changeState(3);
			}
		}, 500);	
	}else if(state == 3){
		var success = setTimeout(function() {
			var randomNumber = Math.round(Math.random()*10);

			console.log("randomNumber: ", randomNumber);

			//succes
			if (randomNumber>5) {
				changeState(4);
			//failure
			}else{
				changeState(5);
			}
		}, 2000);
	};
}