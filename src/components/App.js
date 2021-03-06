import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor(){
    super()
    this.state = {
      vehicles: [],
      value: "",
      pilot:  ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange(e) {
    this.setState({
      value: e.target.value,
    });
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      pilot:this.state.value,
      value:""
    });
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentWillMount() {
   fetch('https://swapi.co/api/vehicles/')
   .then(r => r.json() )
   .then((json) => {
     console.log("Data from componentWillMount fetch", json)
     this.setState({vehicles: json.results})
   })
 }


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:
  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */


    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}

       <div className="jumbotron" style={{textAlign: 'left'}}>
          <h1>Star Wars</h1>
            <div><hr></hr></div>
          <h6>The Vehicles of Star Wars</h6>
       </div>
       <div className="jumbotron" style={{textAlign: 'center'}}>
        <h2>What is your name, pilot?</h2>
          <form onSubmit={this.handleSubmit}>
             <input value={this.state.value} onChange={this.handleNameChange}  placeholder = "Enter your name"  />
                <div><br /><button type="submit">Submit</button></div>
             <h2>{this.state.pilot}</h2>
          </form>
      </div>
      <div>
         {this.state.vehicles.map(vehicles => (
         <div className="card" style={{width: "17rem"}}>
           <div className="card-block">
             <h3 className="card-title">Vehicle: {vehicles.name}</h3>
             <h4 className="card-text">Model: {vehicles.model}</h4>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Specs </li>
             <li className="list-group-item">Manufacturer:  {vehicles.manufacturer}</li>
             <li className="list-group-item">Class: {vehicles.vehicle_class}</li>
             <li className="list-group-item">Passengers: {vehicles.passengers}</li>
             <li className="list-group-item">Crew: {vehicles.crew}</li>
             <li className="list-group-item">Length: {vehicles.length}</li>
             <li className="list-group-item">Max Speed: {vehicles.max_atmosphering_speed}</li>
             <li className="list-group-item">Cargo Capacity: {vehicles.cargo_capacity}</li>
           </ul>
         </div>
       ))}
       </div>
      </div>

  )
}
}

export default App;
