import React from "react";

export default class Issue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursorStyle : { cursor: null }
        }}
    handleDragStart = e => {
        const { item, stage, player } = this.props;
        // if the player is not the active player, disable the movement
        if (stage.get("activePlayer") != player.get("name"))
        {
            alert("Please wait for your turn to make an offer. ");
        }
        e.dataTransfer.setData("text/plain", item);
        this.setState({
            ...this.state,
            cursorStyle:{ cursor:  "move"}
        });

        // const dragger = stage.get(`item-${item}-dragger`); //check if there is already a dragger
        // //if so, you can't move it, already someone is moving it!
        // if (dragger) {
        //     e.preventDefault();
        //     return;
        // }
        // stage.set(`item-${item}-dragger`, player._id);
    };
    handleDragOver = e => {
        return;
    };

    handleDragLeave = e => {

        e.preventDefault();
        console.log("released!");
        // const { item, stage } = this.props;
        // stage.set(`item-${item}-dragger`, null);
    };

    handleDragEnd = e => {
        e.preventDefault();
        console.log("end end end ")
        this.setState({
            cursorStyle:{ cursor: null }
        });
        // const { item, stage, player} = this.props;
        // // if the player is not the active player, disable the movement
        // if (stage.get("activePlayerName") != player.get("name"))
        // {
        //     return;
        // }
        // stage.set(`item-${item}-dragger`, null);
        //
        // //if dropped into non-allowed area
        // if (e.dataTransfer.dropEffect === "none") {
        //     /*stage.append("log", {
        //         verb: "releasedItem",
        //         subjectId: player._id,
        //         object: item
        //     });*/
        // }
    };
    render() {
        const { item,...rest } = this.props;
        const { cursorStyle } = this.state;
        return (
            <div
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnd={this.handleDragEnd}
                onDragExit={this.handleDragLeave}
                className="item"
                style={cursorStyle}
            >
                <img
                    key = {item + "-img"}
                    src = {"./resources/objects/"+item.split('-')[0] + ".png"}
                    width = "30px"/>
            </div>
        );
    }
}