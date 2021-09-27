import cookie from 'js-cookie';


export const isObject = (obj) => obj !== null && typeof obj === 'object';
export function createQueryString(obj, rules = {}, params = []) {
    const { hasOwnProperty } = Object.prototype;
  
    if (!isObject(obj)) {
      return '';
    }
  
    for (const property in obj) {
      if (hasOwnProperty.call(obj, property)) {
        const value = obj[property];
        if (isObject(value) && (Array.isArray(value) === false)) {
          createQueryString(value, rules, params);
        } else if (rules.removeEmptyKeys) {
          if (value !== '' && (Array.isArray(value) === false)) {
            params.push(`${encodeURIComponent(property)}=${encodeURIComponent(value)}`);
          } else if (value.length > 0) {
            params.push(`${encodeURIComponent(property)}=${encodeURIComponent(value)}`);
          }
        } else {
          params.push(`${encodeURIComponent(property)}=${encodeURIComponent(value)}`);
        }
      }
    }
    return params.join('&');
  }


  
export function createMultiPartFormData(data = {}) {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return formData;
  }

  function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
      // each 'entry' is a [key, value] tupple
      result[key] = value;
    }
    return result;
  }

  export function Base64(data, isServer = false) {
    const urlParams = new URLSearchParams(data);
    const entries = urlParams.entries(); // returns an iterator of decoded [key,value] tuples
    const params = paramsToObject(entries);
    const paramsString = JSON.stringify(params);
    // console.log(paramsString,params);
    let base64data = '';
    if (isServer) {
      const buff = eval('Buffer').from(paramsString);
      base64data = buff.toString('base64');
    } else {
      base64data = btoa(paramsString);
    }
    return base64data;
  }

  export function getIsServer() {
    return typeof window === 'undefined';
  }

  export const getCookieFromBrowser = (key) => cookie.get(key);