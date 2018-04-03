window.addEventListener("load",function() {

	setTime();
	setTotalTime();
	var videoPlay = false;

	
	document.getElementById('play').addEventListener('click',playPause);
	document.getElementById('volume').addEventListener('change',changeVolume);
	document.getElementById('time').addEventListener('change',changeTime);
	document.getElementById('test').addEventListener('click',tests);

	function playPause(){
		if (videoPlay) {
			document.getElementById('video').pause();
			videoPlay = false;
		}else{
			document.getElementById('video').play();
			videoPlay = true;
		}

	}

	function changeVolume(){
		document.getElementById('video').volume = (document.getElementById('volume').value)/100;
	}

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
			if (document.getElementById('totalTime').value === null && document.getElementById('video').src !== "") {
				setTotalTime();
			}
		}
		setInterval(actualiser,1000);
	}

	function setTotalTime(){
		var str = "";
		var totalTime =  document.getElementById('video').duration;
		var seconde = totalTime%60 - (totalTime%60)%1;
		var minute = totalTime/60 - (totalTime/60)%1;
		str = minute + " : " + seconde;
		document.getElementById("totalTime").innerHTML = str;
	}

	function changeTime(){
		document.getElementById('video').currentTime = ((document.getElementById('time').value)*document.getElementById('video').duration)/100;
	}

	function tests(){
		console.log(document.getElementById('video').duration);
	}


});
