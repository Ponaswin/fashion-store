import { createProductApi } from "./action";
import { URL_CONSTANTS } from "./urls";

const createProduct = async (data: any) => {
  return await createProductApi(URL_CONSTANTS.all_products, data);
};

export { createProduct };
