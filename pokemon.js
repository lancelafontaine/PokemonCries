function playSound(soundfile) {
	document.getElementById("soundline1").innerHTML = '<audio src='+soundfile+' autoplay="autoplay" hidden="hidden">"Oops."</audio>';
}

function randomCry() {
	var randomNumber = Math.floor(Math.random()* (152 - 1)) + 1;
	document.getElementById("soundline1").innerHTML = '<audio src="./audio/'+randomNumber+'.mp3" autoplay="autoplay" hidden="hidden">"Oops."</audio>';
}

function chaos() {

}

function theme() {
	if (document.getElementById("soundline2").innerHTML === "") {
		document.getElementById("theme").value = "Pause Battle Theme";
		document.getElementById("soundline2").innerHTML = '<audio src="./audio/theme.mp3" autoplay="autoplay" hidden="hidden">"Oops."</audio>';
	} else {
		document.getElementById("theme").value = "Play Battle Theme";
		document.getElementById("soundline2").innerHTML = "";
	}
}