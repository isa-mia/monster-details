import { Component } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchFild = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFild };
    });
  };

  render() {
    console.log("render from appJs");
    const { monsters, searchFild } = this.state;
    const { onSearchChange } = this;

    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFild);
    });
    return (
      <div className="App">
        {/* <input
          className="search-box"
          type="search"
          placeholder="monster search"
          onChange={onSearchChange}
        /> */}

        <h1 className="app-title">Monster Details</h1>

        <SearchBox
          onSearchChangeHandler={onSearchChange}
          className="search-box"
          placeholder="monster search"
        />

        <Cardlist monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
