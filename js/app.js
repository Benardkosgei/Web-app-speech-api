// Assignment 1 | COMP1073 Client-Side JavaScript

		/* Variables
		-------------------------------------------------- */
		// Create a new speechSynthesis object
		const synth = window.speechSynthesis;
		// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
		const speakButton = document.getElementById('speakBtn');
		let textToSpeak = '';
		// Story button
		const storyButton = document.getElementById('generateBtn');

		// Creating arrays
		var nouns1 = ['The turkey', 'Monm', 'Dad', 'The dog', 'My teacher','The elephant','The cat'];
		var verbs = ['sat on', 'ate', 'danced with', 'saw', "doesn't like",'kissed'];
		var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
		var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog','bug' ,'worm'];
		var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass','in my shoes'];

		/* Functions
		-------------------------------------------------- */
		function getRandomElementFromArray(array) {
			return array[Math.floor(Math.random() * array.length)];
		}
		
		function updateTextToSpeak() {
			textToSpeak = `${getRandomElementFromArray(nouns1)} ${getRandomElementFromArray(verbs)} ${getRandomElementFromArray(adjectives)} ${getRandomElementFromArray(nouns2)} ${getRandomElementFromArray(places)}`;
		}
		      
		function speakNow(string) {
			// Create a new speech object, attaching the string of text to speak
			const utterThis = new SpeechSynthesisUtterance(string);
			// Actually speak the text
			synth.speak(utterThis);
		}
		//  My random Story function
		  function generateStory() {
				updateTextToSpeak();
				speakNow(textToSpeak);
				storyOutput.textContent = textToSpeak; // Display the story text
			}

		/* Event Listeners
		-------------------------------------------------- */
		document.getElementById('btn1').addEventListener('click', function () {
			updateTextToSpeak();
		});

		document.getElementById('btn2').addEventListener('click', function () {
			updateTextToSpeak();
		});

		document.getElementById('btn3').addEventListener('click', function () {
			updateTextToSpeak();
		});

		document.getElementById('btn4').addEventListener('click', function () {
			updateTextToSpeak();
		});

		document.getElementById('btn5').addEventListener('click', function () {
			updateTextToSpeak();
		});
        // Call the speak function
		speakButton.addEventListener('click', function () {
			speakNow(textToSpeak);
		});
		// To generate the story
		storyButton.addEventListener('click', generateStory);
		 
	 