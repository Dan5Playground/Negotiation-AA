import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Rewards extends React.Component {
    render() {
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
        return (
            <Centered>
                <div className="instructions">
                    <h1> Rewards </h1>
                    <ul>
                        <li>
                            <p>If the other player doesn't show up after 15 minutes,
                            you will get the base reward  <span className="warning">$1.5</span> for compensation of your time.
                            </p>
                        </li>
                        <li>
                            <p>If you start the negotiation with another player, You will get
                                <span className="warning"> $3 </span> ($1.5 base reward + $1.5 bonus) by finishing this HIT
                                no matter the negotiation reaches an agreement or not.</p>
                        </li>
                        <li>
                            <p>If you finish all the questions in the survey at the end, You will get an extra
                            <span className="warning"> $0.5</span> bonus.
                            </p>
                        </li>
                        {game.treatment.hasPrompt?
                            <li>
                                Extra Bonus : Your score at the end of the game will decide your chances of winning
                                a lottery on MTurk for one of several <span className="warning">$10.00 </span>
                                bonus prizes. Please read the next page very carefully. It contains the details on
                                how your score will be calculated.
                            </li> : <li>
                                Extra Bonus : Several lottery with <span className="warning">$10.00 </span> bonus prizes
                                will be drawn at the end of the game.
                            </li>}

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
