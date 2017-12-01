import vaccines from '../vaccines.json';
// need to get the current country we're in the trip page

export default function getVaccines() {
  const targetVaccines = vaccines;// [country];
  return {
    type: 'GET_VACCINES',
    payload: targetVaccines,
  };
}
