import './App.css';
import { Provider } from 'react-redux'
import BookDashboard from './components/BookDashboard';
import { store } from './store'

function App() {
  return (
    <div className="App">
      <h1>Lista de Livros</h1>
      <Provider store={store}>
        <BookDashboard />
      </Provider>
    </div>
  );
}

export default App;
