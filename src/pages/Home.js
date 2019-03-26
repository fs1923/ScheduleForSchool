import React, { Component, Fragment } from "react";
import Schedule from "../componets/Schedule";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: 0
    };
  }
  render() {
    const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
      <div>
        {this.state.grade ? (
          <Schedule grade={this.state.grade} />
        ) : (
          <div className="container">
            <div className="btn-group-vertical">
              {grades.map((x, i) => (
                <button
                  className="btn"
                  onClick={() => {
                    this.setState({
                      grade: x
                    });
                  }}
                  key={i}
                >
                  {x} Клас
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
