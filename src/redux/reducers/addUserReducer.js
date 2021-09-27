import {  ADMIN_TYPE } from "../constants/actionTypes";

const initialState = {
    userData:{}
};

const AdminReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADMIN_TYPE:
      return {
          ...state,
            userData:action.payload
      };
    default:
      return state;
  }
};

export default AdminReducer;
