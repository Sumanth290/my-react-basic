import React from "react";
import AddOption from "./AddOption.jsx";
import Options from "./Options.jsx";
import Header from "./Header.jsx";
import Action from "./Action.jsx";
import OptionModal from "./OptionModal.jsx";

export default class SumanthApp extends React.Component{
  state = {
    options : [],
    selectedOption : undefined
  };

  componentDidMount(){
    try{
      const optsJSON = localStorage.getItem("optsJSON");
      const options = JSON.parse(optsJSON);
      if(options){
        this.setState(()=>({ options }));
      }
    } catch(e){
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length)
    {
      const optsJSON = JSON.stringify(this.state.options);
      localStorage.setItem("optsJSON",optsJSON)
    }
  }

  closeModal = () => {
    this.setState(() => ({ selectedOption : undefined }));
  }

  removeOptions = () => {
    this.setState(() => ({ options : [] }));
  }

  removeOption = (optToDelete) => {
    this.setState((prev) => {
      return {
        options: prev.options.filter((opt)=> optToDelete !== opt )
      };
    });
  }

  handlePick = () => {
    const randNum = Math.floor( ( Math.random() * this.state.options.length ) );
    console.log(this.state.options[randNum]);
    this.setState(() => ({ selectedOption : this.state.options[randNum] }));
  }

  addOption = (opt) => {
    if(!opt){
      return "Enter valid option";
    }
    else if(this.state.options.indexOf(opt) > -1){
      return "No duplicates allowed";
    }
    this.setState((prev) => ({ options : prev.options.concat(opt) }));
  }

  render(){
    const subtitle = "My Amazing app is just for you ";
    const desc = "Add your options below and we'll recommend you a random choice. So, put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} desc={desc}/>
          <div className="container">
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 1}/>
            <div className="optionbox">
              <Options hasOptions={this.state.options.length > 0} removeOpt={this.removeOption} removeOpts={this.removeOptions} opts={this.state.options}/>
              <AddOption add={this.addOption}/>
            </div>
          </div>
        <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
      </div>
    );
  }
}
