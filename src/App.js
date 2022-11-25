import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";

function MainMap(props) {
  return (
    <MapContainer center={[52.2, 19.2]} zoom={8} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aqapi</h1>
      </header>
      <main className="App-main">
        <MainMap></MainMap>
        {/* <img className="mapa" src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001806/ahasoft2000180606197/102554267-hex-tile-poland-map-vector-geographic-scheme-in-light-blue-color-with-horizontal-gradient-abstract-p.jpg" alt="Mapa Polski"></img> */}
      </main>
      <footer className="App-footer">
        <p>Dane na temat jakości powietrza w serwisie Aqapi zostały pozyskane ze strony <a href="http://powietrze.gios.gov.pl/pjp/home">GIOŚ</a></p>
      </footer>
    </div>
  );
}

export default App;
