// import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';
import './App.css';
// import stacje from './stations.json';
import React, {useEffect, useState} from "react"
// let instruments = [];
// let curr;

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
  // const [currentStation, setCurrentStation] = useState();
  // const [err, setErr] = useState('');
  
  
  const [stations, setStations] = useState([]);
  useEffect(() => {
    const url = "station/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        // const data = json.array.map((data) => {
        setStations(json);
        // });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  },[]);
  
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
          data={station.id}
          position={[parseFloat(station.gegrLat), parseFloat(station.gegrLon)]}
          key={idx}
          // eventHandlers={{
          //   click: async (e) => {
              
          //     setCurrentStation(JSON.stringify(e.target.options.data));
          //     curr = JSON.stringify(e.target.options.data)
          //     console.log(e.target.options.data, currentStation)
          //     let url = "pjp-api/rest/station/sensors/" + curr
          //     console.log(url)
          //     try {
          //       const response = await fetch(url)

          //       if (!response.ok) {
          //         throw new Error(`Error! status: ${response.status}`);
          //       }

          //       const result = await response.json();

          //       instruments = result;
          //       instruments = JSON.stringify(instruments).replaceAll(',', '\n')
          //       e.target.setPopupContent(instruments)
          //       console.log(instruments);
          //     } catch (err) {
          //       setErr(err.message);
                
          //     } finally {
          //       console.log(err)
          //     }
          //   },
          // }}
        >
          <Tooltip>
            <p>ID: {station.id}</p>
            <p>Nazwa: {station.stationName}</p>
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
        <h1>Aqapi - dane jakości powietrza</h1>
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
