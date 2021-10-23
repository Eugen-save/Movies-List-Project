import axios from "axios";

export const getApi = async (url) => {
  const response = await axios.get(url);
  return await response.data;
};
