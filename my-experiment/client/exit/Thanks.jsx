import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  render() {
      const{player} = this.props;
    return (
      <div className="finished">
          <h3>Finished! </h3>
          <hr />
          <p>
              Please submit the following code to receive your bonus:
              <strong> {player._id}</strong>
          </p>
          <p>
              Thank you for participating!
          </p>
      </div>
    );
  }
}
