import React, { Component, Fragment } from "react";
import CollectionSchedule from "../data/CollectionSchedule";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: CollectionSchedule[props.grade]
    };
  }
  render() {
    return <div>{this.state.schedule}</div>;
  }
}
export default Schedule;
