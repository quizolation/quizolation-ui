const fetchEmpty = (url, options = {}) => (
  fetch(url, options)
    .then(response => {
      if (!response.status === 200) {
        throw response;
      }
    })
    .catch(error => {
      throw error;
    })
);

const fetchJSON = (url, options = {}) => (
  fetch(url, options)
    .then(response => {
      if (!response.status === 200) {
        throw response.json();
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      throw error;
    })
);

const getRequest = (url, options = {}) => (
  fetchJSON(url, {
    ...options,
    method: 'GET'
  })
);

const postRequest = (url, options = {}) => (
  fetchJSON(url, {
    ...options,
    headers: {
      'Content-Type': 'applications/json; charset=utf-8',
      ...options.headers
    },
    method: 'POST'
  })
);

const putRequest = (url, options = {}) => (
  fetchJSON(url, {
    ...options,
    headers: {
      'Content-Type': 'applications/json; charset=utf-8',
      ...options.headers
    },
    method: 'PUT'
  })
);

const deleteRequest = (url, options = {}) => (
  fetchEmpty(url, {
    ...options,
    method: 'DELETE'
  })
);

export {getRequest, postRequest, putRequest, deleteRequest};
