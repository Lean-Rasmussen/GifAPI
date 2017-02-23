import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state= {
    gifs:[]
    } 

  }
  componentDidMount(){
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    .then(responseData => {
      this.setState({
        gifs :responseData.data.data})
    }).catch(error =>{
      console.log('error in Fetching or parsing data', error)
    } );

  }

  render() {
    console.log(this.state.gifs)
    return (
      <div className="App">
        <div className='headerContainer'>
          <h1>What are you giffing for start giffing already!!</h1>
          <input type='text'></input> <button>Search</button>
        </div>
        <div className='gifContainer'>
        </div>

      </div>
    );
  }
}

export default App;
