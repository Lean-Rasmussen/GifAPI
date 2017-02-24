import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GifList from './components/gifdisplay'
import SearchForm from './components/searchForm'

class App extends Component {
  constructor(){
    super();
    this.state= {
    gifs:[]
    } 

  }
  componentDidMount(){
    

  }
  performSearch = (query)=>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
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
          <SearchForm onSearch={this.performSearch}/>
        </div>
        <div className='gifContainer'>
          <GifList data={this.state.gifs}/>
        </div>

      </div>
    );
  }
}

export default App;
