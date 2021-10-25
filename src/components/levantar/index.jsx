import React from 'react'

class ChildComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      }
    }
  
    returnCounter = () => {
      return this.state.counter;
    }
    
    increment = (event) => {
      event.stopPropagation();
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1
        }
      })
    }
    
    render() {
      return (
        <div onClick={this.increment}>
          Child Value - {this.state.counter} - Click to increment
        </div>
      )
    }
  }
  
class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      }
    }
  
    returnCounter = () => {
      return this.state.counter;
    }
    
    increment = () => {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1
        }
      })
    }
  
    render() {
      return (
        <div onClick={this.increment}>
          <div>Parent Value - {this.state.counter} - Click to increment</div>
          <ChildComponent ref={(childComponent) => { console.log(childComponent); window.childComponent = childComponent}}/>
        </div>
      )
    }
  }
  export default Page