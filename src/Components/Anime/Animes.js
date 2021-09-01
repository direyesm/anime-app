import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Anime from "./Anime";
import Message from "./../Common/Message";

const Animes = ({ animes, text }) => (
  <Fragment>
    <Message text={text} />
    <div className="root">
      <Grid container spacing={3} justufy="center">
        {animes.map((anime) => {
          const { mal_id, image_url, title } = anime.anime;
          return <Anime key={mal_id} image_url={image_url} title={title} />;
        })}
      </Grid>
    </div>
  </Fragment>
);

export default Animes;
