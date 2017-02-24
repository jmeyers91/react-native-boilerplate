function checkResponseSuccess(data) {
  if(data.success) {
    return data.body;
  } else {
    throw new Error(data.error);
  }
}

function parseResponseJSON(response) {
  return response.json();
}

export default function apiFetch(endpoint, options) {
  return fetch(`http://localhost:8070/api/${endpoint}`, options)
    .then(parseResponseJSON)
    .then(checkResponseSuccess);
}
