import axios from "axios";

export const getAllAdvApi = async (token) => {
  //   axios.defaults.headers.Authorization = `Bearer ${token}`;
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `advertisements/tasks.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewAdvApi = async (newAdv, token) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + `advertisements/tasks.json`,
      newAdv
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdvApi = async (id, token) => {
  //  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    await axios.delete(
      process.env.REACT_APP_BASE_URL + `advertisements/tasks/${id}.json`
    );
  } catch (error) {
    console.log(error);
  }
};

export const getProductByIDApi = async (id, token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `advertisements/tasks/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getToggleComletedApi = async (id, item, token) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const response = await axios.patch(
      process.env.REACT_APP_BASE_URL + `advertisements/tasks/${id}.json`,
       item 
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEditTaskApi = async (id, item, token) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const response = await axios.patch(
      process.env.REACT_APP_BASE_URL + `advertisements/tasks/${id}.json`,
      item
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
