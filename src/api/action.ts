"use client";
import Axios from "axios";

const host = "https://661cfb36e7b95ad7fa6bc39c.mockapi.io";

const getListByApi = async (requestUrl: string, params?: any) => {
  let url;
  if (params) {
    url = `${host}/${requestUrl}/${params}`;
  } else {
    url = `${host}/${requestUrl}`;
  }

  return await Axios.get(url).then((res) => res.data);
};

const getListByIdApi = async (requestUrl: string, id: any) => {
  let url = `${host}/${requestUrl}/${id}`;
  return await Axios.get(url).then((res) => res.data);
};

const deleteByIdApi = async (requestUrl: string, id: any) => {
  let url = `${host}/${requestUrl}/${id}`;
  return await Axios.delete(url).then((res) => res.data);
};

const createProductApi = async (requestUrl: string, data: any) => {
  let url = `${host}/${requestUrl}`;
  return await Axios.post(url, data).then((res) => res.data);
};

const putProductById = async (requestUrl: string, id: any, data: any) => {
  let url = `${host}/${requestUrl}/${id}`;
  return await Axios.put(url, data).then((res) => res.data);
};

export {
  getListByApi,
  getListByIdApi,
  deleteByIdApi,
  createProductApi,
  putProductById,
};
