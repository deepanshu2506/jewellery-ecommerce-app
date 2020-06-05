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

export const addToCartUrl = host + "/api/add_to_cart";
export const removeFromcartUrl = host + "/api/remove_from_cart";

export const ordersApiUrl = host + "/api/proceed";

export const verifyPaymentsUrl = host + "/api/verify_payment";

export const getAllOrdersApi = host + "/api/orders";

export const getOrderDetailsApi = (orderId) => `${host}/api/orders/${orderId}`;
