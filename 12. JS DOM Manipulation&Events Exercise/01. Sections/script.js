function create(words) {
	const contentEl = document.getElementById("content");
	// Create a method to create the required elements
	function createSection() {
		const divEl = document.createElement("div");
		const pEl = document.createElement("p");

		pEl.id = "section-text";
		pEl.style.display = "none";
		divEl.appendChild(pEl);
		return divEl;
	}

	// append the given text to the elements
	function appendWord(DomNode, word) {
		const pEl = DomNode.children[0];

		pEl.textContent = word;
	}
	// Create event listeners for every div
	function displayEvent(e) {
		const pEl = e.target.children[0];
		pEl.style.display = pEl.style.display === "none" ? "block" : "none";
	}

	// Try to create event delegation pattern
	contentEl.addEventListener("click", displayEvent);

	words.map((word) => {
		const section = createSection();
		appendWord(section, word);

		contentEl.appendChild(section);
	});
}
