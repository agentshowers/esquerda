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

function muteToggle (basepath){
	var isMuted = document.getElementById('player').muted;
	if (isMuted) {
		document.getElementById("imgMute").src=basepath+"/images/unmute.png";
	}
	else {
		document.getElementById("imgMute").src=basepath+"/images/mute.png";
	}
	document.getElementById('player').muted=!isMuted;
}

snowStorm.followMouse = false;
snowStorm.excludeMobile = false;

function startAudio () {
	document.getElementById('player').play();
	document.documentElement.removeEventListener('touchstart', startAudio, true);
};

if (detectmob()) {
	document.documentElement.addEventListener('touchstart', startAudio, true);
}