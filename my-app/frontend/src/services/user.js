import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const getAll = async () => {
  const response = await axios.get(baseURL + '/users');
  return response;
};

const create = async (obj) => {
  const response = await axios.post(baseURL + '/users', obj)
  return response.data
};

const userService = {
    getAll,
    create,
  };
  
  export default userService;
