var randomNumber = Math.floor(Math.random()* (152 - 1)) + 1;
var i;

function playSound(soundfile) {
	document.getElementById("soundline1").innerHTML = '<audio autoplay="autoplay" hidden="hidden"><source src="'+soundfile+'.mp3" /><source src="'+soundfile+'.ogg" /><source src="'+soundfile+'.mp3.wav" /></audio>';

}

function randomCry() {
	document.getElementById("soundline1").innerHTML = '<audio autoplay="autoplay" hidden="hidden"><source src="'+randomNumber+'.mp3" /><source src="'+randomNumber+'.ogg" /><source src="'+randomNumber+'.mp3.wav" /></audio>';
}

function theme() {
	if (document.getElementById("soundline2").innerHTML === "") {
		document.getElementById("theme").value = "Pause Battle Theme";
		document.getElementById("soundline2").innerHTML = '<audio autoplay="autoplay" hidden="hidden"><source src="theme.mp3.wav" /></audio>';
	} else {
		document.getElementById("theme").value = "Play Battle Theme";
		document.getElementById("soundline2").innerHTML = "";
	}
}