{
	var hideHeader;
	var lastScrollTop = 0;
}

$(document).ready(function() 
	{
		var element = $("#Content").contents().find('#Main');
		element.click(function() {
		  alert( "Handler for .click() called." );
		});
	}
);

window.addEventListener (
	"message",
	(event) => {
		// Do we trust the sender of this message?  (might be
		// different from what we originally opened, for example).
		if (event.origin !== "gimenoor.github.io") return;
		else console.log("Message received\n");
	},
	false
);

function ToggleHeader(posy) {
	if(posy >= 10)
	{
		headerElem.toggle(true);
	}
	else 
	{
		headerElem.toggle(false);
	}
}