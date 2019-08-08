import React, { Component } from "react"
import { Card, Button, ButtonGroup } from "react-bootstrap"
import '@babel/polyfill'

export default class Carta extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      quote:'',
      author:''
    }
  } 

  async componentDidMount(){ 
    const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    const data = await res.json()
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1
    let quote = data.quotes[randomNum]
    
    this.setState( { 
        data: data.quotes,
        quote: quote.quote,
        author: quote.author
     } )
     
   }
  
  handleClick = () => { 
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1
    let quote = this.state.data[randomNum]
    
    this.setState( { 
        
        quote: quote.quote,
        author: quote.author
     } )
   } 
    
  
  render() {

    const uri = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote}. -${this.state.author}`
    return (
      <div className='mt-5 pt-5'>
        <Card className='m-5 ' id='quote-box' >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <div className='h2 p-3' id='text'>
                { this.state.quote }
            </div>
            <footer className="blockquote-footer">
             <span className='mr-5' id='author'><cite title="Source Title">{ this.state.author }</cite></span>
             
              <ButtonGroup className='ml-5'>
                  <Button onClick={ this.handleClick } id='new-quote' className='ml-5' variant="outline-primary">New Quote</Button>
                  <a className="btn btn-outline-primary" target='_blank' href={uri} id='tweet-quote'>Tweet</a>
                  
              </ButtonGroup>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      </div>
    );
  }
}
