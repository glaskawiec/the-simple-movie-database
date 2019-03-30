import apiKey from '../apiKey';

const apiUrl = 'https://api.themoviedb.org/3';

const parseQueryParameters = (queryParameters = {}) => {
  let parsedQueryParameters = '';
  const entries = Object.entries(queryParameters);

  entries.forEach((entry) => {
    const [name, value] = entry;
    parsedQueryParameters = parsedQueryParameters.concat(name, '=', value, '&');
  });

  return parsedQueryParameters;
};

const requestTheMovieDbApi = (request) => {
  const { queryParameters, endpoint } = request;
  const parsedQueryParameters = parseQueryParameters(queryParameters);
  return fetch(`${apiUrl}${endpoint}?api_key=${apiKey}&${parsedQueryParameters}`);
};

export default requestTheMovieDbApi;
