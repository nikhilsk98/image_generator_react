import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MQWfAG15ZpqxvxtlbMJjQo1FoZoWU3EdUgh3j0HHGP4",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
