// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';


///////1. using function for app

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello everyone
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



//2. using classes for app

// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       string:'Amit Thing'
//     }
//   }
//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello {this.state.string}
//         </p>
//      <button onClick={()=>this.setState({string:'sir'})}>click me</button>
//       </header>
//     </div>
//   );   
//   }
// }


//3. creating superhero app
class App extends Component{
  constructor(){
    super();
    this.state = {
      superHero:[]
    }
  }

  async componentDidMount(){
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    this.setState({superHero:users})
    // console.log(users)
    // .then(response => response.json())
    // .then(data=>console.log(data))
  }

  render(){
    return(
    <div className="App">
     <CardList monsters = {this.state.superHero} />
    </div>
    )    
  }
}


export default App;
