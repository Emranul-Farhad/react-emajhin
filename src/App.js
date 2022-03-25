import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Products from './components/producuts/Products';
import { useState } from 'react';

function App() {
  const [Count , setCountAdd] = useState(0);

  const addCards = () => {
      setCountAdd(Count + 1);
  }
  return (
    <div className="App">
     <Nav count={Count}></Nav>
     <Products add={addCards} ></Products>
    </div>
  );
}

export default App;
