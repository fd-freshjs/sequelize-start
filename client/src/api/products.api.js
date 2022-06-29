import httpClient from "./httpClient";

export const getProdList = async () => {
  const response = await httpClient.get('/products');
  const prodList = response.data;

  return prodList;
};
