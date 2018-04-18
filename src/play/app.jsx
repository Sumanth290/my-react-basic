console.log("app jsx is running");

class SumanthApp extends React.Component{
  constructor(props){
    super(props);
    this.removeOptions = this.removeOptions.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options : []
    }
  }

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

  removeOptions(){
    this.setState(() => ({ options : [] }));
  }

  removeOption(optToDelete){
    this.setState((prev) => {
      return {
        options: prev.options.filter((opt)=> optToDelete !== opt )
      };
    });
  }

  handlePick(){
    const randNum = Math.floor( ( Math.random() * this.state.options.length ) );
    console.log(this.state.options[randNum]);
  }

  addOption(opt){
    if(!opt){
      return "Enter valid option";
    }
    else if(this.state.options.indexOf(opt) > -1){
      return "No duplicates allowed";
    }
    this.setState((prev) => ({ options : prev.options.concat(opt) }));
  }

  render(){
    const subtitle = "My Amazing app is just like me ";

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 1}/>
        <Options removeOpt={this.removeOption} removeOpts={this.removeOptions} opts={this.state.options}/>
        <AddOption add={this.addOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && (
        <div>
          <h2><span>{props.subtitle}
          <img src="\media\smiley.jpg" alt="Smiley face" height="25" width="25"/>
          <br/></span><br/></h2>
        </div>
      )}
    </div>
  );
}

Header.defaultProps = {
  title : "Sumanth's App"
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</button>
    </div>
  );
}


const Option = (props) => {
  return (
    <div style={{width:"30%",backgroundColor:"#ffcc99"}}>
      <li style={{height:"1=25px",borderStyle:"groove",textShadowOffset:{width:"1px",height:"1px"}}}>
        <b>{props.opt}</b>
        <a style={{color:"blue",float:"right",cursor: "pointer",textDecorationLine :"underline"}} onClick={()=>{
            props.removeOpt(props.opt);
          }}>remove</a>
      </li>
    </div> ) ;
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeOpts}>Remove all</button>
      {( props.opts && ( props.opts.length > 0 ) ) ? <p>Here are your Options</p> : (<p>Please add an option</p>)}

      {( props.opts && ( props.opts.length > 0 ) ) && (
        <div>
          <ul>
            {props.opts.map( (opt,ind) => <Option removeOpt={props.removeOpt} opt={opt} key={ind}/> ) }
          </ul>
        </div>
      )}
    </div>
  );
}

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error : undefined
    }
  }

  onFormSubmit(e){
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
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

ReactDOM.render(<SumanthApp />,document.getElementById("app"));
