import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const player = ['Sakib Al Hasan', 'Jamal Vuiya', 'Tamim Iqbal', 'Mashrafe Mortaza' ];
  const products = [
    {name : 'Photoshop', price : '$90.99'},
    {name : 'Illustrator', price : '$60.99'},
    {name : 'Adobe Pro', price : '$290.99'},
    {name : 'Premiere El', price : '$249.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:'cyan'}}>I am react learner</h1>
        <Counter></Counter>
        <User></User>
        <ul>
          {
           player.map(name => <li>{name}</li>)
          }
        </ul>
        <div style={{display:'flex'}}>
          {
            products.map(pd=> <Product product={pd}></Product>)
          }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        </div>
      </header>
    </div>
  );
}

function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
  return (
    <div>
      <ul>
        {
          user.map(user => <li style={{textAlign: 'start'}}>Name: {user.name}  <br /> Phone: {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count : {count} </h1>
      <button style={{margin: '5px'}} onClick={() => setCount(count - 1)}>Decrease</button>
      <button style={{margin: '5px'}} onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const style = {
    border : '1px solid cyan',
    borderRadius : '10px',
    margin : '10px',
    padding : '0 10px',
    width : '300px',
    height : '300px',
  }
  const {name , price} = props.product;
  return (
    <div style={style}>
    <h3>{name}</h3>
    <h1>{price}</h1>
    <button>Buy Now</button>
    </div>
  )
}

export default App;
