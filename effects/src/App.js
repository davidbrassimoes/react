import './App.css';
import SayHello from './components/SayHello';
import UsersList from './components/UsersList';
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
      <hr />
      <UsersList />
    </div>
  );
}

export default App;
