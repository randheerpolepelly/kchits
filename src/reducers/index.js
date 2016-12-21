import { combineReducers } from 'redux';

const chits = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CHIT': 
		console.log("in reducer add chit");
     	return [ 
     		...state,
     		action.formData
     	];
    default: 
      return state;
  }
}

const newChit = {
		            "groupName": "",
		            "startDate": "",
		            "chitValue": "",
		            "term": ""
          		};
const chit = (state= {}, action) => {
	switch(action.type) {
		case 'ADD_CHIT_INPUT_CHANGE':
			//console.log("in ADD_CHIT_INPUT_CHANGE ");
			state[action.inputName] = action.inputValue;
			return Object.assign({}, state);
		default:
			return state;
	}
}

const chitApp = combineReducers({
	chits,
	chit
});

export default chitApp;