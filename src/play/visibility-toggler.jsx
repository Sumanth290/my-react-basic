
class Toggler extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showDetails : false
    };
  }

  toggle(){
    this.setState((prev)=>{
      return ({
        showDetails : !prev.showDetails
      });
    })
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggler</h1>
        <button onClick={this.toggle}>{
            ( this.state.showDetails ? "Hide Details" : "Show Details" )
          }</button>
        { this.state.showDetails && (
          <p>These are some Details to show</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Toggler />,document.getElementById("app"));
