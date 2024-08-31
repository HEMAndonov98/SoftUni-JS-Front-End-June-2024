function solve() {
	const exerciseContainer = document.getElementById("exercise");
	const tableBodyEl = document.querySelector("table>tbody");
	const inputTextArea = document.querySelector("#exercise>textarea");

	exerciseContainer.addEventListener("click", (e) => {
		if (
			e.target.tagName === "BUTTON" &&
			e.target.innerHTML === "Generate"
		) {
			const data = JSON.parse(inputTextArea.value);
			const furniture = generateFurniture(data);
			furniture.forEach((e) => tableBodyEl.appendChild(e));
		} else if (
			e.target.tagName === "BUTTON" &&
			e.target.innerHTML === "Buy"
		) {
			const checkedItems = getCheckedTableRows();
			calculateTotal(checkedItems);
		}
	});

	function generateFurniture(data) {
		const furnitureTableElements = [];

		for (const furnitureObj of data) {
			const tableRow = document.createElement("tr");

			const tdImg = document.createElement("td");
			const furImage = document.createElement("img");
			furImage.src = furnitureObj.img;
			tdImg.appendChild(furImage);

			const tdName = document.createElement("td");
			const pName = document.createElement("p");
			pName.textContent = furnitureObj.name;
			tdName.appendChild(pName);

			const tdPrice = document.createElement("td");
			const pPrice = document.createElement("p");
			pPrice.textContent = furnitureObj.price;
			tdPrice.appendChild(pPrice);

			const tdDecFactor = document.createElement("td");
			const pDecFactor = document.createElement("p");
			pDecFactor.textContent = furnitureObj.decFactor;
			tdDecFactor.appendChild(pDecFactor);

			const tdCheckbox = document.createElement("td");
			const inputCheckbox = document.createElement("input");
			inputCheckbox.type = "checkbox";
			tdCheckbox.appendChild(inputCheckbox);

			tableRow.append(tdImg, tdName, tdPrice, tdDecFactor, tdCheckbox);
			furnitureTableElements.push(tableRow);
		}

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
		}

		result.textContent = `Bought furniture: ${productNames.join(
			", "
		)}\nTotal price: ${totalPrice.toFixed(
			2
		)}\nAverage decoration factor: ${averageDec.toFixed(1)}`;
	}
}
