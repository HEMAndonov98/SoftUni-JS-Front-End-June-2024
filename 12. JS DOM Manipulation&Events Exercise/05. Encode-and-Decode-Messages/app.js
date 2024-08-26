function encodeAndDecodeMessages() {
	const buttons = [...document.querySelectorAll("#main>div>button")];

	buttons[0].addEventListener("click", encodeText);
	buttons[1].addEventListener("click", decodeText);
	function encodeText() {
		const textEl = document.querySelector("#main>div>textarea");
		const text = textEl.value;

		let hiddenText = "";

		for (let i = 0; i < text.length; i++) {
			const charCode = text.charCodeAt(i);

			hiddenText += String.fromCharCode(charCode + 1);
		}

		sendHidden(hiddenText);
		textEl.value = "";
	}

	function sendHidden(hiddenText) {
		const receiver = document.querySelector(
			"#main>div:last-child>textarea"
		);

		receiver.value = hiddenText;
	}

	function decodeText() {
		const textEl = document.querySelector("#main>div:last-child>textarea");
		const encodedText = textEl.value;

		let decodedText = "";
		for (let i = 0; i < encodedText.length; i++) {
			const charCode = encodedText.charCodeAt(i);

			decodedText += String.fromCharCode(charCode - 1);
		}

		textEl.value = decodedText;
	}
}
