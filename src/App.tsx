import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './components/data';
import { BodyCard } from './components/lists';

interface ProductCard {
  title: string
  text: string
}
const products: ProductCard[] = data

function App() {
  return (
    <div className="App">
      <div className='block-card'>
        <div className='img-card'>Image cap</div>
        <BodyCard props={products[0]} />
      </div>
      <div className='block-card'>
        <BodyCard props={products[1]} />
      </div>
    </div>
  );
}

export default App;
