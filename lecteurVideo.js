
setTime();
setTotalTime();
var videoPlay = false;

//ensemble des Listeners 
document.getElementById('play').addEventListener('click',playPause);
document.getElementById('volume').addEventListener('change',changeVolume);
document.getElementById('time').addEventListener('change',changeTime);

//Fonction pour play ou pause la vidéo
function playPause(){
	var buttonPlay = document.getElementById("play");
	if (videoPlay) {
		document.getElementById('video').pause();
		videoPlay = false;
		buttonPlay.value='PLAY';
	}else{
		document.getElementById('video').play();
		videoPlay = true;
		buttonPlay.value='PAUSE';
	}
}

	//permet de changer le volume de la video/audio
	function changeVolume(){
		document.getElementById('video').volume = (document.getElementById('volume').value)/100;
	}

//actualise le temps actuel de la video/audio
function setTime(){
    function actualiser(){
        var str = "";
        var currentTime =  document.getElementById('video').currentTime;
        var seconde = currentTime%60 - (currentTime%60)%1;
        var minute = currentTime/60 - (currentTime/60)%1;
        str = minute + " : " + seconde;
        var tempspourcent = (currentTime*100)/document.getElementById('video').duration;
        document.getElementById("time").value = tempspourcent - tempspourcent%1;
        document.getElementById("currentTime").innerHTML = str;
        if (document.getElementById('totalTime').value === undefined && document.getElementById('video').src !== "") {
            setTotalTime();
        }
    }
    setInterval(actualiser,1000);
}

//sert à définir le temps total de la video/audio
function setTotalTime(){
    var str = "";
    var totalTime =  document.getElementById('video').duration;
    var seconde = totalTime%60 - (totalTime%60)%1;
    var minute = totalTime/60 - (totalTime/60)%1;
    str = minute + " : " + seconde;
    document.getElementById("totalTime").innerHTML = str;
}

//sert à gérer quand on veut aller à un point précis de la video
function changeTime(){
	document.getElementById('video').currentTime = ((document.getElementById('time').value)*document.getElementById('video').duration)/100;
}

	



