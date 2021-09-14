import { ADD_USER } from "../constants/actionTypes";

const initialState = {
    userData:{
        name:'Amit Raj'
    }
};

const addUserReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_USER:
      return {
          ...state,
            userData:action.data
      };
    default:
      return state;
  }
};

export default addUserReducer;
