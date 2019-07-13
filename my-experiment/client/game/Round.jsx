import React from "react";

import Task from "./Task.jsx";

const gameSound = new Audio("resources/sound/bell.mp3");

export default class Round extends React.Component {
  componentDidMount() {
        const { game } = this.props;
        if (game.get("justStarted")) {
            gameSound.play();
            game.set("justStarted", false);
        }};

  render() {
    const { stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">
          <Task game={game} stage={stage} player={player} />
        </div>
      </div>
    );
  }
}
