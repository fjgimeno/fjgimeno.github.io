
function ReadPageCookies() {
	while(true) {
		let x = document.cookie;

		if(x == "PageContent=Contact")
		{
			document.getElementById("Content").innerHTML='<object id="PageContent" class="content" type="text/html" data="./content/contact.html" ></object>';
		}
	}
}