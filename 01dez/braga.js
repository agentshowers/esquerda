var currSong = 'player';
		
function playSong(newSong){         
	if (newSong != ""){
		if(currSong != "" ) {
			document.getElementById(currSong).pause();
		}           
		var newSongEl = document.getElementById(newSong);
		newSongEl.currentTime = 0;
		newSongEl.play();
		currSong = newSong;
	}
}

function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)){
		return true;
	}
	else {
		return false;
	}
}

function muteToggle (){
	var isMuted = document.getElementById(currSong).muted;
	if (isMuted) {
		document.getElementById("imgMute").src="../images/unmute.png";
	}
	else {
		document.getElementById("imgMute").src="../images/mute.png";
	}
	document.getElementById(currSong).muted=!isMuted;
}

function startAudio () {
	document.getElementById('player').play();
	document.documentElement.removeEventListener('touchstart', startAudio, true);
};

if (detectmob()) {
	document.documentElement.addEventListener('touchstart', startAudio, true);
}