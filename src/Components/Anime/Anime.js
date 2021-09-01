import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonPrimary from "./../Common/ButtonPrimary";

const Anime = ({ mal_id, image_url, title }) => (
  <Grid item xs={12} sm={6} dm={4}>
    <Paper className="defaultPaper">
      <img src={image_url} alt={image_url} />
      <ul>
        <li>
          <strong>Title: </strong>
          <span>{title}</span>
        </li>
        <li>
          <ButtonPrimary type="details" to={`/Anime/${mal_id}`} />
        </li>
      </ul>
    </Paper>
  </Grid>
);

export default Anime;
