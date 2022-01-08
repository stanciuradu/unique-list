import React, { Component } from "react";
import AddUniqueForm from "./components/AddUniqueForm/AddUniqueForm";
import UniqueList from "./components/UniqueList/UniqueList";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      uniques: [],
    };
  }

  // adaugarea unui item unic pe ecran
  // pentru modificarea partiala a state-ului folosesc functia prevState
  updateUniques(newUnique) {
    this.setState((prevState) => {
      return {
        uniques: [...prevState.uniques, newUnique],
      };
    });
  }

  // functie pentru stergerea intregii liste de item-uri
  deletUniques(uniques) {
    this.setState({ uniques: [] });
  }

  render() {
    return (
      <div className="App">
        {/* pasez cele doua functii catre componenta de form pentru a fi apelate si punse in event */}
        {/* le pasez catre componenta de form deoarece in cadrul acesteia se gasesc butoanele pentru eventul de onClick */}
        <AddUniqueForm
          updateUniques={(unique) => this.updateUniques(unique)}
          deletUniques={(uniques) => this.deletUniques(uniques)}
        />
        <UniqueList uniques={this.state.uniques} />
      </div>
    );
  }
}

export default App;
