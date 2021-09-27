import { getCookieFromBrowser } from './helpers';
import { apiRequest} from './request';

let BASE_URL="http://localhost:5000/"
export const loginRequest = (data, headerOptions) => apiRequest.post(`${BASE_URL}login`, data, 'application/json', '', headerOptions,false);
export const getAllJobs = () =>apiRequest.get(`${BASE_URL}getalljobs`)