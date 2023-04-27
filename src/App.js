import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTable from './components/Table.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedGeneration, setSelectedGeneration] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(`pokemonGen${selectedGeneration}.json`);
      const data = await response.json();
      setPokemonData(data);
    };
    document.getElementById('userInput').value = "";
    fetchPokemonData();
  }, [selectedGeneration]);

  const handleGenerationChange = (event) => {
    setSelectedGeneration(parseInt(event.target.value));
  };

  useEffect(() => {
    // Alle <i> Elemente auf hidden setzen
    const iElements = document.getElementsByTagName('i');
    for (let i = 0; i < iElements.length; i++) {
      iElements[i].setAttribute('hidden', true);
    }
    // Counter zurücksetzen
    setCounter(0);
  }, [selectedGeneration]);

  function checkInput() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const matchingPokemon = pokemonData.find(pokemon => pokemon.name.toLowerCase() === userInput);
    if (matchingPokemon) {
      if (matchingPokemon.name.toLowerCase() === 'nidoran') {
        document.getElementById('29').removeAttribute('hidden');
        document.getElementById('32').removeAttribute('hidden');
        setCounter(counter + 2);
      } else {
        const matchingElement = document.getElementById(matchingPokemon.pkdxnr);
        if (matchingElement.getAttribute('hidden') === null) {
          // Element ist bereits sichtbar, Input nicht löschen
          return;
        }
        matchingElement.removeAttribute('hidden');
        setCounter(counter + 1);
      }
      document.getElementById('userInput').value = "";
    }
  }

  return (

    <Container fluid>
      <Row>
        <Col sm={4} className="bg-secondary text-white d-flex justify-content-center align-items-center">
          <input id="userInput" className="form-control form-control-sm my-2" type="text" autoFocus onKeyUp={() => checkInput()} />
        </Col>
        <Col sm={2} className="bg-secondary text-white d-flex justify-content-center align-items-center">
          <div>{counter}/{pokemonData.length}</div>
        </Col>
        <Col sm={2} className="bg-secondary text-white d-flex justify-content-center align-items-center">
          <div>Timer</div>
        </Col>
        <Col sm={2} className="bg-secondary text-white d-flex justify-content-center align-items-center">
          <div>SurrenderButton</div>
        </Col>
        <Col sm={2} className="bg-secondary text-white d-flex justify-content-center align-items-center">
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

}

export default App;
