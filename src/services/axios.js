import axios from "axios";

axios.defaults.baseURL =
  "https://65268b1c917d673fd76c8017.mockapi.io/api/v1/users";

export const fetchCards = async () => {
  try {
    const result = await axios.get("/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
