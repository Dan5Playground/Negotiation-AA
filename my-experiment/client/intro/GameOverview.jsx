import React from "react";

import { Centered } from "meteor/empirica:core";


export default class GameOverview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Game Overview </h1>
          <div className="centered">
            <img src="./resources/icons/negotiation.png" className="logo"/>
          </div>

            <p>
                Welcome to the AuctionWars Negotiation Game! In this game,
                you'll be negotiating over the contents of an abandoned
                storage locker with another turker. <strong>Both of you have to decide how
                to divide up a number of valuable items.</strong> These items are
                worth different points based on a payoff table.
            </p>
            <h2>Notes:</h2>
            <ul>
                <li>
                    The game <strong>must be played on a desktop or laptop</strong>.
                    There is NO mobile support
                </li>
                <li>
                    For the best experience, please <strong> maximize the window containing
                    this task or make it as large as possible.</strong>
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
      </Centered>
    );
  }
}
