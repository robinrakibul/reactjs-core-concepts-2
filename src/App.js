import logo from './logo.svg';
import './App.css';

const products=[
  {name: 'laptop', price:153000},
  {name: 'phone', price:93000},
  {name: 'watch', price:33000},
  {name: 'tablet', price:50000},
]

function App() {
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product> */}
    </div>
  );
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
