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
      image: null,

    };
    this.generateQuote = this.generateQuote.bind(this);
    //this.generateImage = this.generateImage.bind(this);
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
      axios({
        method: 'get',
        url: 'https://pixabay.com/api/?key=8803337-19b61cf98e050e2ccfcbf99ba&q=' + this.state.author,
        headers: {
          'accept': 'application/json',
        }
      }).then((res) => {
        if (res.data.hits.length > 1) {
          console.log(res.data);
          const image = res.data.hits[1].webformatURL;
          this.setState({ image: image });
          console.log('image');

        } else if (this.state.author == "Voltaire") {
          this.setState({ image: 'http://oll.libertyfund.org/media/W1siZiIsInBlb3BsZS8zODA0L0QnYXByw6hzX01hdXJpY2VfUXVlbnRpbl9kZV9MYV9Ub3VyLF9Qb3J0cmFpdF9kZV9Wb2x0YWlyZSxfZMOpdGFpbF9kdV92aXNhZ2VfKGNow6J0ZWF1X2RlX0Zlcm5leSkuanBnIl1d/D%27apr%C3%A8s_Maurice_Quentin_de_La_Tour%2C_Portrait_de_Voltaire%2C_d%C3%A9tail_du_visage_%28ch%C3%A2teau_de_Ferney%29.jpg?sha=3d190836d5c18638' });
        } else if (this.state.author == 'Paul Erdos') {
          this.setState({ image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Erdos_head_budapest_fall_1992.jpg/200px-Erdos_head_budapest_fall_1992.jpg' });
        } else if (this.state.author == "Sir Winston Churchill") {
          this.setState({ image: 'http://www.artnet.com/WebServices/images/ll00045lldU1uGFgOKECfDrCWvaHBOcbpGD/elsie-barling-sir-winston-churchill-(after-yousuf-karsh).jpg' });
        }
        else if (this.state.author == "Thomas Alva Edison") {
          this.setState({ image: 'https://media1.britannica.com/eb-media/47/79847-004-186AC6B6.jpg' });
        }
        else if (this.state.author == "Thomas Alba Edison") {
          this.setState({ image: 'https://media1.britannica.com/eb-media/47/79847-004-186AC6B6.jpg' });
        }
        else {
          this.setState({ image: 'https://static1.squarespace.com/static/5255bb7ce4b0a1f7f0508f19/t/53909e98e4b0a29c720d5985/1401986713890/?format=300w' });
          console.log('no images')
        }
      })
    });
  }




  render() {

    if (this.state.quote == null) {
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
                    <button className="btn col-lg-12 create-todo" onClick={this.generateQuote} >Generate</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      );

    } else {

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
                    <button className="btn col-lg-12 create-todo" onClick={this.generateQuote}
                    >Generate</button>
                  </div>
                </form>
              </div>
            </div>



            <div className='col-lg-8' id='info'>
              <div className='row' id='row'>
                <div className='col-lg-4' id='info2'>
                  <img src={this.state.image} />
                </div>
                <div className='col-lg-8' id='quote'>
                  <strong>{this.state.quote}</strong>
                  <div id='author'>
                    -<i>{this.state.author}</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
}




export default App;
