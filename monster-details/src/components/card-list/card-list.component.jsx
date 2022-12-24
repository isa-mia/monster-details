import { Component } from "react";
import "./card-list.styles.css";
import Card from "./card/card.component";
// import Card from "./card/card.component";

class Cardlist extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // const { name, email, id } = monster;
          // return (
          //   <div className="card-container" key={id}>
          //     <img
          //       src={`https://robohash.org/${id}?set=set2&size=180x180`}
          //       alt={`monster${name}`}
          //     />
          //     <h1>{name}</h1>
          //     <p>{email}</p>
          //   </div>
          // );

          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default Cardlist;
