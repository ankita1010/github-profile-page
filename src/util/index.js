export const createGetRequest = async requestUrl => {
	const response = await fetch(requestUrl);
	if (!response.ok) throw response;
	else {
		const jsonData = response.json();
		return jsonData;
	}
};
const calculatedateDifference = (date) => {
	const currentDate = new Date();
	const givenDate = new Date(date);
	const yearsDiffernce = currentDate.getFullYear() - givenDate.getFullYear()
	const timeDifference = currentDate.getTime() - givenDate.getTime();
	const daysDifference = (timeDifference / (1000 * 3600 * 24)).toFixed(0);
	const minutesDifference = Math.round((timeDifference / 1000) / 60);
	const hoursDifference = Math.round((timeDifference / 1000 / 60 / 60));
	const dateFormatOptions = { month: 'short', day: 'numeric' };
	if (yearsDiffernce)
		dateFormatOptions.year = "numeric"

	if (minutesDifference && parseInt(daysDifference) === 0) {
		if (hoursDifference < 60 && hoursDifference > 0)
			return hoursDifference + ' hours ago';
		else return minutesDifference + ' minutes ago';
	}

	if (daysDifference && daysDifference < 30)
		return daysDifference + ' days ago';

	else
		return "on " + givenDate.toLocaleDateString('en', dateFormatOptions)
}
export const getRelativeDate = (date, name) => {
	return "Updated " + calculatedateDifference(date);
};