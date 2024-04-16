"use client";
import Axios from "axios";

const host = "https://661cfb36e7b95ad7fa6bc39c.mockapi.io";

const getListByApi = async (requestUrl: string, params?: any) => {
  return await Axios.get(`${host}/${requestUrl}/${params} `).then(
    (res) => res.data
  );
};

export { getListByApi };
