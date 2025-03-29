import { useEffect, useState } from "react";
import { API_KEY } from "../components/Constants";
const useCategory = () => {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${API_KEY}`
      );
      const data = await response.json();
      if (response) {
        const categoryDeatils = data.items.map((item) => ({
          id: item.id,
          title: item.snippet.title,
        }));
        setCategory(categoryDeatils);
      }
    } catch (error) {
      console.error("Error fetching category", error);
    }
  };
  return category;
};
export default useCategory;
