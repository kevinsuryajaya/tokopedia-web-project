import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import "./App.css";

import NavigationBar from "./components/navigation-bar";
import PokemonList from "./pages/pokemon-list";
import PokemonUser from "./pages/pokemon-user";

const CustomContainer = styled(Container)`
  padding-top: 5rem;
`;

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <CustomContainer>
        <Switch>
          <Route path="/pokemon-detail" />
          <Route path="/user" component={PokemonUser}/>
          <Route path="/" component={PokemonList} />
        </Switch>
      </CustomContainer>
    </Router>
  );
}
