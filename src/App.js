import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mashapeKey: 'eO5RGE04C0mshRYpPY5SzujZUSBip1Zko0BjsngU9bv2lL4JYI',
      quote: null,
      author: null,
    };
    this.generateQuote = this.generateQuote.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  generateQuote(e) {
    e.preventDefault();
    console.log('inside generateQuote func');
    axios({
      method: 'get',
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10',
      headers: {
        'X-Mashape-Key': `${this.state.mashapeKey}`,
        'accept': 'application/json'
      }
    }).then((res) => {
      console.log(res);
      const author = res.data.author;
      const quote = res.data.quote;
      this.setState({ author: author, quote: quote });
    });

  }

  // handleClick(e) {
  //   e.preventDefault();
  //   console.log('handclick func');
  //   this.generateQuote();
  // }

  render() {
    return (


      <div className='container'>

        <div className='tagline'>
          <h3 id='title' className='tagline'>Random Famous Quote Generator</h3>
          <h5 id='h5'>Generate famous quotes!</h5>
        </div>
        <hr />

        <div className="row">
          <div className='col-4'>
            <div>
              <form>
                <div id='button'>
                  <button className="btn col-lg-12 create-todo" onClick={this.generateQuote}>Generate</button>
                </div>
              </form>
            </div>
          </div>



          <div className='col-lg-8' id='info'>
            <div className='col-lg-12' id='quote'>
              Quote: {this.state.quote}
            </div>
            <div id='author'>
              Author: {this.state.author}
            </div>
          </div>
        </div>
      </div>

    );
  }
}




export default App;
