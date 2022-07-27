import React, {Component} from "react";

class ButtonAddTarefa extends Component {  
  render(){    
    const { handleClick, hasDisabled } = this.props;
    return (
      <div>     
        <button
          disabled={hasDisabled}
          type="button"
          onClick={handleClick}          
        >
          Adicionar
        </button>
      </div>
    )
  }  
};

export default ButtonAddTarefa;