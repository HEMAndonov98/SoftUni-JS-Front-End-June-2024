function loadRepos() {
	const inputEl = document.getElementById("username");
	const gitHubAPIUrl = `https://api.github.com/users/${inputEl.value}/repos`;
	const listEl = document.getElementById("repos");

	const clearList = (listEl) => {
		const childrenEl = [...listEl.children];
		for (const child of childrenEl) {
			listEl.removeChild(child);
		}
	};

	const addChild = (obj) => {
		const listItemEl = document.createElement("li");
		const aTagEl = document.createElement("a");

		aTagEl.textContent = obj["full_name"];
		aTagEl.setAttribute("href", obj["html_url"]);

		listItemEl.appendChild(aTagEl);
		listEl.appendChild(listItemEl);
	};

	const addError = (error) => {
		const listItemEl = document.createElement("li");
		const aTagEl = document.createElement("a");

		aTagEl.textContent = error;
		aTagEl.setAttribute("href", "#");

		listItemEl.appendChild(aTagEl);
		listEl.appendChild(listItemEl);
	};

	async function GetRepoByUsername(url) {
		const response = await fetch(url);

		if (response.ok) {
			return response.json();
		} else {
			throw new Error(response.status);
		}
	}

	clearList(listEl);
	GetRepoByUsername(gitHubAPIUrl)
		.then((responseJson) => {
			responseJson.forEach((obj) => {
				addChild(obj);
			});
		})
		.catch((error) => {
			addError(error);
		});
}
