import { getListByApi } from "./action";
import { URL_CONSTANTS } from "./urls";

const getAllProducts = async (params?: any) => {
  return await getListByApi(URL_CONSTANTS.all_products);
};

export { getAllProducts };
