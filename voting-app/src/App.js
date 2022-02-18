import './App.css';
import ClassComp from './classVSfunction/ClassComp';
import FuncComp from './classVSfunction/FuncComp';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      {/* <ProductList /> */}
      <ClassComp />
      <hr />
      <FuncComp />
    </div>
  );
}

export default App;
