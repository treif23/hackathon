import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>

        <div className='tagline'>
          <h3 id='title' className='tagline'>Netflix Movie Roulette</h3>
          <h5 id='h5'>Find a random movie!</h5>
        </div>
        <hr />

        <div className="row">
          <div className='col-4'>
            HELLO
          </div>



          <div className='col-8'>
            <div id='todos'>
              View Todos
          </div>
            Movies show up here
          </div>
        </div>
      </div>
    );
  }
}




export default App;
