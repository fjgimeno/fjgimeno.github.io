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
	{ // Characters Region
		var GFPageDesc = "Girlfriend, also referred to as The Girl in Dennis Wedin's artbook, is a supporting character in Hotline Miami. She is Jacket's girlfriend who he rescued from the Producer's villa in Decadence. <br><br> She is also heavily associated with Don Juan, sharing identical top down sprites. In Hotline Miami 2: Wrong Number, her role in Midnight Animal is played by Rachael Ward." + 
						"<br><br>Prior to the events of Hotline Miami, Jacket had been dumped by one or more previous girlfriends, as Beard consoles him on the loss of one on April 23rd, 1986 and there's a stripped bed in Jacket's apartment during the early parts of Hotline Miami.";
	
		var GFPageEvents = "She is first seen in Chapter 3, Decadence, in the same room as the Producer, surrounded by cameras and appearing to have been drugged and abused, and perhaps struggling with a substance addiction which the Russian Mafia feeds to keep her in their grasp. After the Producer is killed by Jacket, she tells him to \"finish what he started\" and that she \"knew it would end like this.\" Instead of killing or abandoning her, Jacket rescues her, taking her to his apartment where she recuperates and then moves in permanently." +
		"<br><br>She is referred to as Jacket's girlfriend, implying that they become romantically involved. After her arrival Jacket's flat becomes cleaner and new items are gradually added to the apartment, such as flowers on the kitchen table. She starts to sleep in the same room as Jacket in a bed of her own in Chapter 8." +
		"<br><br>She is later killed by Richter, another masked assassin working for 50 Blessings. She was presumably killed either because she was a witness to Jacket's involvement with 50 Blessings, or simply because she was present when Richter appeared at the apartment to confront Jacket. Jacket later interrogates Richter at the police station and the player is given the option to strangle him or to spare him. Regardless, Richter is alive in Hotline Miami 2: Wrong Number.";
	
		var AlexPageDesc = "Alex Davis, also known as Swan #1, is a playable protaganist in Hotline Miami 2: Wrong Number. She is a member of The Fans who is part of an inseparable duo known as the Swans with her twin brother Ash Davis, making them the third playable Fans. They are unlocked following Corey and Tony for the scene Execution.<br><br><br> Donning a #1 swan mask, Alex wields a chainsaw and wears green football padding as body armor, dark green pants, orange fingerless gloves and shoulder pads, and an orange backpack. ";
		var AlexPageEvents = "<h3>1985</h3> Alex was a US soldier stationed in Hawaii during the Soviet-American War with her brother and the other Fans (Corey, Tony, and Mark). On March 17th, Alex smokes a cigarette facing away from the bar, while Ash tinkers with a radio next to her. As their commander is interviewed outside by the journalist Evan Wright, Tony drinks beer on the opposite end from Alex while Corey and Mark are separated from the Swans by a cash register.<br><br><h3>Late October, November 1991</h3>On October 31st, Alex is first seen at the Fans' Halloween party. She is the first of the Fans that the player takes control of, making her the only Fan standing. Alex is also the only Fan who does not have dialogue in this scene. Tony and Ash's discontent with the party leads to Mark proposing that the Fans go for a ride, much to Ash's excitement. The Fans enter a mafia-controlled electronics workshop and kill everyone in the building.<br><br>On November 5th, Alex and Ash protest with signs outside of the courthouse holding Jacket's trial, suggesting that the siblings are the most concerned with freeing Jacket and may be the most politically active of the Fans. Unlike Ash, Alex steadies her sign with only one hand.<br><br>On November 11th, Alex appears in the Hank's bar easter egg. The Fans sit around a table filled with bottles. Again, Alex is the only Fan standing as she clutches her left hand on Ash's right shoulder, who is uncharacteristically hard-drinking in this scene.<br><br>On November 22nd or soon after, Ash tells the Fans that his acquaintance Andy informed him about a Russian Henchman's location, directing them to their next killing spree. After clearing the floor, the Swans, Corey, and Mark surround the intoxicated Henchman sitting in an empty room. Ash drags the Henchman from the couch onto the floor and Corey bashes him in the head, possibly intending to execute him with one hit. However, the Henchman continues rambling, prompting Alex to repeatedly stomp on his crotch while Mark and Corey proceed beating the Henchman to death.<br><br><h3>December 1991</h3>On December 2nd, Alex stands against the wall rolling a blunt across from Corey and the other Fans. Her brother suggests a new job from his friend Jack to help bring home his sister, who has been missing for several weeks. Tony argues that the Fans are now doing \"house calls\", but Alex exclaims that she \"sure as hell ain't staying\" and Tony reluctantly agrees he will come along.";

		var AshPageDesc = "Ash Davis, also known as Swan #2, is a playable protagonist in Hotline Miami 2: Wrong Number. He is a member of The Fans who is part of an inseparable duo known as the Swans with his twin sister Alex Davis, making them the third playable Fans. They are unlocked following Corey and Tony for the scene Execution.<br><br>Donning a #2 swan mask, Ash wields dual submachine guns and wears red football padding as body armor, dark green pants, orange fingerless gloves, and shoulder pads, and an orange backpack.";
		var AshPageEvents = "<h3>1985</h3> Ash was a US soldier stationed in Hawaii during the Soviet-American War with his sister and the other Fans (Corey, Tony, and Mark). On March 17th, Ash tinkers with a radio next to his sister while Alex smokes a cigarette facing away from the bar. As their commander is interviewed outside by the journalist Evan Wright, Tony drinks beer on the opposite end from Ash while Corey and Mark are separated from the Swans by a cash register.<br><br><h3>Late October, November 1991</h3>On October 31st, Ash is first seen at the Fans' Halloween party. He is the second of the Fans that the player takes control of, joining Alex after Corey's death. Ash is the most enthusiastic about the party and suggests that the Fans go for a ride, much to Alex's annoyance. The Fans enter a mafia-controlled electronics workshop and kill everyone in the building.<br><br>On November 5th, Ash and Alex protest with signs outside of the courthouse holding Jacket's trial. Ash expresses his anger by throwing his sign to the ground, while Alex steadies her sign with only one hand.<br><br>On November 11th, Ash appears in the Hank's bar easter egg. The Fans sit around a table filled with bottles. Ash, who is usually energetic, appears uncharacteristically hard-drinking in this scene.<br><br>On November 22nd or soon after, Ash tells the Fans that his acquaintance Andy informed him about a Russian Henchman's location, directing them to their next killing spree. After clearing the floor, the Swans, Corey, and Mark surround the intoxicated Henchman sitting in an empty room. Ash drags the Henchman from the couch onto the floor and Corey bashes him in the head, possibly intending to execute him with one hit. However, the Henchman continues rambling, prompting Alex to repeatedly stomp on his crotch while Mark and Corey proceed beating the Henchman to death.<br><br><h3>December 1991</h3>On December 2nd, Ash stands against the wall rolling a blunt across from Corey and the other Fans. He suggests a new job from his friend Jack to help bring home his sister, who has been missing for several weeks. Tony argues that the Fans are now doing \"house calls\", and Ash agrees to bring Tony along.";

	
		var BeardPageDesc = "<b>\"No need to thank me, kid. It's on the house. You would've done the same for me, right?\"</b> - Beard<br><br>Beard, also known as The Soldier, Lieutenant or Nicke, is the tritagonist of Hotline Miami and a playable character in Hotline Miami 2: Wrong Number. Though he refers to himself by numerous aliases in Wrong Number as part of a code language (James, Dan, Ben Smith), his real name is unknown. ";
		var BeardPageEvents = "<h3>March 17th, 1985</h3>In a Hawaiian bar serving US military troops, Beard, Jacket, Barnes, and Daniels are discussing how the heat seems to be making them get drunk faster. Beard says he's had enough and decides to head back to camp, but Daniels boasts that he can keep going and tells them to leave him there. Barnes takes offense to Daniels telling him what to do and is determined to outdrink him. Beard says not to go too hard because they have a job to do tonight. Jacket, already standing and smoking, follows Beard's advice and leaves with him.<br><br>Outside, a war correspondent is interviewing a helmeted officer but quickly turns and asks to have his photographer take their picture. Beard wants a copy, and offers to give Evan his address, but the new Polaroid camera makes that exchange of personal information (and a chance of keeping in regular contact with Beard) unnecessary. Evan asks them to step into the sun for better light. Beard puts his arm around Jacket who gives a peace sign, and Beard takes the second copy of the picture.";

		var BikerPageDesc = "Biker, also known as The Rider, is a playable character in Hotline Miami and a major character in Hotline Miami 2: Wrong Number. He is a mysterious and enigmatic figure who wears a distinctive black motorcycle helmet with a white skull design on it.";
		var BikerPageEvents = "<h3>Hotline Miami</h3>Biker is an enforcer for the 50 Blessings organization and is initially portrayed as an antagonist. He receives phone calls from the organization instructing him to eliminate Russian Mafia members. Biker reluctantly carries out his missions, questioning the morality of his actions. As the game progresses, Biker becomes disillusioned with 50 Blessings and begins investigating their motives. In the final chapter, Biker confronts the leader of 50 Blessings and learns the truth about their agenda.<br><br><h3>Hotline Miami 2: Wrong Number</h3>In Hotline Miami 2: Wrong Number, Biker plays a larger role and is a playable character in several chapters. His story takes place both before and after the events of the first game. Biker's sections provide additional context and insight into the events of Hotline Miami. He encounters various characters and uncovers more information about the conspiracy surrounding 50 Blessings. Biker's story ultimately intersects with other characters, contributing to the overall narrative of the game.<br><br>Biker's gameplay mechanics in Hotline Miami 2 differ slightly from the first game. He is equipped with a cleaver as his default weapon and can perform executions with his motorcycle helmet. Biker's chapters often require strategic planning and precise execution, emphasizing his skill and resourcefulness as a character.";
	
		var CoreyPageDesc = "Corey, also known as The Henchman, is a playable character in Hotline Miami 2: Wrong Number. She is a member of The Fans and is often seen wearing a pink and white bunny mask.";
		var CoreyPageEvents = "<h3>1985</h3> Corey was a US soldier stationed in Hawaii during the Soviet-American War. She is a member of The Fans along with Ash, Alex, Tony, and Mark. On March 17th, Corey is separated from the Swans by a cash register inside a Hawaiian bar serving US military troops. Corey engages in a brief conversation with Mark, expressing her dissatisfaction with the war and her desire to go home.<br><br><h3>Late October, November 1991</h3>On October 31st, Corey is first seen at the Fans' Halloween party. She is the third Fan that the player takes control of, joining Ash and Alex after Tony's death. Corey shows signs of frustration during the party and suggests that the Fans go for a ride. The Fans enter a mafia-controlled electronics workshop and kill everyone in the building.<br><br>On November 5th, Corey and the other Fans protest with signs outside of the courthouse holding Jacket's trial. Corey holds a sign with both hands, expressing her anger and frustration.<br><br>On November 11th, Corey appears in the Hank's bar easter egg. The Fans sit around a table filled with bottles. Corey appears to be more level-headed and focused compared to the other Fans in this scene.<br><br>On November 22nd or soon after, Corey joins the Swans, Ash, and Mark in their next killing spree after Ash receives information about a Russian Henchman's location. Corey and Mark surround the intoxicated Henchman sitting in an empty room, and Corey proceeds to beat him to death with her fists while Ash and Mark contribute to the assault.<br><br><h3>December 1991</h3>On December 2nd, Corey stands against the wall with the other Fans as Ash suggests a new job from his friend Jack to help bring home Alex, who has been missing for several weeks. Corey participates in the discussion about taking on the job and agrees to accompany Ash.";


		var DjuanPageDesc = "Don Juan is one of the internal voices experienced by Jacket, the protagonist of Hotline Miami. He represents one of Jacket's inner thoughts or hallucinations throughout the game. Don Juan's presence adds a layer of psychological depth to the narrative and explores Jacket's inner struggles.";
		var DjuanPageEvents = "Don Juan's presence is felt during various moments in the game as Jacket progresses through his violent missions. Don Juan serves as a constant companion to Jacket, engaging in conversations and providing commentary on the events taking place. Their interactions often reveal Jacket's inner thoughts, doubts, and motivations, blurring the line between reality and his fragmented psyche.";
		DjuanPageEvents += "<br><br>Don Juan's comments and interactions with Jacket provide insights into Jacket's state of mind and the psychological toll the events take on him. Don Juan's presence may serve as a manifestation of Jacket's guilt, trauma, or internal conflicts. He pushes Jacket to continue on his path of violence, questioning the nature of his actions and the consequences they have on himself and others.";
		DjuanPageEvents += "<br><br>Throughout the game, Don Juan's role evolves, reflecting Jacket's changing mindset and emotional state. His presence serves as a constant reminder of the distorted reality Jacket finds himself in and the psychological journey he is undertaking.";

			
		var EvanPageDesc = "Evan Wright is a journalist character in Hotline Miami and Hotline Miami 2: Wrong Number. He plays a role in uncovering and reporting on the events surrounding the masked killers and the 50 Blessings organization.";
		var EvanPageEvents = "<h3>Hotline Miami</h3> In Hotline Miami, Evan Wright is a journalist conducting interviews and investigations related to the masked killers and the violence occurring in Miami. He appears in various cutscenes, interacting with different characters and trying to uncover the truth behind the killings. Evan's pursuit of the story puts him in danger as he becomes entangled in the dangerous world of the masked killers.<br><br><h3>Hotline Miami 2: Wrong Number</h3> In Hotline Miami 2: Wrong Number, Evan Wright's role is further expanded upon. He continues his investigation into the masked killers and delves deeper into the web of conspiracy surrounding the events of Hotline Miami. Evan's actions and discoveries have significant implications for the overall narrative and the fate of the characters involved.";


		var JakePageDesc = "Jake is a character in Hotline Miami 2: Wrong Number. He is a member of the 50 Blessings organization and plays a role in the game's storyline.";
		var JakePageEvents = "<h3>March 10th, 1991</h3> Jake is introduced as one of the playable characters in Hotline Miami 2: Wrong Number. He receives phone calls from the 50 Blessings organization, which instructs him to carry out various violent missions. Jake's story unfolds as he follows these orders and navigates the dangerous world of the game.<br><br><h3>Hotline Miami 2: Wrong Number</h3> Throughout the game, Jake's missions and encounters with other characters shed light on his motivations and the nature of his involvement with 50 Blessings. His actions and decisions have consequences for both himself and the overall narrative of the game.";
		
		var JacketPageDesc = "Jacket is the main protagonist in Hotline Miami. He is a masked killer who receives mysterious phone calls urging him to carry out violent missions. Jacket's identity and background are shrouded in mystery, and he becomes a key figure in the events of the game.";
		var JacketPageEvents = "<h3>Hotline Miami</h3> In Hotline Miami, Jacket receives phone calls from an unknown source, providing him with addresses and instructions for his assassination missions. He wears different animal masks as he carries out these brutal killings. As Jacket progresses through the game, his actions and encounters with other characters uncover a larger conspiracy and a deeper connection to the violent underworld of Miami.<br><br><h3>Hotline Miami 2: Wrong Number</h3> In Hotline Miami 2: Wrong Number, Jacket's story continues alongside other interconnected narratives. His role in the events of the game becomes more significant, and his actions have far-reaching consequences. Jacket's story in Wrong Number sheds further light on his past, motivations, and the impact of his actions in the first game.";


		var MpardoPageDesc = "Manny Pardo is a character in Hotline Miami 2: Wrong Number. He is a corrupt police officer who becomes embroiled in the violent events of the game. Pardo's character provides a unique perspective on the dark and gritty world of Hotline Miami, blurring the lines between law enforcement and criminality.";
		var MpardoPageEvents = "<h3>Hotline Miami 2: Wrong Number</h3> Manny Pardo's story in Hotline Miami 2: Wrong Number revolves around his career as a police officer and his involvement in the criminal underworld. As a corrupt cop, Pardo participates in violent activities and engages in morally questionable actions, using his position of authority to further his own interests.";
		MpardoPageEvents += "<br><br>Throughout the game, Pardo's path intersects with various characters and factions, exposing him to a web of violence, betrayal, and deception. He finds himself entangled with the masked killers and other criminal elements, blurring the boundaries between his duty as an officer and his personal desires.";
		MpardoPageEvents += "<br><br>Pardo's story arc explores themes of corruption, moral ambiguity, and the consequences of one's actions. As players experience Pardo's perspective, they are confronted with the ethical dilemmas he faces and the internal struggle between his professional obligations and his personal motivations.";
		MpardoPageEvents += "<br><br>Ultimately, Pardo's choices and actions shape the outcome of the game's narrative, influencing the fates of both himself and those around him. His story serves as a chilling exploration of the dark underbelly of society and the lengths some are willing to go for power, control, and self-preservation.";
		
		var MarkPageDesc = "Mark is a character in Hotline Miami 2: Wrong Number. He is a member of The Fans, a group of masked killers, and plays a role in the game's storyline. Mark's character brings a unique dynamic to the narrative, showcasing the violent and unpredictable nature of the Hotline Miami world.";
		var MarkPageEvents = "<h3>Hotline Miami 2: Wrong Number</h3> Mark is introduced as one of the playable characters in Hotline Miami 2: Wrong Number, allowing players to experience the game from his perspective. As a member of The Fans, Mark's story intertwines with those of his fellow masked killers, creating a complex web of violence, loyalty, and personal agendas.";
		MarkPageEvents += "<br><br>Throughout the game, Mark embarks on a series of intense and brutal missions, encountering a wide range of enemies and obstacles that test his skills and resilience. His journey takes him through various locations, each with its own challenges and secrets to uncover.";
		MarkPageEvents += "<br><br>As players guide Mark through the game, they witness the evolution of his character and the internal conflicts he grapples with. Mark's interactions with other characters within The Fans and his reactions to the events unfolding around him reveal layers of his personality, motivations, and the psychological toll of his actions.";
		MarkPageEvents += "<br><br>Mark's storyline intersects with the larger narrative of Hotline Miami 2: Wrong Number, contributing to the overall themes of violence, identity, and the consequences of one's choices. His presence in the game adds depth to the complex and morally ambiguous world of Hotline Miami, challenging players to navigate the blurred lines between right and wrong, justice and vengeance.";


		var RichardPageDesc = "The Richard mask is one of the iconic animal masks featured in Hotline Miami. It takes the form of a horse mask, distinctive in its design and symbolism. Equipping the Richard mask allows players to embody this enigmatic persona, adding a touch of mystery and flair to their character's appearance.";
		var RichardPageEvents = "When players wear the Richard mask in Hotline Miami, it bestows upon them a set of unique gameplay benefits. The specific effects and abilities granted by the mask can enhance the player's performance and provide strategic advantages during missions and combat encounters. These bonuses may include increased movement speed, improved melee attacks, enhanced durability, or other attributes that complement the player's preferred playstyle.";
		RichardPageEvents += "<br><br>The Richard mask not only serves as a cosmetic choice but also adds a layer of tactical decision-making to the gameplay experience. Players can strategically select the Richard mask based on its associated bonuses and how well they align with their preferred approach to the game. It encourages experimentation and customization, allowing players to adapt their playstyle to different challenges and discover new ways to overcome obstacles.";
		RichardPageEvents += "<br><br>Furthermore, the Richard mask's inclusion in Hotline Miami contributes to the game's overall atmosphere and aesthetic. The animal masks, including Richard, have become iconic symbols of the Hotline Miami franchise, representing the surreal and unpredictable nature of the game's world. They embody the distorted reality and psychological journey that players undertake as they navigate the game's violent and intense scenarios.";
		RichardPageEvents += "<br><br>By wearing the Richard mask, players not only express their individuality but also immerse themselves deeper into the dark and twisted universe of Hotline Miami. It becomes a symbol of their dedication and willingness to embrace the chaotic and morally ambiguous nature of the game.";
	
	
		var RichterPageDesc = "Richter is a key character in Hotline Miami, serving as a masked assassin affiliated with the secretive organization known as 50 Blessings. His distinct appearance, wearing a rooster mask, adds to his enigmatic and intimidating presence.";
		var RichterPageEvents = "<h3>Hotline Miami</h3> Richter's role in Hotline Miami is multifaceted and crucial to the game's narrative. While initially encountered as an adversary, Richter's character development and interactions with the main protagonist, Jacket, provide deeper insight into his motivations and connections to the events unfolding in the game's dark and violent world.";
		RichterPageEvents += "<br><br>As a masked assassin working for 50 Blessings, Richter's actions are guided by the organization's extremist ideology. He carries out assigned missions with ruthless efficiency and unwavering dedication, fueling the chaotic cycle of violence that permeates the game.";
		RichterPageEvents += "<br><br>Throughout the game, players witness intense confrontations between Jacket and Richter, resulting in intense and challenging battles. These encounters serve as pivotal moments in the narrative, revealing Richter's inner struggles, conflicting loyalties, and the toll his actions take on his psyche.";
		RichterPageEvents += "<br><br>As players progress through the game, they uncover Richter's connections to other characters and factions, deepening the intrigue surrounding his role. His story arc intertwines with the larger narrative, shedding light on the secretive world of masked assassins, political agendas, and the consequences of blind allegiance.";
		RichterPageEvents += "<br><br>Richter's presence in Hotline Miami adds a layer of complexity to the game's morally ambiguous universe. His character exemplifies the internal conflicts and moral dilemmas faced by those immersed in a world driven by violence and ideological fervor.";
		RichterPageEvents += "<br><br>By delving into Richter's story, players gain a deeper understanding of the intricate web of relationships, motivations, and consequences that shape the game's narrative. His inclusion contributes to the immersive and thought-provoking nature of Hotline Miami's storytelling, challenging players to question the justifications and consequences of their actions within the game's twisted reality.";


		var TsonPageDesc = "The Son is a central character in Hotline Miami 2: Wrong Number, playing a significant role in the game's complex and interconnected narrative. As the son of a powerful mafia boss, he is born into a world of privilege, wealth, and corruption. However, his journey takes a dark and twisted turn as he becomes entangled in the treacherous web of the criminal underworld.";
		var TsonPageEvents = "<h3>Hotline Miami 2: Wrong Number</h3> The Son's story in Hotline Miami 2: Wrong Number is a gripping exploration of power, ambition, and the devastating consequences of one's actions. Driven by a desire to carve his own path and establish his dominance, The Son's journey unveils a series of violent encounters, moral dilemmas, and personal struggles.";
		TsonPageEvents += "<br><br>Throughout the game, players witness The Son's transformation from a privileged heir to a merciless force in the criminal underworld. His interactions with other characters, such as rival factions, fellow mobsters, and masked killers, shape the intricate tapestry of the game's narrative.";
		TsonPageEvents += "<br><br>The Son's choices and actions reverberate throughout the game, triggering a chain reaction of violent events and influencing the fates of those around him. The pursuit of power and control leads him down a dark path, blurring the lines between loyalty, betrayal, and self-preservation.";
		TsonPageEvents += "<br><br>As players delve deeper into The Son's story, they witness the fragile nature of his relationships, the weight of his family legacy, and the consequences of his ruthless pursuit of dominance. The narrative unfolds with gripping intensity, exposing the depths of The Son's ambition and the tragic repercussions that unfold in his wake.";
		TsonPageEvents += "<br><br>Hotline Miami 2: Wrong Number presents players with a morally ambiguous journey, challenging them to navigate the intricate moral landscape of The Son's world. The character's complexities, conflicts, and choices serve as a reflection of the game's exploration of violence, power dynamics, and the blurred boundaries between right and wrong.";
		TsonPageEvents += "<br><br>By immersing themselves in The Son's story, players are confronted with thought-provoking questions about the nature of power, the consequences of one's actions, and the true cost of seeking control in a world defined by chaos and bloodshed.";

		var TonyPageDesc = "Tony is a character in Hotline Miami 2: Wrong Number. He is a member of The Fans, a group of masked killers, and plays a role in the game's storyline.";
		var TonyPageEvents = "<h3>Hotline Miami 2: Wrong Number</h3> Tony is introduced as one of the playable characters in Hotline Miami 2: Wrong Number. He is a member of The Fans, a group that includes other masked killers like Corey, Mark, and Alex. Tony's story unfolds as he participates in violent missions and encounters various challenges and adversaries. His actions and interactions with other characters contribute to the overall narrative of the game.";
		TonyPageEvents += "<br><br>Tony, known for his tiger mask, possesses a ferocious and aggressive nature that aligns with his feline-inspired persona. As players assume the role of Tony, they gain access to unique gameplay benefits and opportunities that mirror the attributes commonly associated with tigers. Equipping the Tony mask alters the player's appearance, adding a striking visual element that strikes fear into the hearts of enemies and potentially alters their behavior.";
		TonyPageEvents += "<br><br>In terms of gameplay, Tony's tiger mask enhances the player's agility, speed, and combat prowess, allowing for lightning-fast movement and devastating melee attacks. The mask's unique abilities grant players increased resistance to certain types of damage, enhancing their survivability in intense encounters. This combination of agility, speed, and raw power creates a playstyle that emphasizes aggressive and precise actions, enabling players to swiftly eliminate enemies with swift strikes and evasive maneuvers.";
		TonyPageEvents += "<br><br>Additionally, Tony's tiger mask enhances the player's stealth capabilities, making it easier to approach enemies undetected and execute silent takedowns. This stealth-oriented approach can provide a strategic advantage, allowing players to thin out enemy ranks before unleashing a furious assault. Tony's mask acts as a catalyst for creative and strategic gameplay, empowering players to adapt their tactics to various scenarios and overcome the game's challenging levels.";
		TonyPageEvents += "<br><br>As players progress through Hotline Miami 2: Wrong Number and unlock additional masks, including Tony, they are rewarded with a diverse range of gameplay options. Each mask offers a distinct playstyle and set of abilities, encouraging players to experiment and find the combinations that best suit their preferred approach to the game. Tony's tiger mask stands out as an embodiment of strength, speed, and aggression, allowing players to channel their inner predator and leave a trail of chaos in their wake.";
	} // End Region

	{ // Weapons Region
		var BaseballBatDesc = "The Baseball Bat is a very common melee weapon seen in Hotline Miami and Hotline Miami 2: Wrong Number, where it is among one of the most common melee weapons in the entire series. It is most commonly found in the hands of Mobsters or Gangs. ";
		var BaseballBatStats = "The Baseball Bat itself can be swung at a slow rate, and is generally more suited in taking out enemies with careful timing when they are fought in groups. Like with most melee weapons in the series, throwing one at an enemy will knock them down. It's execution is shared among every playable character that can wield the Baseball Bat, where it is used to repeatedly bash an enemy's head in.<br><br>Jacket notably appears to swing the Baseball Bat much faster and execute enemies quicker in the first game, like with several other melee weapons he can wield. ";
	} // End Region

	//document.getElementById("content-overlay").style.display = "block";
	document.getElementById("content-overlay-bg").style.display = "block";
	document.getElementsByClassName("main")[0].style.overflow = "hidden";

	document.getElementsByClassName("content-overlay-content-tittle")[0].innerHTML = charname;
	document.getElementsByClassName("content-overlay-content-tittle")[1].innerHTML = charname;

	var tableCells = document.getElementsByClassName("overlay-table-cell");

	switch(charname){	// Characters Switch
		case "Girlfriend":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = GFPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = GFPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/girlfriendFace.webp";
			tableCells[0].innerHTML = "Position: Jacket's Girlfriend";
			tableCells[1].innerHTML = "Status: Dead(shot)";
			tableCells[2].innerHTML = "Eye colour: Blue";
			tableCells[3].innerHTML = "Hair colour: Blonde";
			tableCells[4].innerHTML = "Levels: Decadence";
			tableCells[5].innerHTML = "Cutscenes: Nearly every level intro after Decadence up to the outro of Deadline";
			break;
		case "Alex":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = AlexPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = AlexPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/AlexDavisMasked.webp";
			tableCells[0].innerHTML = "Position: US Special Forces Operative (1985)<br>Unspecified Job (1991)<br>Vigilante (1991)";
			tableCells[1].innerHTML = "Status: Dead(shot)";
			tableCells[2].innerHTML = "Eye colour: Green";
			tableCells[3].innerHTML = "Hair colour: Blonde";
			tableCells[4].innerHTML = "Levels: Down under, Moving Up, Execution (scene), Into the pit, Death Wish";
			tableCells[5].innerHTML = "Cutscenes: Ambush, First Trial, Dead Ahead, Apocalypse, The Bar Of Broken Heroes, The Table Sequence";
			break;
		case "Ash":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = AshPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = AshPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/AshDavisMasked.webp";
			tableCells[0].innerHTML = "Position: US Special Forces Operative (1985)<br>Unspecified Job (1991)<br>Vigilante (1991)";
			tableCells[1].innerHTML = "Status: Dead(shot)";
			tableCells[2].innerHTML = "Eye colour: Green";
			tableCells[3].innerHTML = "Hair colour: Bald";
			tableCells[4].innerHTML = "Levels: Down under, Moving Up, Execution (scene), Into the pit, Death Wish";
			tableCells[5].innerHTML = "Cutscenes: Ambush, First Trial, Apocalypse, The Bar Of Broken Heroes, The Table Sequence";
			break;
		case "Beard":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = BeardPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = BeardPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/BeardPost.webp";
			tableCells[0].innerHTML = "Position: US Special Forces Lieutenant (formerly)<br>Store owner";
			tableCells[1].innerHTML = "Status: Dead(atomic blast)";
			tableCells[2].innerHTML = "Eye colour: Green";
			tableCells[3].innerHTML = "Hair colour: Red";
			tableCells[4].innerHTML = "Levels: Ambush, Stronghold, Casualties";
			tableCells[5].innerHTML = "Cutscenes: Phone Calls, Questions, Visitation Outros";
			break;
		case "Biker":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = BikerPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = BikerPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/Biker2.webp";
			tableCells[0].innerHTML = "Position: 50 Blessings Agent (formerly)";
			tableCells[1].innerHTML = "Status: Unknown";
			tableCells[2].innerHTML = "Eye colour: Blue";
			tableCells[3].innerHTML = "Hair colour: Cyan";
			tableCells[4].innerHTML = "Levels: Safehoouse, Fun & Games, Prank Call, Resolution";
			tableCells[5].innerHTML = "Cutscenes: Neighbors, First Trial, The Bar Of Broken Heroes";
			break;
		case "Corey":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = CoreyPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = CoreyPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/CoreyMasked.png";
			tableCells[0].innerHTML = "Position: US Special Forces Operative (1985)<br>Unspecified Job (1991)";
			tableCells[1].innerHTML = "Status: Dead (shot)";
			tableCells[2].innerHTML = "Eye colour: Black";
			tableCells[3].innerHTML = "Hair colour: Black";
			tableCells[4].innerHTML = "Levels: Down Under, Moving Up, Execution (scene), Into The Pit, Death Wish";
			tableCells[5].innerHTML = "Cutscenes: Ambush, Apocalypse, The Bar Of Broken Heroes, The Table Sequence";
			break;
		case "Don Juan":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = DjuanPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = DjuanPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/DonJuan.png";
			tableCells[0].innerHTML = "Head: Horse Mask";
			tableCells[1].innerHTML = "Apparel: Green Dress";
			tableCells[2].innerHTML = "Lighting: Blue";
			tableCells[3].innerHTML = "Tone: Concerned";
			tableCells[4].innerHTML = "Levels: N/A";
			tableCells[5].innerHTML = "Cutscenes: Animal Room";
			break;
		case "Evan":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = EvanPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = EvanPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/Evan.webp";
			tableCells[0].innerHTML = "Position: Journalist (formerly)<br>Writer";
			tableCells[1].innerHTML = "Status: Dead (atomic blast)";
			tableCells[2].innerHTML = "Eye colour: Bright Blue";
			tableCells[3].innerHTML = "Hair colour: Brown";
			tableCells[4].innerHTML = "Levels: First Trial, Subway, The Abyss";
			tableCells[5].innerHTML = "Cutscenes: Final Cut, Withdrawal, First Blood, Release, Apocalypse, The Table Sequence";
			break;
		case "Jake":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = JakePageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = JakePageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/JakeUnmasked.webp";
			tableCells[0].innerHTML = "Position: 50 Blessings assassin";
			tableCells[1].innerHTML = "Status: Dead (shot)";
			tableCells[2].innerHTML = "Eye colour: Green (with snake like pupils)";
			tableCells[3].innerHTML = "Hair colour: Blonde (Shaved)";
			tableCells[4].innerHTML = "Levels: Hard News, Withdrawal";
			tableCells[5].innerHTML = "Cutscenes: Hot & Heavy, The Bar Of Broken Heroes, The Table Sequence";
			break;
		case "Jacket":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = JacketPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = JacketPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/Jacket.webp";
			tableCells[0].innerHTML = "Position: US Special Forces Operative (1985)<br>50 Blessings Hitman (1989, unwilling)<br>Prisoner (1989-1991)";
			tableCells[1].innerHTML = "Status: Dead (Atomic Blast)";
			tableCells[2].innerHTML = "Eye colour: Unknown";
			tableCells[3].innerHTML = "Hair colour: Blonde";
			tableCells[4].innerHTML = "Levels: Chapters";
			tableCells[5].innerHTML = "Cutscenes: Prank Call, First Trial, Ambush, Stronghold, Casualties, Release, Apocalypse";
			break;
		case "Manny Pardo":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = MpardoPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = MpardoPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/MannyPardo.png";
			tableCells[0].innerHTML = "Position: Detective";
			tableCells[1].innerHTML = "Status: Dead (Atomic Blast)";
			tableCells[2].innerHTML = "Eye colour: Green";
			tableCells[3].innerHTML = "Hair colour: Blonde";
			tableCells[4].innerHTML = "Levels: Homicide, Dead Ahead, Caught";
			tableCells[5].innerHTML = "Cutscenes: Final Cut, First Trial, Withdrawal, Death Wish, The Bar Of Broken Heroes, Blood Money, Take Over, Apocalypse, The Table Sequence";
			break;
		case "Mark":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = MarkPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = MarkPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/MarkMasked.webp";
			tableCells[0].innerHTML = "Position: US Special Forces Operative (1985)<br>Unspecified Job(1991)<br>Vigilante(1991)";
			tableCells[1].innerHTML = "Status: Dead (Fatal Head Wound)";
			tableCells[2].innerHTML = "Eye colour: Hazel";
			tableCells[3].innerHTML = "Hair colour: Brown";
			tableCells[4].innerHTML = "Levels: Down Under, Moving Up, Execution (scene), Into The Pit, Death Wish";
			tableCells[5].innerHTML = "Cutscenes: Ambush, Apocalypse, The Bar Of Broken Heroes, The Table Sequence";
			break;
		case "Richard":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = RichardPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = RichardPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/Richard.webp";
			tableCells[0].innerHTML = "Head: Rooster Mask";
			tableCells[1].innerHTML = "Apparel: HM1: Jacket<br>HM2: Various";
			tableCells[2].innerHTML = "Lighting: HM1: Yellow<br>HM2: None";
			tableCells[3].innerHTML = "Tone: Ominous";
			tableCells[4].innerHTML = "Levels: N/A";
			tableCells[5].innerHTML = "Cutscenes: Animal Room, Final Cut, No Mercy, Death Wish, Subway, Blood Money, Apocalypse, The Table Sequence";
			break;
		case "Richter":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = RichterPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = RichterPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/RichterUnmasked.png";
			tableCells[0].innerHTML = "Position: Unemployed<br>50 Blessings Assassin (formerly)<br>Fugitive";
			tableCells[1].innerHTML = "Status: Dead (atomic blast)";
			tableCells[2].innerHTML = "Eye colour: Green";
			tableCells[3].innerHTML = "Hair colour: Bald";
			tableCells[4].innerHTML = "Levels: First Blood, Demolition, House Call, Release";
			tableCells[5].innerHTML = "Cutscenes: Push It, Crackdown, Hot & Heavy, Deadline, Apocalypse, The Table Sequence";
			break;
		case "The Son":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = TsonPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = TsonPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/TheSon.webp";
			tableCells[0].innerHTML = "Position: Unemployed<br>50 Blessings Assassin (formerly)<br>Fugitive";
			tableCells[1].innerHTML = "Status: Dead (Fall)";
			tableCells[2].innerHTML = "Eye colour: Green";
			tableCells[3].innerHTML = "Hair colour: Black";
			tableCells[4].innerHTML = "Levels: Seizure, Blood Money, Take Over, Apocalypse";
			tableCells[5].innerHTML = "Cutscenes: No Mercy, Death Wish, The Bar Of Broken Heroes, The Table Sequence";
			break;
		case "Tony":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = TonyPageDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = TonyPageEvents;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/characters/TonyUnmasked.webp";
			tableCells[0].innerHTML = "Position: US Special Forces Operative (1985)<br>Unspecified Job(1991)<br>Vigilante(1991)";
			tableCells[1].innerHTML = "Status: Dead (shot)";
			tableCells[2].innerHTML = "Eye colour: Orange";
			tableCells[3].innerHTML = "Hair colour: Shaved";
			tableCells[4].innerHTML = "Levels: Down Under, Moving Up, Execution (scene), Into the Pit, Death Wish";
			tableCells[5].innerHTML = "Cutscenes: Ambush, Apocalypse, The Bar Of Broken Heroes, The Table Sequence";
			break;
	}					// End Region

	switch(charname){
		case "Baseball Bat":
			document.getElementsByClassName("content-overlay-left-content-description")[0].innerHTML = BaseballBatDesc;
			document.getElementsByClassName("content-overlay-left-content-events")[0].innerHTML = BaseballBatStats;
			document.getElementsByClassName("OverlayImage")[0].src = "./img/weapons/Bat1.webp";
			tableCells[0].innerHTML = "Weapon Type: Melee";
			tableCells[1].innerHTML = "Weapon: Baseball Bat";
			tableCells[2].innerHTML = "Speed: Slow";
			tableCells[3].innerHTML = "Range: Medium";
			tableCells[4].innerHTML = "Lethal Throw: No";
			tableCells[5].innerHTML = "Can Execute: Yes";
			break;
	}
}

