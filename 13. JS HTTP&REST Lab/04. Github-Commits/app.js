function loadCommits() {
	const usernameEl = document.getElementById("username");
	const repoEl = document.getElementById("repo");
	const ulEl = document.getElementById("commits");

	const fetchURL = `https://api.github.com/repos/${usernameEl.value}/${repoEl.value}/commits`;

	const addCommit = (responseJsonObj) => {
		const listItemEl = document.createElement("li");
		const pEl = document.createElement("p");

		pEl.textContent = `${responseJsonObj.commit.author.name}: ${responseJsonObj.commit.message}`;

		listItemEl.appendChild(pEl);
		ulEl.appendChild(listItemEl);
	};

	const addError = (error) => {
		const listItemEl = document.createElement("li");
		const pEl = document.createElement("p");

		pEl.textContent = `Error: ${error} (Not Found)`;

		listItemEl.appendChild(pEl);
		ulEl.appendChild(listItemEl);
	};

	const clearList = () => {
		const listChildren = [...ulEl.children];

		for (const child of listChildren) {
			ulEl.removeChild(child);
		}
	};

	const getCommits = (url) =>
		new Promise((resolve, reject) => {
			fetch(url).then((response) => {
				if (response.ok) {
					resolve(response.json());
				} else {
					reject(response.status);
				}
			});
		});

	clearList();

	getCommits(fetchURL)
		.then((jsonData) => {
			jsonData.forEach((commit) => addCommit(commit));
		})
		.catch((error) => addError(error));
}
