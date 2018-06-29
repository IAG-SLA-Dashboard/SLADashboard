
function resolutionIncRedSoundPlay(){	
	if(sessionStorage.getItem('redCountForSound') > 0 ){
		myAudio = new Audio('sound/ResolutionSLABReachWarning.mp3');
        myAudio.play();
	}	
}