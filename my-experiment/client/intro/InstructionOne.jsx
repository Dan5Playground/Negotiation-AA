import React from "react";

import { Centered } from "meteor/empirica:core";
import {HTMLTable} from "@blueprintjs/core";
import OfferDemo from "../shared/OfferDemo";

export default class InstructionOne extends React.Component {

  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    // tutorial example
    const payoff ={
        Book:10,
        Lamp:5,
        Ball:2
    };
    let issues = [];
    let values = [];

    Object.keys(payoff).forEach((key) => {
        issues.push(
            <th key = {key} >{key}</th>
        );
        values.push(
            <td key = {key + '_v'}>{payoff[key]}</td>);
    });


      return (
      <div>
        <div className="instructions">
          <h1> What you need to do </h1>

          <ul>
              <li>
                  <p>
                      <strong>Read the payoff table</strong> to get the unit price for each item. For example,
                      in the table below, the most valuable item is book (10 points/item). You opponent may or
                      may not have the same payoff table.
                  </p>
                  <div>
                      <HTMLTable className="bp3-html-table-bordered bp3-html-table-striped bp3-interactive">
                          <caption><strong>Payoff Table</strong></caption>
                          <thead>
                            <tr>
                              <th>Objects</th>
                                {issues}
                            </tr>
                          </thead>
                          <tbody>
                            <tr key="payoffValue">
                              <th>Value (points per item)</th>
                                {values}
                            </tr>
                          </tbody>
                      </HTMLTable>
                      <br></br>
                  </div>
              </li>
              {game.treatment.hasPrompt?
                  <li>
                      <p>
                          <strong>Read the instruction</strong> about<span className="warning"> your role</span>.
                          For example, you may be asked to act like a "cooperative" player who cares about fairness.
                          Different player may have different goal. Your chance of winning a
                          <span className="warning"> $10</span> bonus depends on the role you play. For instance,
                          for a "cooperative" player, the number of entries to the lottery is equal to the points of
                          the player who gets less points.
                      </p>
                  </li>:null
                  }
              <li>
                  <div>
                      <p>
                          <strong>Drag and drop</strong> the objects to either your or the other player's basket to make an
                          offer. Note: you could only make an offer when it's your turn. Try the interface below.
                      </p>
                  </div>
                  <OfferDemo payoff = {payoff}/>
                  <br/>
              </li>
              <li>
                  <p>
                      <strong>Communicate with the other player</strong> using the chat box. You could also press
                          the shortcut key to send emojis. Note: you could only send messages when it's your turn.
                  </p>
              </li>
              <li>
                  <p>
                      <strong>Accept/Send the offer</strong> by pressing
                        <button className={"bp3-button bp3-icon-exchange bp3-intent-success"}>Accept/Send Offer</button>
                         button. The negotiation ends when both of you reach an agreement.
                  </p>
              </li>
              <li>
                  <strong>Terminate</strong> the negotiation by pressing
                  <button className={"bp3-button bp3-icon- bp3-intent-warning"}> Terminate </button>
                  button if you can't reach an agreement after <strong>3</strong> rounds and you don't
                  want to continue. You can still get
                  <strong>4 points</strong>.
              </li>
          </ul>

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </div>
    );
  }
}
