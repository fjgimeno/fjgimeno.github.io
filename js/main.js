{
	var hideHeader;
	var lastScrollTop = 0;

	var showPP = false;
	var ppDiv = document.getElementsByClassName("privacy_policy")[0];
	var button = document.getElementsByClassName("pp_button")[0];
}

function ManagePP() {
	if(button == undefined)
		button = document.getElementsByClassName("pp_button")[0];

	if(showPP) {
		ppDiv.style.display = "block";
		button.innerHTML = "Hide Privacy Policy";
	} 
	else {
		ppDiv.style.display = "none";
		button.innerHTML = "Show Privacy Policy";
	}
}

function TogglePP() {
	showPP = !showPP;
	ManagePP();
}

function ChangeURL(url) {
	document.location.href = url;
}

/*Resizer Starts*/
	var expanded = false;
	var resizing = false;
	var disableButton = false;
	var resizerTimer;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var width;

	{
		if(!isFirefox) {
			width = $(document).width();
		}
		else {
			width = window.innerWidth;
		}
	}
		
	var sideL = document.getElementsByClassName("col-2")[0];
	var sideR = document.getElementsByClassName("col-2")[0];
	var canvas = document.getElementsByClassName("col-9")[0];
	var button = document.getElementsByClassName("expand")[0];

	/*innerWidth*/
	function ExpandCanvas() {
		if((expanded == false || (width <= 1400 && resizing == true)) || disableButton) {
			expanded = true;
			sideL.style.width = "2.5%"; 
			sideR.style.width = "2.5%"; 				
			canvas.style.width = "95%";
		} else if (resizing == false){
			expanded = false;
			sideL.style.width = "16.66%"; 
			sideR.style.width = "16.66%";				
			canvas.style.width = "66.66%";
		}
	}

	function DisableResizer() {
		resizing = false;
	}

	function OnWindowResize() {
		if(!isFirefox) {
			width = $(document).width();
		}
		else {
			width = window.innerWidth;
		}

		if (width <= 730)
		{
			disableButton = true;
			button.style.display = "none";
		}
		else 
		{
			disableButton = false;
			button.style.display = "block";
		}

		ExpandCanvas();
		resizing = true;

		clearTimeout(resizerTimer);
		resizerTimer = setTimeout(DisableResizer, 100);
	}

	window.onresize = OnWindowResize;
/*Resizer ends*/