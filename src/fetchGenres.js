import axios from "axios";
import { useEffect, useState } from "react";
import { API_Key, baseSiteUrl, language } from "./ApiParameters";

export const useGenres = () => {
  const [genre, setGenre] = useState();

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(
          `${baseSiteUrl}genre/movie/list?api_key=${API_Key}&language=${language}`
        );
        const result = await response.data.genres;
        setGenre(result);
      } catch {
        setGenre({ state: "error" });
      }
    };
    getGenres();
  }, []);

  return genre;
};
