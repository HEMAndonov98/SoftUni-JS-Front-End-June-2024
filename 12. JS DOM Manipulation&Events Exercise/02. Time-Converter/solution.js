function attachEventsListeners() {
	const main = document.getElementsByTagName("main")[0];

	main.addEventListener("click", (e) => {
		switch (e.target.id) {
			case "daysBtn": {
				const days = document.getElementById("days").value;
				const calculations = calcDays(days);
				setValues(calculations);
				break;
			}
			case "hoursBtn": {
				const hours = document.getElementById("hours").value;
				const calculations = calcHours(hours);
				setValues(calculations);
				break;
			}
			case "minutesBtn": {
				const minutes = document.getElementById("minutes").value;
				const calculations = calcMinutes(minutes);
				setValues(calculations);
				break;
			}
			case "secondsBtn": {
				const seconds = document.getElementById("seconds").value;
				const calculations = calcSeconds(seconds);
				setValues(calculations);
				break;
			}
		}
	});

	function setValues(calculations) {
		document.getElementById("days").value = calculations.days;
		document.getElementById("hours").value = calculations.hours;
		document.getElementById("minutes").value = calculations.minutes;
		document.getElementById("seconds").value = calculations.seconds;
	}

	function calcDays(daysVal) {
		const hours = daysVal * 24;
		const minutes = hours * 60;
		const seconds = hours * 60 * 60;

		return {
			days: daysVal,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function calcHours(hoursVal) {
		const days = hoursVal / 24;
		const minutes = hoursVal * 60;
		const seconds = hoursVal * 60 * 60;

		return {
			days: days,
			hours: hoursVal,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function calcMinutes(minutesVal) {
		const hours = minutesVal / 60;
		const days = hours / 24;
		const seconds = hours * 60 * 60;

		return {
			days: days,
			hours: hours,
			minutes: minutesVal,
			seconds: seconds,
		};
	}

	function calcSeconds(secondsVal) {
		const secodnsReformatted = secondsVal.replaceAll(/\s/g, "");
		const minutes = Number(secodnsReformatted) / 60;
		const hours = minutes / 60;
		const days = hours / 24;

		return {
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: secondsVal,
		};
	}
}
