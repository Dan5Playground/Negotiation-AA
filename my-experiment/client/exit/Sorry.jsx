import React from "react";

import {Centered} from "meteor/empirica:core";

export default class Sorry extends React.Component {
    static stepName = "Sorry";
    render() {
        const { player, hasNext, onSubmit } = this.props;
        let msg_reason;
        switch (player.exitStatus) {
            case "gameFull":
                msg_reason = "All games you are eligible for have filled up too fast...";
                break;
            case "gameLobbyTimedOut":
                msg_reason = "There were NOT enough players for the game to start..";
                break;
            case "playerEndedLobbyWait":
                msg_reason =
                    "You decided to stop waiting, we are sorry it was too long a wait.";
                break;
            case "playerLobbyTimedOut":
                msg_reason =
                    "There were NOT enough players for the game to start." +
                    " Please submit the following code to receive your reward: " +
                    player._id+"TO. ";
                break;

                default:
                msg_reason = "Unfortunately the Game was cancelled ...";
                break;
        }

        return(
            <Centered>
                <div className= 'finished'>

                <h3>Sorry!</h3>
                    <hr />

                <p>Sorry, you were not able to play today! {msg_reason} Please come back for the next scheduled game.
                    Thank you for your time.</p>
                </div>


            </Centered>

        )
    }


}