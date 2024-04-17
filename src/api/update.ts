import { putProductById } from "./action";
import { URL_CONSTANTS } from "./urls";

const updateProduct = async (data: any) => {
  return await putProductById(URL_CONSTANTS.all_products, data?.id, data?.data);
};

export { updateProduct };
