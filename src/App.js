import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aqapi</h1>
      </header>
      <main className="App-main">
        <img className="mapa" src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001806/ahasoft2000180606197/102554267-hex-tile-poland-map-vector-geographic-scheme-in-light-blue-color-with-horizontal-gradient-abstract-p.jpg" alt="Mapa Polski"></img>
      </main>
      <footer className="App-footer">
        <p>Dane na temat jakości powietrza w serwisie Aqapi zostały pozyskane ze strony <a href="http://powietrze.gios.gov.pl/pjp/home">GIOŚ</a></p>
      </footer>
    </div>
  );
}

export default App;
