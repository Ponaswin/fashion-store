import { getListByApi, getListByIdApi } from "./action";
import { URL_CONSTANTS } from "./urls";

const getAllProducts = async (params?: any) => {
  return await getListByApi(URL_CONSTANTS.all_products, params);
};

const getProduct = async (params: any) => {
  return await getListByIdApi(URL_CONSTANTS.all_products, params);
};

export { getAllProducts, getProduct };
