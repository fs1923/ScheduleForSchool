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
          <Fragment>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a
                    onClick={() =>
                      this.setState({
                        grade: 0
                      })
                    }
                  >
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {this.state.grade} Клас
                </li>
              </ol>
            </nav>
            <Schedule grade={this.state.grade} />
          </Fragment>
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
