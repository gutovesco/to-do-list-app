import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const items =[...this.state.items, newItem];
      this.setState({
        items:newItem,
        currentItem:{
          text:'',
          key:''
        }
      })
    }

  }
  render(){
    return (
      <div className="App">
      <header> 
        <form id="to-do-form" onSubmit={this.addItem}>
          <input value={this.state.currentItem.text} onChange={this.handleInput} type="text" placeholder="Adicione algo à lista"></input>
          <button type="submit">Adicionar</button>
        </form>
      </header>
      </div>
    );
  }
}

export default App;
