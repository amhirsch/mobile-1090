import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './App.css';
// import SetAuthority from './components/SetAuthority';
import Sort from './components/controls/Sort'
import Authority from './components/Authority'
import Airspace from './components/Airspace'
import data from './aircraft.json'

const USE_NETWORK = false;

function parseAircraft(aircraft) {
  const newAircraft = [];
  for (let ac of aircraft) {
    if (!ac.hex.startsWith('~')) {
      let newAC = {...ac};
      delete newAC.mlat;
      delete newAC.tisb;
      if ('flight' in newAC) {
        newAC.flight = newAC.flight.trim();
      }
      newAircraft.push(newAC);
    }
  }
  return newAircraft;
}

function fetchAircraft(hostname, port, setLastUpdate, setAircraft) {
  if (USE_NETWORK) {
    axios.get(`http://${hostname}:${port}/skyaware/data/aircraft.json`)
    .then((response) => {
      setLastUpdate(response.data.now);
      setAircraft(response.data.aircraft);
    })
    .catch((e) => console.log(e))
  }
  else {
    parseAircraft(data.aircraft, setAircraft);
  }
  
}

function App() {
  const [hostname, setHostname] = useState('pi.lan.xanderhirsch.us');
  const [port, setPort] = useState(8080);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState(true);
  const [sortKeepNull, setSortKeepNull] = useState(false);
  // const [aircraft, setAircraft] = useState([]);
  // const [lastUpdate, setLastUpdate] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => fetchAircraft(hostname, port, setLastUpdate, setAircraft), 5000)
  // })



  return (
    <>
      <Authority
        hostname={hostname}
        setHostname={setHostname}
        port={port}
        setPort={setPort} />

      <Sort
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        sortKeepNull={sortKeepNull}
        setSortKeepNull={setSortKeepNull} />
      <Airspace
        sortBy={sortBy}
        sortOrder={sortOrder}
        sortKeepNull={sortKeepNull}
        aircrafts={parseAircraft(data.aircraft)} />
    </>
  )
}

export default App;
