import React, { Fragment, useContext } from "react";
import { AnimeContext } from "./../../contexts/AnimeContext";
import SearchAnime from "./SearchAnime";
import Animes from "./Animes";
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";

const Anime = () => {
  const { validateQ, loading, animes, text } = useContext(AnimeContext);
  return (
    <Fragment>
      <SearchAnime validateQ={validateQ} />
      {loading ? (
        animes.length ? (
          <Animes text={text} animes={animes} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Anime;
