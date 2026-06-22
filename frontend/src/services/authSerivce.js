import api from "./api";

export const loginUser = async (userData) => {
  const response = await api.post("/user/login", userData);
  return response.data;
};