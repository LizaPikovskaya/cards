import axios from "axios";

axios.defaults.baseURL =
  "https://65268b1c917d673fd76c8017.mockapi.io/api/v1/users";
axios.defaults.params = {
  limit: 3,
};
export const fetchCards = async (page = 1) => {
  try {
    const result = await axios.get(`/?page=${page}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllCards = async () => {
  try {
    const result = await axios.get(`/`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
