import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AnimeContextProvider from "./contexts/AnimeContext";
import DetailsContextProvider from "./contexts/DetailsContext";
import Header from "./Components/Common/Header";
import Anime from "./Components/Anime";
import Details from "./Components/DetailsAnime";
import NotFound from "./Components/NotFound";
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <AnimeContextProvider>
          <Anime />
        </AnimeContextProvider>
      </Route>
      <Route path="/detalle/Anime/:mal_id">
        <DetailsContextProvider>
          <Details />
        </DetailsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
