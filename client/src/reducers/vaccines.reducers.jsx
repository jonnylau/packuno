const vaccines = (state = [], action) =>{
	if (action.type = 'GET_VACCINES') {
		return {
			state//.concat(action.payload); 
		}
	}	
	return state;


export default vaccines;