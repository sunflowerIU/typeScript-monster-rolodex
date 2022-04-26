// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


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


//3. creating monsters app
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField :''
    }
  }

  async componentDidMount(){
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    this.setState({monsters:users})
    // console.log(users)
    // .then(response => response.json())
    // .then(data=>console.log(data))
  }

  render(){
    console.log(this.state)
    const {monsters , searchField} = this.state
    const filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return(
    <div className="App">
      <h1 className='heading'>
        Monster rolodex
      </h1>
      <SearchBox placeholder={'search monster'} handler = {text=>this.setState({searchField:text.target.value})} />
     <CardList monsters = {filteredMonsters} />
    </div>
    )    
  }
}


export default App;
