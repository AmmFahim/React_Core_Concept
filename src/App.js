import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const actors = ['Rahim', 'Karim', 'Shakib', 'sohel', 'sazzad']
  const products = [
    {name:'Photoshop', price:'$90.00'},
    {name:'Pdf', price:'$50.00'},
    {name:'Video-Editor', price:'$200.00'},
    {name:'Illustrator', price:'$65.00'},
    {name:'Computer', price:'$89.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Counter></Counter>
        <Users></Users>
        <p>Dynamic Actor List....</p>
        <ol>
          {
            actors.map(actor => <li>{actor}</li>)
          }

        </ol>
        <p>Dynamic Adobe Shop....</p>
        <ul>
          {
            products.map(p=> <Product productArray = {p}></Product>) //eta holo dynamic way te product calling
          }
        </ul>
        <p>Static Adobe Shop....</p>
        <Product productArray = {products[0]}></Product> {/* eta dynamic na, dakle asbe noile na */}
        <Product productArray = {products[1]}></Product>
        <p>All Bangladeshi Cricket Player</p>
        <p> Static Player List....</p>
        <Player name="aa" age = "23"></Player>
        <Player name="Shakib Al Hasan" age = "32"></Player>
        <Player name = "Mushfique" age = "30"></Player>
        <Player name = "Mahmud-Ullah-Riad" age = "36"></Player>

        <person></person>
      </header>
    </div>
  );
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data));
  }, [])
  return(
    <div>
      <h2>Dynamic User: {users.length}</h2>
      <ul>
      {
        users.map(user => <li>Name: {user.name}...........Email: {user.email}</li>)
      }
      </ul>

    </div>
  )
}

function Counter(){
  const[count,setCount]= useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () =>setCount(count+1) }>Increase</button>
      <br />
      <button onClick={ () =>setCount(count-1) }>Decrease</button>
    </div>
  )
}


function Product(props){
  const playerStyle = {
    border: '2px solid red',
    margin:'20px',
    borderRadius:'5px',
    width:'400px',
    height:'200px',
    backgroundColor:'lightgray'
  }
  const {name,price} = props.productArray;
  return(
    <div style = {playerStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Player(props){
  const playerStyle = {
    border: '2px solid white',
    margin:'20px',
    borderRadius:'5px',
    width:'400px',
    height:'200px'
  }
  return(
    <div style = {playerStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
  
    </div>
  )
}




export default App;
