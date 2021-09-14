import { ADD_USER } from '~/rdx/constants/actionTypes';

export const addUserAction = (data) => (dispatch) => {
  
  dispatch({ type: ADD_USER, data });
};