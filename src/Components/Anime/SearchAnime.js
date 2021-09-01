import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchAnime = ({ validateQ }) => (
  <Paper className="paper defaultPaper">
    <TextField
      id="q"
      label="Anime"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateQ(e)}
    />
    <IconButton onClick={(e) => validateQ(e)}>
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchAnime;
