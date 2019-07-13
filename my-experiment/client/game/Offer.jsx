import React from "react";
import Basket from "./Basket.jsx";


export default class Offer extends React.Component {

    render() {
        const {game, stage, player} = this.props;
        // _.reject : get the other player
        const otherPlayer = _.reject(game.players, p => p._id === player._id)[0];
        return (
            <div className="board bp3-card">
                <h3>Offer</h3>
                <div className="">
                    <div className="rooms">
                        <Basket
                            key={otherPlayer._id + '-basket'}
                            owner={otherPlayer.get("name")}
                            stage={stage}
                            game={game}
                            player={player}
                            isSelf={otherPlayer._id === player._id}/>
                    </div>
                    <Basket
                        key={'undecided-basket'}
                        owner="undecided"
                        className="flex-container wrap"
                        stage={stage}
                        game={game}
                        player={player}
                        isUndecided
                    />
                    <div className="rooms">

                        <Basket
                            key={player._id + '-basket'}
                            owner={player.get("name")}
                            stage={stage}
                            game={game}
                            player={player}
                            isSelf
                        />
                    </div>
                </div>

            </div>
        );
    }

}