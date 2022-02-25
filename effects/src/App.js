import './App.css';
import SayHello from './components/SayHello';
import UsingLocalStorage from './components/UsingLocalStorage';
import WindowResizer from './components/WindowResizer';

function App() {
  return (
    <div className="App">
      <h1>useEffect()</h1>
      <SayHello />
      <hr />
      <WindowResizer />
      <hr />
      <UsingLocalStorage />
    </div>
  );
}

export default App;
