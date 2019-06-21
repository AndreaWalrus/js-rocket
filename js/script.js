var doCoolStuff = function () {
	var currentClassName = document.getElementById("cool").className;

	if (currentClassName == "cool"){
		document.getElementById("cool").className = "cool blue";
	}else{
		document.getElementById("cool").className = "cool";
	}

	//document.getElementById("cool").className = "cool blue";
}

var sayMyName = function (name) {
	alert('My name is '+name);
}

var car = {
	make: "VW",
	type: "Polo",
	color: "blue",
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ["seat 1", "seat 2"],
	turnOn: function () {
		this.isTurnedOn = true;
		return 0;
	},
	fly: function () {
		//alert("fly");
		return alert("fly");
	},
	switchCar: function (isOn) {
		console.log("turn car "+isOn);
		if (isOn == true) {
			this.isTurnedOn = true;
		}else{
			this.isTurnedOn = false;
		}
	}
};

console.log("hello there friends!");