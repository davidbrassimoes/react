import './App.css';
import Chat from './components/Chat';
import PropDrilling from './components/PropDrilling';
import UseContext from './components/UseContext';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <hr />
      <Chat />
      <hr />
      <PropDrilling />
      <hr />
      <UseContext />
    </div>
  );
}

export default App;
