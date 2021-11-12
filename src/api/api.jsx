const BASE_URL = "https://ruslan-bondarenko.github.io/tt_fourmeta";

export const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
};

export const getCompanies = () => request('/data/shipments.json');