import React, { Component } from "react";
import "./App.css";
import CardsList from "./components/card-list/card-list";
import Search from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      val: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>ROBOTS GALLERY</h1>
        <Search
          placeholder={"robots"}
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardsList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
