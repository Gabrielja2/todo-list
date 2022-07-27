import  InputTarefa  from "./Componentes/InputTarefa";
import  ButtonAddTarefa  from "./Componentes/ButtonAddTarefa";
import  Header  from "./Componentes/Header";
import  BoardList  from "./Componentes/BoardList";
import React, { Component } from "react";
import './App.css';



class App extends Component {  

  state={
    tarefa: '',
    listaTarefa: [],
    hasDisabled: true,
  };  

   handleChange = ({target: {value}}) => {
    this.setState({
      tarefa: value
    })
    this.habilitarBotaoAdicionar();
  }
  
  handleClick = () => {
    const { tarefa, listaTarefa } = this.state
    this.setState({
      listaTarefa: [...listaTarefa, tarefa],      
    })
    console.log(tarefa);
  }

  habilitarBotaoAdicionar = () => {
    const {tarefa} = this.state;
    if(tarefa.textContent !== 0) {
      this.setState({
        hasDisabled: false,     
      })
    } else {
      this.setState({
        hasDisabled: true,
      })
    }
  } 
  
  render(){
    const { listaTarefa, hasDisabled } = this.state;
    return (
      <div className="container">  
       <Header />
       <div className="add-tarefa">
        <InputTarefa        
            handleChange={this.handleChange}/>
        <ButtonAddTarefa
            hasDisabled={hasDisabled}             
            handleClick={this.handleClick}/>
       </div>
       <BoardList
            tarefas={ listaTarefa } 
       />
      </div>
    );  
  }  
}

export default App;
