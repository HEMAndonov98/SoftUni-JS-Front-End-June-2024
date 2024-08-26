function addItem() {
	const optionTextEl = document.getElementById("newItemText");
	const optionValueEl = document.getElementById("newItemValue");

	function createOption(opText, opValue) {
		const optionEl = document.createElement("option");

		optionEl.value = opValue;
		optionEl.textContent = opText;
		return optionEl;
	}

	const newOption = createOption(optionTextEl.value, optionValueEl.value);

	const selectMenuE = document.getElementById("menu");
	selectMenuE.appendChild(newOption);

	optionTextEl.value = "";
	optionValueEl.value = "";
}
