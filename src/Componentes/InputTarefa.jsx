import React, {Component} from "react";
import './InputTarefa.css';

class InputTarefa extends Component {    
  render() {
    const { handleChange } = this.props
    return(
      <div className="input">
        <input
          maxLength="59"
          type="text"
          name="nova-tarefa"
          id="novaTarefa"

          onChange={handleChange}
        />      
      </div>
    )
  }
};

export default InputTarefa;
