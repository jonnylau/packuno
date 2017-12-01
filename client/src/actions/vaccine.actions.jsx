import vaccines from '../vaccines.json';
//need to get the current country we're in the trip page

export function getVaccines() {
	let targetVaccines = vaccines//[country];
	return {
		type: 'GET_VACCINES',
		payload: targetVaccines,
	}
}