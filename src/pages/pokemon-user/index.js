import * as React from "react";
import { getAllData, getData } from "../../services/pokemon-data";

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(JSON.parse(window.localStorage.getItem(keys[i])));
  }

  return values;
}
// const asd = JSON.parse(window.localStorage.getItem(key));
export default function PokemonUser(){
    const [pokemonData, setPokemonData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

     const asd = allStorage();
     

    React.useEffect(() => {
    async function fetchData() {
      await loadingData(asd);
      setLoading(false);
    }
    fetchData();
  }, []);


  const loadingData = async (data) => {
      
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
          
        let pokemonRecord = await getData(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);
    return(
        <React.Fragment>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
         {asd.map((type, key) => {
                  return (
                    <p key={key}>{type.nickname}</p>
                  );
                })}
        </div>
      )}
    </React.Fragment>
       
    )
}