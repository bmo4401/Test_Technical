const fetchUtility = (baseURL, headers) => {
  const createFetchInstance = (route, requestMethod, data) => {
    const tempReq = new Request(`${baseURL}${route}`, {
      method: requestMethod,
      headers,
      data: data || null,
    });
    return [fetch, tempReq];
  };

  return createFetchInstance;
};

const fetchInstance = fetchUtility('https://jsonplaceholder.typicode.com');
/* remove redundant code, provide modularity */
const [getFunc, getReq] = fetchInstance('/todos/1', 'GET');
