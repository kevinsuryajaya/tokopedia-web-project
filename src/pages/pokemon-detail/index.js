import * as React from "react";
import { getData } from "../../services/pokemon-data";
import {Link} from "react-router-dom";
import "../../css/pokemon-detail.css";

export default function PokemonDetail(props) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [save, setSave] = React.useState(false);
  const sourceUrl = `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`;
    const [key, setKey] = React.useState('');

  const [store, setStore] = React.useState({
    nickname: "",
    url: sourceUrl,
  });

  React.useEffect(() => {
    async function fetchData() {
      let response = await getData(sourceUrl);
      setData(response);
      setLoading(false);
    }
    fetchData();
  }, [props]);

  const catchClick = () => {
    const min = 1;
    const max = 3;
    const random = Math.floor(min + Math.random() * (max - min));
    console.log(random);
    if (random === 1) {
      alert("Pokemon Escape!");
    } else {
      alert("You Catch a Pokemon!");
      setSave(true);
    }
  };

  const handleChange = (event) => {
    setKey(event.target.value);
    setStore({ ...store, [event.target.name]: event.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem(key, JSON.stringify(store));
    
  };

  return (
    <React.Fragment>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="detail">
          <div className="detail__header">
            <h2 className="detail__headerTitle">Pokemon Detail</h2>
            <span className="">
              The information about pokemon type, ability, and move
            </span>
          </div>
          <div className="detail__body">
            <div className="detail__contentSection detail__contentSection--margin">
              <div>
                <img
                  className="detail__image"
                  src={data.sprites.front_default}
                  alt=""
                />
              </div>
              <div>
                <button className="detail__button" onClick={catchClick}>
                  Catch With Your Poke Ball!
                </button>
              </div>
            </div>
            {save ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id=""
                  name="nickname"
                  value={key}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              ""
            )}

            <div className="detail__contentSection">
              <div className="detail__content">
                <h4 className="detail__contentTitle">Name</h4>
                <span className="detail__name">{data.name}</span>
              </div>

              <div className="detail__content">
                <h4 className="detail__contentTitle">Type</h4>{" "}
                {data.types.map((type, key) => {
                  return (
                    <span className="detail__desc detail__desc--type" key={key}>
                      {type.type.name}
                    </span>
                  );
                })}
              </div>

              <div className="detail__content">
                <h4 className="detail__contentTitle">Ability</h4>{" "}
                {data.abilities.map((ability, key) => {
                  return (
                    <span
                      className="detail__desc detail__desc--ability"
                      key={key}
                    >
                      {ability.ability.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="detail__content detail__content--center">
            <h3 className="detail__contentTitle detail__contentTitle--center">
              Pokemon Move List
            </h3>

            <div className="detail__row">
              {data.moves.map((move, key) => {
                return (
                  <span className="detail__desc detail__desc--move" key={key}>
                    {move.move.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}