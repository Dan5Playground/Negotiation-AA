import React from "react";

export default class Issue extends React.Component {
    handleDragStart = e => {
        const { item, stage, player } = this.props;
        // if the player is not the active player, disable the movement
        if (stage.get("activePlayerName") != player.get("name"))
        {
            return;
        }

        e.dataTransfer.setData("text/plain", item);
        const dragger = stage.get(`item-${item}-dragger`); //check if there is already a dragger
        //if so, you can't move it, already someone is moving it!
        if (dragger) {
            e.preventDefault();
            return;
        }
        stage.set(`item-${item}-dragger`, player._id);
    };

    handleDragOver = e => {
        const { item, stage, player } = this.props;
        // if the player is not the active player, disable the movement
        if (stage.get("activePlayerName") != player.get("name"))
        {
            return;
        }
        e.preventDefault();
    };

    handleDragLeave = e => {

        e.preventDefault();
        console.log("released!");
        const { item, stage } = this.props;
        stage.set(`item-${item}-dragger`, null);
    };

    handleDragEnd = e => {
        e.preventDefault();
        const { item, stage, player} = this.props;
        // if the player is not the active player, disable the movement
        if (stage.get("activePlayerName") != player.get("name"))
        {
            return;
        }
        stage.set(`item-${item}-dragger`, null);

        //if dropped into non-allowed area
        if (e.dataTransfer.dropEffect === "none") {
            /*stage.append("log", {
                verb: "releasedItem",
                subjectId: player._id,
                object: item
            });*/
        }
    };

    render() {
        const { item, stage, game, player } = this.props;

        this.isDragabble = true; // usually everyone can drag, except if it is colored (i.e., being dragged by someone else)
        const dragger = stage.get(`item-${item}-dragger`);
        const style = {};
        const cursorStyle = { cursor: null };
        if (dragger) {
            const playerDragging = game.players.find(p => p._id === dragger);
            if (playerDragging) {
                style.fill = playerDragging.get("nameColor");
                this.isDragabble = playerDragging === player._id; //only one can drag at a time
            }
        } else {
            //if the item is NOT being dragged by anyone, then the cursor will be changed
            cursorStyle.cursor = "move";
        }

        return (
            <div

                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnd={this.handleDragEnd}
                //onDragExit={this.handleDragLeave}
                className="issue"
                style={cursorStyle}
            >
                <img
                    key = {item + "-img"}
                    src = {"./resources/objects/"+item.replace(/[0-9]/g, '')
                        +".png"}
                    width = "30px"/>
            </div>
        );
    }
}
