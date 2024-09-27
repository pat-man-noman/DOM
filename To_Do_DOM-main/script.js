 var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	// implement creates an element "li"
	let li = document.createElement('li');
	// implement makes text from input field the li text
	li.appendChild(document.createTextNode(input.value))
	// implement adds li to ul
	ul.appendChild(li)
	// implement Reset text input field
	input.value = ''

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		//implement me
		if (li.style.textDecoration === "line-through"){
			li.style.textDecoration = 'none';
		} else {
			li.style.textDecoration = 'line-through'
		}
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var deleteBut = document.createElement('button')
	deleteBut.innerText = 'X'
	li.appendChild(deleteBut)
	deleteBut.addEventListener('click', deleteListItem)

		//Use the implemented function from below here
	
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		//Implement me
		li.classList.add('delete')
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

