import logo from './logo.svg';
import './App.css';
import LightbulbSvg from './components/LightbulbSvg';
import { useState } from 'react';

function App() {

  const [light, setLight] = useState(false);

  let fillColor = light ? 'gold' : 'gray';

  const handleLight = () => setLight(light);

  return (
    <div className="App">
      <LightbulbSvg fillcolor={fillColor} />
      <button onClick={handleLight} ></button>
    </div>
  );
}

export default App;
