console.log("app.js is running");

const app = {
  title : "Sumanth App",
  subtitle : "My Amazing app is just like me :p",
  options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const opt = e.target.elements.option.value;
    if(opt){
      app.options.push(opt);
      e.target.elements.option.value = "";
      reRenderingApp();
    }
};

const selectRandomOption = () => {
  const randNum = Math.floor( ( Math.random() * app.options.length ) );
  console.log(app.options[randNum]);
};

const clearOptions = (e)=>{
  app.options = [];
  reRenderingApp();
};

const reRenderingApp = () =>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      { (app.options && app.options.length > 0) ? (
        <div>
          <p>Here are your options</p>
          <button onClick={selectRandomOption}>Random Option</button>
          <button onClick={clearOptions}>Remove All</button>
          <ol>
            {
              app.options.map( (option,ind) => <li  key={"li"+ind}>{option}</li> )
            }
          </ol>
        </div>
      ) : <p>No options</p>}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template,appRoot);
};

reRenderingApp();
