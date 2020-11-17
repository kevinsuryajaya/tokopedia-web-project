import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import NavigationBar from "./components/navigation-bar";
import PokemonList from "./pages/pokemon-list";
import PokemonUser from "./pages/pokemon-user";

const CustomContainer = styled.div`
  padding-top: 5rem;
  margin-bottom:3rem;
  padding-left: 15px;
  padding-right: 15px;
  margin-left:auto;
  margin-right:auto;
`;

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <CustomContainer>
        <Switch>
          <Route path="/pokemon-detail/:id" />
          <Route path="/user" component={PokemonUser}/>
          <Route path="/" component={PokemonList} />
        </Switch>
      </CustomContainer>
    </Router>
  );
}
