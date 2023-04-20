import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTable from './components/Table.js';
import React, { useState, useEffect } from 'react';
import { pokemonGen1, pokemonGen2, pokemonGen3, pokemonGen4 } from './components/Table.js';

function App() {
  const [selectedGeneration, setSelectedGeneration] = useState(1);

  const handleGenerationChange = (event) => {
    setSelectedGeneration(parseInt(event.target.value));
  };

  useEffect(() => {
    // Alle <i> Elemente auf hidden setzen
    const iElements = document.getElementsByTagName('i');
    for (let i = 0; i < iElements.length; i++) {
      iElements[i].setAttribute('hidden', true);
    }
  }, [selectedGeneration]);

  function checkInput(genValue) {
    let checkPokemon = [];
    switch (genValue) {
      case 1:
        checkPokemon = pokemonGen1;
        break;
      case 2:
        checkPokemon = pokemonGen2;
        break;
      case 3:
        checkPokemon = pokemonGen3;
        break;
      case 4:
        checkPokemon = pokemonGen4;
        break;
      default:
        checkPokemon = pokemonGen1;
        break;
    }
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const matchingPokemon = checkPokemon.find(pokemon => pokemon.name.toLowerCase() === userInput);
    if (matchingPokemon) {
      document.getElementById(matchingPokemon.pkdxnr).removeAttribute('hidden');
      document.getElementById('userInput').value = "";
    }
  }

  return (

    <Container fluid>
      <Row>
        <Col sm={6} className="bg-secondary text-white">
          <input id="userInput" className="form-control form-control-sm my-2" type="text" autoFocus onKeyUp={() => checkInput(selectedGeneration)} />
        </Col>
        <Col sm={6} className="bg-secondary text-white">
          <select id="generation-select" value={selectedGeneration} onChange={handleGenerationChange}>
            <option value="1">Generation 1</option>
            <option value="2">Generation 2</option>
            <option value="3">Generation 3</option>
            <option value="4">Generation 4</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>
          <CustomTable selectedGeneration={selectedGeneration} />
        </Col>
      </Row>
    </Container>
  );


  //   <div className="App">
  //     <div class="form-group mx-sm-3 mb-2 col-sm-6">
  //       <input id="userInput" className="form-control form-control-sm my-2" type="text" autoFocus onKeyUp={() => checkInput(selectedGeneration)} />
  //       <select id="generation-select" value={selectedGeneration} onChange={handleGenerationChange}>
  //         <option value="1">Generation 1</option>
  //         <option value="2">Generation 2</option>
  //         <option value="3">Generation 3</option>
  //         <option value="4">Generation 4</option>
  //       </select>
  //   </div>
  //     <CustomTable selectedGeneration={selectedGeneration}/>
  //   </div>
  // );
}

export default App;