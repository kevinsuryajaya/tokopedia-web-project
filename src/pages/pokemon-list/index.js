import * as React from "react";
import { getAllData, getData } from "../../services/pokemon-data";
import CustomCard from "../../components/card";
import "../../css/pokemon-list.css";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [counter, setCounter] = React.useState(10);
  const sourceUrl = `https://pokeapi.co/api/v2/pokemon?limit=${counter}`;

  React.useEffect(() => {
    async function fetchData() {
      let response = await getAllData(sourceUrl);
      let pokemon = await loadingData(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const myFunction = async () => {
    let data = await getAllData(sourceUrl);
    await loadingData(data.results);
  };

  const loadingData = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getData(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
    setCounter(counter + 10);
  };

  console.log(pokemonData);
  return (
    <React.Fragment>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="home">
          <div className="home__section">
            {pokemonData.map((pokemon, key) => {
              return <CustomCard key={key} pokemon={pokemon} />;
            })}
          </div>
          <button className="home__button" onClick={myFunction}>
            Load More
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
