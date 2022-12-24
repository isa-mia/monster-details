import { Component } from "react";

class Val extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Val;

// import { Component } from "react";

// class Val extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// export default Val;
