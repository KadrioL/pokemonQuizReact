import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

const CustomTable = (props) => {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(`pokemonGen${props.selectedGeneration}.json`);
      const data = await response.json();
      setPokemonData(data);
    };
    fetchPokemonData();
  }, [props.selectedGeneration]);

  const resultsRender = [];
  for (var i = 0; i < pokemonData.length; i += 3) {
    resultsRender.push(
      <tr key={pokemonData[i].pkdxnr}>
      {
        pokemonData.slice(i, i + 3)
          .map(pokemon => <td key={pokemon.pkdxnr} className="col-md-4"><b>{pokemon.pkdxnr}:</b><i id={pokemon.pkdxnr} hidden={true}> {capitalizeFirstLetter(pokemon.name)}</i></td>)
      }
      </tr>
    );
  }

return (
  <Table className="table-bordered table-dark">
    <tbody>
      {resultsRender}
    </tbody>
  </Table>    
);
  }


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default CustomTable