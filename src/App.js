import React, { Component } from "react";
import AddUniqueForm from "./components/AddUniqueForm/AddUniqueForm";
import UniqueList from "./components/UniqueList/UniqueList";
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      uniques: [],
    };
  }
  // adaugarea unui item unic pe ecran
  // pentru kodificarea partiala a state-ului folosesc functia prevState
  updateUniques(newUnique) {
    this.setState((prevState) => {
      return {
        uniques: [...prevState.uniques, newUnique],
      };
    });
  }
  deletUniques(uniques) {
    this.setState({ uniques: [] });
  }
  render() {
    return (
      <div className="App">
        {/* pasarea functiei catre componenta de form ca props */}
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
