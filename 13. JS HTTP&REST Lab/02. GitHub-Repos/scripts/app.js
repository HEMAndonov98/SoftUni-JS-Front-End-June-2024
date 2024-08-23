function loadRepos() {
	const resEl = document.getElementById("res");
	const gitHubRepoAPI = "https://api.github.com/users/testnakov/repos";

	const fetchRepoBodyRaw = (url) =>
		new Promise((resolve, reject) => {
			fetch(url).then((response) => {
				if (response.ok) {
					resolve(response.text());
				} else {
					reject(response.status);
				}
			});
		});

	fetchRepoBodyRaw(gitHubRepoAPI)
		.then((resText) => (resEl.textContent = resText))
		.catch((resStat) => (resEl.textContent = `Error ${resStat}`));
}
