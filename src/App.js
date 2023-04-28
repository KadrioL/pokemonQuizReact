import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles.css';
import Countdown from 'react-countdown';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTable from './components/Table.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedGeneration, setSelectedGeneration] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [timerStartTime, setTimerStartTime] = useState(Date.now() + 15 * 60 * 1000); // Timer startet in 15 Minuten

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(`pokemonGen${selectedGeneration}.json`);
      const data = await response.json();
      setPokemonData(data);
    };
    document.getElementById('userInput').value = "";
    document.getElementById('userInput').disabled = false;
    fetchPokemonData();
  }, [selectedGeneration]);

  useEffect(() => {
    resetTimer();
  }, [selectedGeneration]);

  useEffect(() => {
    // Alle <i> Elemente auf hidden setzen
    const iElements = document.getElementsByTagName('i');
    for (let i = 0; i < iElements.length; i++) {
      iElements[i].setAttribute('hidden', true);
      iElements[i].style.color = 'white';
    }
    // Counter zurücksetzen
    setCounter(0);
  }, [selectedGeneration]);

  const handleGenerationChange = (event) => {
    setSelectedGeneration(parseInt(event.target.value));
  };

  const resetTimer = () => {
    setTimerStartTime(Date.now() + 15 * 60 * 1000); // Timer startet in 15 Minuten
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Timer ist abgelaufen
      return <span>Time's up!</span>;
    } else {
      // Timer läuft noch
      return (
        <span>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      );
    }
  };

  const handleSurrender = () => {
    // Alle noch nicht aufgedeckten Pokemon rot färben
    const tableElements = document.getElementsByTagName('i');
    for (let i = 0; i < tableElements.length; i++) {
      const element = tableElements[i];
      if (element.getAttribute('hidden') !== null) {
        element.style.color = 'red';
        element.removeAttribute('hidden');
      }
    }
    // Input-Feld deaktivieren
    document.getElementById('userInput').disabled = true;

  };
  

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
        <Col sm={4} className="bg-#343a40 text-white d-flex justify-content-center align-items-center">
          <input id="userInput" className="form-control form-control-sm my-2" type="text" autoFocus onKeyUp={() => checkInput()} />
        </Col>
        <Col sm={2} className="bg-#343a40 text-white d-flex justify-content-center align-items-center">
          <div>{counter}/{pokemonData.length}</div>
        </Col>
        <Col sm={2} className="bg-#343a40 text-white d-flex justify-content-center align-items-center">
          <div><Countdown date={timerStartTime} renderer={renderer} /></div>
        </Col>
        <Col sm={2} className="bg-#343a40 text-white d-flex justify-content-center align-items-center">
          <div><button onClick={handleSurrender}>Surrender</button></div>
        </Col>
        <Col sm={2} className="bg-#343a40 text-white d-flex justify-content-center align-items-center">
          <select id="generation-select" className="custom-select px-3" value={selectedGeneration} onChange={handleGenerationChange}>
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
