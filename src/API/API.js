import axios from "axios";

const APIKEY = "S9B4Xc46HDCuoMTyqKnfQ6wPMSxgCiQjz9AMPlSbrsI";

axios.defaults.baseURL = `https://api.unsplash.com/search`;

export const fetchPhotos = async (query, page = 1) => {
  const response = await axios.get(
    `/photos/?client_id=${APIKEY}&page=${page}&query=${query}`
  );

  return response.data.results;
};
