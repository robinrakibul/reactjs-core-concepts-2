import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const products=[
  {name: 'laptop', price:153000},
  {name: 'phone', price:93000},
  {name: 'watch', price:33000},
  {name: 'tablet', price:50000},
]

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(33);
  const increaseCount = () =>{ setCount(count+1); }
  const decreaseCount = () =>{setCount(count-1);}
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
