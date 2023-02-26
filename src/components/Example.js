import React, { Component } from 'react'

 class Example extends Component {
    constructor(){
        super();
        this.state={
            text:'',
            print: '',
            delete: false
        };
        this.handleChange=this.handleChange.bind(this)
    };
    handleChange(event){
        //console.log(event.target.value)
        this.setState({
            text:event.target.value
        });
    };
  render() {
    console.log(this.state.text? this.state.text:'ni')

    return (
      <div style={{textAlign: "center"}}>
        <h1>Hello</h1>
        <div>
        <input type="text" onKeyUp={this.handleChange}></input>
        
        <button style={{marginLeft:"1%"}} onClick={()=> this.setState({print:this.state.text})}>submit</button>
        </div>
       {this.state.delete === false && this.state.print ? <div>
        <h1>{this.state.print}</h1>
        <button onClick={()=> this.setState({delete: !this.state.delete})}>Delete</button>
      </div>:<div></div>}
      </div>
    )
  }
}
export default Example