{
	document.getElementsByClassName("img1")[0].addEventListener('click', function (e) {
		document.location.href = "./index.html";
	});
}

function HideOverlay() {
  //document.getElementById("content-overlay").style.display = "none";
  document.getElementById("content-overlay-bg").style.display = "none";
  document.getElementsByClassName("main")[0].style.overflow = "auto";
}

let containingElement = document.getElementById('content-overlay');
document.body.addEventListener('click', function( event ){
	if( !containingElement.contains( event.target ) ){
		HideOverlay();
	} 
});

function RGBToHex(r, g, b) {
	var rH = r.toString(16);
	if(rH.lengths == 1)
		rh = "0" + rh;
	var gH = g.toString(16);
	var bH = b.toString(16);

	var hex = "#" + rH + "" + gH + "" + bH;
	return hex;
}

{
	var alpha = Math.round(100 * Math.random());;
	var aDir = 1;	
}

window.setInterval(function(){
	const fromColor = new THREE.Color("rgb(171, 0, 171)");
	const destColor = new THREE.Color("rgb(0, 0, 171)");

	if(alpha <= 0 || alpha >= 100)
		aDir *= -1;

	alpha += aDir;

	var newColor = fromColor.lerp(destColor, alpha / 100.0);

	var hex = "#" + newColor.getHexString();

	document.body.style.backgroundColor = hex;
}, 50);

//https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function CheckMobile() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

$( document ).ready(function() {
	var width;

	if(!isFirefox) {
		width = $(document).width();
	}
	else {
		width = window.innerWidth;
	}

	if(width < 730 || CheckMobile())
	{
		disableButton = true;
		button.style.display = "none";
		ExpandCanvas();
	}
});