import axios from "axios";

export const getLoveStories = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:1337/api/love-stories?populate=*",
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("error");
    return false;
  }
};
