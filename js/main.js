{
	var hideHeader;
	var lastScrollTop = 0;

	var showPP = false;
	var ppDiv = document.getElementsByClassName("privacy_policy")[0];
	var button = document.getElementsByClassName("pp_button")[0];
}

window.addEventListener('contextmenu', (event) => {
  event.preventDefault()
})

window.addEventListener('mousedown', (event) => {
	if( event.which == 2 ) {
		event.preventDefault()	
		console.log("Middle Button");
	}
	if( event.which == 0 ) {
		event.preventDefault()	
		console.log("Left Button");
	}
});

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

function ChangeURL(url, mouseBtn) {
	if(url == './cv/index.html'/* || ( mouseBtn != 'undefined' && mouseBtn.button == 1)*/)
		window.open(url, '_blank');
	else
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
	var submitBtn = document.getElementById("submit");
	if(submitBtn != undefined)
		submitBtn.disabled = true;
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

function DateHandler() {
	let dateP = document.getElementsByClassName("date")[0];
	const date = new Date();

	let months = new Array();
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

	let days = new Array();
	days[0] = "Sunday";
	days[1] = "Monday";
	days[2] = "Tuesday";
	days[3] = "Wednesday";
	days[4] = "Thursday";
	days[5] = "Friday";
	days[6] = "Saturday";

	dateP.innerHTML = "Today is " + days[date.getDay()] + ", " + date.getDate() + " of " + months[date.getMonth()] + " of " + date.getFullYear() + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
}

function ShowOverlay(charname) {
	//Variables:
	var GFPageDesc = "Girlfriend, also referred to as The Girl in Dennis Wedin's artbook, is a supporting character in Hotline Miami. She is Jacket's girlfriend who he rescued from the Producer's villa in Decadence. <br><br> She is also heavily associated with Don Juan, sharing identical top down sprites. In Hotline Miami 2: Wrong Number, her role in Midnight Animal is played by Rachael Ward." + 
					"<br><br>Prior to the events of Hotline Miami, Jacket had been dumped by one or more previous girlfriends, as Beard consoles him on the loss of one on April 23rd, 1986 and there's a stripped bed in Jacket's apartment during the early parts of Hotline Miami.";
	
	var GFPageEvents = "She is first seen in Chapter 3, Decadence, in the same room as the Producer, surrounded by cameras and appearing to have been drugged and abused, and perhaps struggling with a substance addiction which the Russian Mafia feeds to keep her in their grasp. After the Producer is killed by Jacket, she tells him to \"finish what he started\" and that she \"knew it would end like this.\" Instead of killing or abandoning her, Jacket rescues her, taking her to his apartment where she recuperates and then moves in permanently." +
	"<br><br>She is referred to as Jacket's girlfriend, implying that they become romantically involved. After her arrival Jacket's flat becomes cleaner and new items are gradually added to the apartment, such as flowers on the kitchen table. She starts to sleep in the same room as Jacket in a bed of her own in Chapter 8." +
	"<br><br>She is later killed by Richter, another masked assassin working for 50 Blessings. She was presumably killed either because she was a witness to Jacket's involvement with 50 Blessings, or simply because she was present when Richter appeared at the apartment to confront Jacket. Jacket later interrogates Richter at the police station and the player is given the option to strangle him or to spare him. Regardless, Richter is alive in Hotline Miami 2: Wrong Number.";
  
	//document.getElementById("content-overlay").style.display = "block";
	  document.getElementById("content-overlay-bg").style.display = "block";
	  document.getElementsByClassName("main")[0].style.overflow = "hidden";

	  document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = GFPageDesc;
	  document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = GFPageEvents;
	  document.getElementsByClassName("content-overlay-content-tittle")[0].innerHTML = charname;
	  document.getElementsByClassName("content-overlay-content-tittle")[1].innerHTML = charname;
}

function HideOverlay() {
  //document.getElementById("content-overlay").style.display = "none";
  document.getElementById("content-overlay-bg").style.display = "none";
  document.getElementsByClassName("main")[0].style.overflow = "auto";
}

//Firebase started
// Initialize Firebase
var firebase;
var config = {
  apiKey: "FIREBASE_KEY_TEMP",
  authDomain: "contactform-2086d.firebaseapp.com",
  databaseURL: "https://contactform-2086d.firebaseio.com",
  projectId: "contactform-2086d",
  storageBucket: "contactform-2086d.appspot.com",
  messagingSenderId: "35839015044"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}

let containingElement = document.getElementById('content-overlay');
document.body.addEventListener('click', function( event ){
	if( !containingElement.contains( event.target ) ){
		HideOverlay();
	} 
});