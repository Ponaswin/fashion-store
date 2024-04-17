import { URL_CONSTANTS } from "./urls";
import { deleteByIdApi } from "./action";

const deleteProduct = async (id: any) => {
  return await deleteByIdApi(URL_CONSTANTS.all_products, id);
};

export { deleteProduct };
