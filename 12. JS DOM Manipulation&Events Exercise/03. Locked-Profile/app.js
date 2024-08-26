function lockedProfile() {
	document.getElementById("main").addEventListener("click", (e) => {
		const target = e.target;

		if (target.tagName === "BUTTON" && target.textContent === "Show more") {
			handleShowMore(e);
		} else if (
			target.tagName === "BUTTON" &&
			target.textContent === "Hide it"
		) {
			handleHideIt(e);
		}
	});

	function checkUnlocked(targetParent) {
		const isChecked = targetParent.children[4].checked;
		return isChecked;
	}

	function showHidden(eventTarget) {
		const divHiddenEl = eventTarget.parentElement.querySelector("div");
		divHiddenEl.style.display = "block";
		eventTarget.textContent = "Hide it";
	}

	function hideData(eventTarget) {
		const divHiddenEl = eventTarget.parentElement.querySelector("div");
		divHiddenEl.style.display = "none";
		eventTarget.textContent = "Show more";
	}

	function handleShowMore(e) {
		const isUnlocked = checkUnlocked(e.target.parentElement);
		if (isUnlocked) {
			showHidden(e.target);
		}
	}

	function handleHideIt(e) {
		const isUnlocked = checkUnlocked(e.target.parentElement);
		if (isUnlocked) {
			hideData(e.target);
		}
	}
}
