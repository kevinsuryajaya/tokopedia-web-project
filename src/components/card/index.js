import * as React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import "../../css/card.css";

const CustomLink = styled(Link)`
   &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #0a141e;
  }
`

export default function CustomCard({ pokemon }) {
  return (
    <React.Fragment>
      <div className="card">
      <CustomLink to={{pathname:`/pokemon-detail/`+ pokemon.id}}>
        <div className="card__section">
            <img className="card__image" src={pokemon.sprites.front_default} alt="" />
          <div className="card__content">
            <div className="card__header">{pokemon.name}</div>
            <div className="card__body">
                {pokemon.types.map((type,key) => {
                    return <span className="card__type" key={key}>{type.type.name}</span>
                })}
            </div>
          </div>
        </div>
        </CustomLink>
      </div>
    </React.Fragment>
  );
}
