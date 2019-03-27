import React, { Component, Fragment } from "react";
import CollectionSchedule from "../data/CollectionSchedule";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: CollectionSchedule[props.grade]
    };
  }
  days = ["Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця"];
  render() {
    return (
      <Fragment>
        <table className="table table-bordered">
          <tbody>
            {this.days.map((day, grade) => (
              <Fragment key={day}>
                <tr className="table-secondary text-center">
                  <td colSpan="2">{day}</td>
                </tr>
                {this.state.schedule[grade].map((lesson, number) => (
                  <tr key={day * 10 + number}>
                    <td scope="row">{number}</td>
                    <td>{lesson}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
export default Schedule;
