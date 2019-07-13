import React from "react";
import Offer from "./Offer"
import ChatBox from "./ChatBox"

export default class TaskResponse extends React.Component {
    handleTerminate = (e) => {
        e.preventDefault();
        // terminate the negotiation without agreement
        const {game, stage, player} = this.props;
        player.set("agree", false);
        stage.append("chatHistory", {
            text:  player.get("name") + " chooses to terminate the negotiation. Please press 'Terminate' " +
                "button to proceed",
            subject: "System",
            target: "all",
            type:"text"
        });
        game.players.forEach(player => {
            player.stage.submit();
        });
    };

    handleSendOffer = (otherPlayer, e) =>{
        e.preventDefault();
        const {stage, player} = this.props;
        // only works for 2-player game
        stage.set("activePlayer", otherPlayer.get("name"));
        player.set("agree", "true");
        // save the current offer to stage
        stage.append("offerHistory", stage.get("itemsOwnedBy"));

    };
  render() {
      const { game, stage, player } = this.props;
      // _.reject : get the other player
      const otherPlayer = _.reject(game.players, p => p._id === player._id)[0];
      let buttonText = "Send Offer";
      game.players.forEach((p)=>{
          if(p.get("agree"))
          {
              buttonText = "Accept Offer";
          }
      });
      let disableTerminate = false;
      if (stage.get("offerHistory").length < 6){
          disableTerminate = true
      }


      return (
        <div>
            <div className="task-response">
              <Offer {...this.props} ></Offer>
              <ChatBox {...this.props}></ChatBox>
            </div>
            <div className="control">
                <button type="button"
                        className={"bp3-button bp3-icon-exchange bp3-intent-success bp3-large"}
                        onClick={this.handleSendOffer.bind(this, otherPlayer)}
                        disabled = {stage.get("activePlayer") != player.get("name")}
                >
                    {buttonText}</button>
                <button type="button"
                        className={"bp3-button bp3-icon- bp3-intent-warning bp3-large"}
                        onClick={this.handleTerminate.bind(this)}
                        disabled={disableTerminate}>
                    Terminate</button>
            </div>
        </div>
      );
  }
}
