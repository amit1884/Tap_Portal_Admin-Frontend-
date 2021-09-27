import { ADMIN_TYPE } from '../constants/actionTypes';

export const AdminAction = data => dispatch => {
  
  dispatch({ type: ADMIN_TYPE, payload:data });
};