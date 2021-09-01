import React, { createContext, useState, useEffect } from "react";
import { animeTop, animeSearch } from "./../constants";

export const AnimeContext = createContext();

const AnimeContextProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [currentAnime, setCurrentAnime] = useState("");
  const [text, setText] = useState("Top Anime");
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getTopAnime();
  }, []);

  //Mostrat el top
  const getTopAnime = () => {
    fetch(animeTop())
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setAnimes(data);
      })
      .catch((err) => console.log(err));
  };

  //Buscador de anime
  const getAnime = (q) => {
    q &&
      fetch(animeSearch(q))
        .then((res) => res.json())
        .then((data) => {
          const { results } = data;
          setLoading(true);
          setText(results.length ? "Results" : "No Results");
          setAnimes(results);
        })
        .catch((err) => console.log(err));
  };

  const validateQ = (
    e,
    q = document.querySelector("#q").value.toLowerCase().trim()
  ) => {
    if (e.type === "Keypress" && e.key !== "Enter") return;
    const words = q.match(/\w+/g);
    q = words && words.join(" ");
    if (q && q !== currentAnime) {
      setCurrentAnime(q);
      setLoading(false);
      getAnime(q);
    }
  };

  return (
    <AnimeContext.Provider value={{ loading, text, animes, validateQ }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
