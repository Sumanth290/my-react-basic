
import React from "react";

export default class AddOption extends React.Component{
  state = {
    error : undefined
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const error = this.props.add(e.target.elements.option.value);
    this.setState((prev) => ({ error }));
    if(!error){
      e.target.elements.option.value = "";
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input className="addoptioninput" type="text" name="option" placeholder="Your option.."/>
          <button>Add Option</button>
          <div>( Max characters allowed : 200 )</div>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
