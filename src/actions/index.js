export const addChit = (formData) => {
	console.log("In addChit Action");
	console.log(formData);
  return {
    type: 'ADD_CHIT',
    formData
  }
}

export const addChitInputChange = (event) => {
	return {
		type: 'ADD_CHIT_INPUT_CHANGE',
		inputName: event.target.name,
		inputValue: event.target.value
	}
};

export default addChit;