import { createProductApi } from "./action";
import { URL_CONSTANTS } from "./urls";
import { userById } from "./action";

const createProduct = async (data: any) => {
  return await createProductApi(URL_CONSTANTS.all_products, data);
};

const createUser = async (data: any) => {
  return await userById(URL_CONSTANTS.user, data);
};

const userLogin = async (data: any) => {
  return await userById(URL_CONSTANTS.user_login, data);
};
export { createProduct, createUser, userLogin };
