import config from "./config";

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
  const url = `${config.domain}:${config.port}/api/${endpoint}`;
  log(url);
  return fetch(url, options)
    .then(parseResponseJSON)
    .then(checkResponseSuccess);
}
