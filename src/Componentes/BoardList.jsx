import './BoardList.css';
import React, { Component } from 'react';

class BoardList extends Component {

  handleDelete = (event) => {    
    event.target.parentNode.parentNode.remove();    
  }
    render(){
      const { tarefas } = this.props;
      return(
        <div className="lista-tarefa">          
            {
              tarefas.map((tarefa, index) => (
                <label key={index}>

                  <div>
                    <input type="checkbox"/>
                    {tarefa}
                  </div>

                  <div>
                    <button onClick={this.handleDelete}>
                      x
                    </button>                    
                  </div>

                </label>
              ))
            }          
      </div>
    )
  }
};

export default BoardList;