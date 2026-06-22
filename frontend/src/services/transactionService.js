import api from "./api";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getTransactions = async () => {
  const response = await api.get("/transaction", {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return response.data;
};

export const createTransaction = async (data) => {

  const response = await api.post(
    "/transaction",
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  return response.data;
};

export const updateTransaction = async (
  transactionId,
  data
) => {

  const response = await api.put(
    `/transaction/${transactionId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  return response.data;
};

export const deleteTransaction = async (transactionId) => {

  const response = await api.delete(
    `/transaction/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  return response.data;
};