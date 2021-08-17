import logo from './logo.svg';
import './App.css';
import ListProducts from "./components/ListProducts"
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <AddProduct/>
      <ListProducts/>
    </div>
  );
}

export default App;
