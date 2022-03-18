import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to=''>
        <h1>Contabilidade</h1>
      </Link>
      <nav>
        <Link to='invoices'>Faturas</Link>
        <Link to='expenses'>Despesas</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
