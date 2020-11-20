import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { allStorage } from "../../services/pokemon-localStorage";
import test from "../../assets/images/profile.jpg";
import "../../css/my-pokemon.css";

const CustomLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #ffffff;
  }
`;

export default function MyPokemon() {
  const myPokemons = allStorage();
  return (
    <React.Fragment>
      <div className="user">
        <div className="user__header">
          <h2 className="detail__headerTitle">My Profile</h2>
          <span className="">
            The information about Pokemon trainer and manage your Pokemon.
          </span>
        </div>
        <div className="user__profile">
          <img src={test} alt="profile" className="user__avatar" />
          <p>Pokemon Trainer</p>
        </div>
        <h3 className="user__pokemonTitle">My Pokemon List</h3>
        {myPokemons.length !== 0 ? (
          <div className="user__row">
            {myPokemons.map((myPokemon, key) => {
              return (
                <div key={key} className="user__column">
                  <img
                    className="user__pokemonImage"
                    src={myPokemon.image_url}
                    alt="pokemon"
                  />
                  <p className="user__pokemonNick">{myPokemon.nickname}</p>
                  <button
                    className="user__button"
                    onClick={() => {
                      localStorage.removeItem(myPokemon.nickname);
                    }}
                  >
                    <CustomLink to="/my-pokemon">Release</CustomLink>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>You don't have a Pokemon.</h1>
        )}

        <div className="user__footer">
          <button
            className="user__button"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <CustomLink to="/my-pokemon">Release All</CustomLink>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
