import { host } from "../config";

export const loginUrl = host + "/api/login";
export const signupUrl = host + "/api/signup";

export const allProductsApi = host + "/api/products";

export const syncCartWishListUrl = host + "/api/sync";

export const productByTypeApi = (type) => {
  return `${host}/api/product_type/${type}`;
};

export const getSearchApi = (keyword) => {
  return `${host}/api/products/search?keywords=${keyword}`;
};
