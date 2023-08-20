import axios from "axios";

export const getLoveStories = async () => {
  try {
    const { data } = await axios.get(
      "https://groove-studios-cms.onrender.com/api/love-stories?populate=*",
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("error");
    return false;
  }
};
