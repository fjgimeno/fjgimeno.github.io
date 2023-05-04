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
		
	var sideL = document.getElementsByClassName("sideL col-2")[0];
	var sideR = document.getElementsByClassName("sideR col-2")[0];
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

{
	document.getElementById("submit").disabled = true;
}

function ClearInputBox(element) {
	if(element.value == "First name..." || element.value == "Last name..." || element.value == "E-Mail...")
	{
		element.value = "";
	}

	var ele = document.getElementById("fname");
	if(ele.value == "" && ele.id != element.id)
	{
		ele.value = "First name..."
	}

	ele = document.getElementById("lname");
	if(ele.value == "" && ele.id != element.id)
	{
		ele.value = "Last name..."
	}

	ele = document.getElementById("email");
	if(ele.value == "" && ele.id != element.id)
	{
		ele.value = "E-Mail..."
	}
}

function ActivatePPolicyButton() {
	var check = document.getElementById("ppolicy");
	if(check.checked) {
		document.getElementById("submit").disabled = false;
	}
	else  {
		document.getElementById("submit").disabled = true;
	}
}

{
	let dateP = document.getElementsByClassName("date")[0];
	const date = new Date();
	let months = new Array();
	{
		months[0] = "January";
		months[1] = "February";
		months[2] = "March";
		months[3] = "April";
		months[4] = "May";
		months[5] = "June";
		months[6] = "July";
		months[7] = "August";
		months[8] = "September";
		months[9] = "October";
		months[10] = "November";
		months[11] = "December";
	}
	let days = new Array();
	{
		days[0] = "Sunday";
		days[1] = "Monday";
		days[2] = "Tuesday";
		days[3] = "Wednesday";
		days[4] = "Thursday";
		days[5] = "Friday";
		days[6] = "Saturday";
	}

	{
		dateP.innerHTML = "Today is " + days[date.getDay()] + ", " + date.getDate() + " of " + months[date.getMonth()] + " of " + date.getFullYear() + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	}
}