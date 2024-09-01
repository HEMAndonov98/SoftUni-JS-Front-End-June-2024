// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
	const exerciseContainer = document.getElementById("exercise");
	const tableBodyEl = document.querySelector("table>tbody");
	const inputTextArea = document.querySelector("#exercise>textarea");

	exerciseContainer.addEventListener("click", (e) => {
		const [generateE, buyE] = e.currentTarget.querySelectorAll("button");

		if (e.target === generateE) {
			const data = JSON.parse(inputTextArea.value);
			const furniture = generateFurniture(data);
			furniture.forEach((e) => tableBodyEl.appendChild(e));
		} else if (e.target === buyE) {
			const checkedItems = getCheckedTableRows();
			calculateTotal(checkedItems);
		}
	});

	function generateFurniture(data) {
		const furnitureTableElements = [];

		const trEl = document.querySelector("tbody>tr");

		data.forEach((furnitureE) => {
			const trCloneE = trEl.cloneNode(true);
			const cloneChildrenE = trCloneE.children;

			cloneChildrenE[0].innerHTML = cloneChildrenE[0].innerHTML.trim();
			cloneChildrenE[1].innerHTML = cloneChildrenE[1].innerHTML.trim();
			cloneChildrenE[2].innerHTML = cloneChildrenE[2].innerHTML.trim();
			cloneChildrenE[3].innerHTML = cloneChildrenE[3].innerHTML.trim();
			cloneChildrenE[4].innerHTML = cloneChildrenE[4].innerHTML.trim();
						

			cloneChildrenE[0].firstElementChild.src = furnitureE.img;
			cloneChildrenE[1].firstElementChild.textContent = furnitureE.name;
			cloneChildrenE[2].firstElementChild.textContent = furnitureE.price;
			cloneChildrenE[3].firstElementChild.textContent =
				furnitureE.decFactor;
			cloneChildrenE[4].firstElementChild.disabled = false;

			furnitureTableElements.push(trCloneE);
		});
		return furnitureTableElements;
	}

	const getCheckedTableRows = () =>
		[...document.getElementsByTagName("input")]
			.filter((e) => e.checked === true)
			.reduce((acc, curr) => {
				acc.push(curr.parentNode.parentNode);
				return acc;
			}, []);

	function calculateTotal(tableRows) {
		const result = document.querySelector(
			"#container textarea:nth-of-type(2)"
		);
		let productNames = [];
		let totalPrice = 0;
		let averageDec = 0;

		if (tableRows.length > 0) {
			productNames = tableRows.reduce((acc, curr) => {
				const pName = curr.children[1].firstChild.textContent;
				acc.push(pName);
				return acc;
			}, []);

			totalPrice = tableRows.reduce((acc, curr) => {
				const price = Number(curr.children[2].firstChild.textContent);
				return (acc += price);
			}, 0);

			averageDec =
				tableRows.reduce((acc, curr) => {
					const decFac = Number(
						curr.children[3].firstChild.textContent
					);
					return (acc += decFac);
				}, 0) / tableRows.length;
		
			result.textContent = `Bought furniture: ${productNames.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDec}`;
		} else {
			result.textContent = `Bought furniture:\nTotal price: ${totalPrice}\nAverage decoration factor: ${averageDec}`;
		}
	}
}
