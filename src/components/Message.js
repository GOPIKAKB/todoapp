import React, { Component } from 'react'

const names= [1,2,3,4,5]

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: "Welcome visitors",
      count: 0
    }
  }
  changeMessage() {
    this.setState({
      message: "thank you for subscribing"
    })
  }
  addCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
 
  //let data='gopikad'
  render() {
    return (
      <div>
        <h1>{this.state.count }</h1>
        <h2>{ this.state.message}</h2>
        <button onClick={() => { this.changeMessage(); this.addCount() }}> ubscribe</button>
        
        {names.map(element=>(
          <h1>{element*2}</h1>
        ))}
      </div>
    )
  }
}
export default Message