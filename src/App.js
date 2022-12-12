// import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';
import './App.css';
import stacje from './stations.json';
// import { Icon } from "leaflet";

function MyComponent() {
  const map = useMapEvents({
    click: (e) => {
      console.log(map.getBounds());
      console.log(e.latlng.lat, e.latlng.lng);
    },
  })
  return null
}

function MainMap(props) {
  const stations = Array.from(stacje.stacje);
  console.log(typeof(stations))
  return (
    <MapContainer center={[52.2, 19.2]} maxBounds={[[57,28],[47,10]]} zoom={5} minZoom={5} maxZoom={16} 
    scrollWheelZoom={true}>
      <MyComponent />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {stations.map((station, idx) => (
        <Marker
          position={[parseFloat(station.gegrLat), parseFloat(station.gegrLon)]}
          key={idx}
        >
          <Tooltip>
            <p>{station.stationName}</p>
          </Tooltip>
          <Popup>
            <p>Stacja Pogodowa w {station.stationName}</p>
            <p>Województwo {station.city.commune.provinceName}</p>
          </Popup>
        </Marker>
      ))}
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
