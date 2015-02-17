var randomNumber = Math.floor(Math.random()* (152 - 1)) + 1;
var i;

function playSound(soundfile) {
	document.getElementById("soundline1").innerHTML = '<audio src="'+soundfile+'.mp3" autoplay="autoplay" hidden="hidden"></audio>';
}

function randomCry() {
	document.getElementById("soundline1").innerHTML = '<audio src="'+randomNumber+'.mp3" autoplay="autoplay" hidden="hidden"></audio>';
}

function theme() {
	if (document.getElementById("soundline2").innerHTML === "") {
		document.getElementById("theme").value = "Pause Battle Theme";
		document.getElementById("soundline2").innerHTML = '<audio src="theme.mp3" autoplay="autoplay" hidden="hidden"></audio>';
	} else {
		document.getElementById("theme").value = "Play Battle Theme";
		document.getElementById("soundline2").innerHTML = "";
	}
}
