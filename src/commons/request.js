import axios from "axios";
import {
  SYSTEM_ERROR_CODE,
  UNAUTHORIZED,
  SERVICE_UNAVAILABLE,
  BASE_API_URL
} from "./constants";

// Common AJAX request using Axios

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (SYSTEM_ERROR_CODE.includes(error.errno)) {
    } else {
      if (error.response.status === UNAUTHORIZED) {
        //location.reload();
      }

      if (error.response.status === SERVICE_UNAVAILABLE) {
      }
    }

    return Promise.reject(error);
  }
);

class ApiService {
  getJSON(path, params) {
    return this.request("GET", path, params, null, {
      "Content-Type": "application/json",
      Accept: "application/json"
    });
  }

  get(path, params, headers) {
    return this.request("GET", path, params, null, headers);
  }

  post(path, params, body, headers) {
    return this.request("POST", path, params, body, headers);
  }

  put(path, params, body, headers) {
    return this.request("PUT", path, params, body, headers);
  }

  delete(path, params, body, headers) {
    return this.request("DELETE", path, params, body, headers);
  }

  request(method, path, params, body, headers) {
    headers = headers || { "content-type": "application/json" };

    params = params || {};

    return axios({
      method: method,
      url: path,
      headers: headers,
      params: params,
      data: body,
      baseURL: BASE_API_URL,
      withCredentials: true,
      maxContentLength: Infinity
    });
  }
}

export default new ApiService();
