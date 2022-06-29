import httpClient from "./httpClient";

export const getCategList = async () => {
  const response = await httpClient.get('/products');
  const prodList = response.data.data;

  return prodList;
};
