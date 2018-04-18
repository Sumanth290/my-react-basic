
let showDetails = false;

const toggleVisibility = (e) => {
  e.target.innerHTML = ( ( showDetails ) ? "Show Details" : "Hide Details" ) ;
  showDetails = !showDetails;
  renderMe();
};

const renderMe = () => {
  const template = (
    <div>
      <h1>Toggle Visibility</h1>
      <button onClick={toggleVisibility}>Show Details</button>
      {showDetails && <p>Showing the Details needed!</p>}
    </div>
  );

  const appRoot = document.getElementById("app");
  document.title = "Build it!";
  ReactDOM.render(template,appRoot);
};

renderMe();
