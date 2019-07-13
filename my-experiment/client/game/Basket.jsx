import React from "react";
import Item from "./Item.jsx";

export default class Basket extends React.Component {
    state = {
        hovered: false
    };
    handleDragOver = e => {
        const {stage, player, ...rest} = this.props;
        e.preventDefault();
        // if the player is not the active player, disable the movement
        if (stage.get("activePlayer") != player.get("name")) {
            return;
        }
        e.dataTransfer.dropEffect = "move";
        this.setState({hovered: true});
    };
    handleDragLeave = e => {
        const {stage, player, ...rest} = this.props;
        // if the player is not the active player, disable the movement
        if (stage.get("activePlayer") != player.get("name")) {
            return;
        }
        this.setState({hovered: false});
    };
    handleDrop = e => {
        const {owner, stage, player, game, ...rest} = this.props;

        // if the player is not the active player, disable the movement
        if (stage.get("activePlayer") != player.get("name")) {
            return;
        }
        e.preventDefault();


        const item = e.dataTransfer.getData("text/plain");
        this.setState({hovered: false});
        let fullListIssues = stage.get("itemsOwnedBy");

        // Avoid any unwanted drops!
        // The native DnD system allows people to drag anything
        // onto these drop zones (e.g. files from their desktop)
        // so we check this is an existing item first.
        if (fullListIssues[item] === null) {
            return;
        }

        //stage.set(`item-${item}-dragger`, null);
        const currentOwner = fullListIssues[item]; //stage.get(`item-${item}-room`);

        if (currentOwner === owner) {
            //if they kept the item where it is, no need to update
            return;
        }
        // Reset the agree variable when anyone make a changes
        game.players.forEach((player) => {
            if (player.get("agree")) {
                player.set("agree", false);
            }
        });
        fullListIssues[item] = owner;
        stage.set("itemsOwnedBy", fullListIssues);
    };


    render() {
        const {owner, isUndecided, stage, player, isSelf, ...rest} = this.props;

        const {hovered} = this.state;

        let totalScore = 0;

        const items = [];
        const allItems = stage.get("itemsOwnedBy");
        Object.keys(allItems).forEach((key) => {
            if (allItems[key] === owner) {
                items.push(
                    <Item
                        key={key}
                        draggable
                        item={key}
                        owner={owner}
                        stage={stage}
                        player={player}
                        {...rest}/>)
            }
            if (allItems[key] === player.get("name")) {
                totalScore += player.get(key.split("-")[0])
            }

        });

        const classNameBasket = isUndecided ? "undecided bp3-elevation-1" : "";
        const classNameHovered = hovered ? "bp3-elevation-3" : "";

        let title;
        if (isUndecided) {
            // "undecided"
            title = <h6 className='bp3-heading' key="deck">{owner.charAt(0).toUpperCase() + owner.slice(1)}</h6>
        } else if (isSelf) {
            title = <h6 className='bp3-heading' key="self">
                {"Yours ( Total score is : " + totalScore + " )"}</h6>
        } else {
            title = <h6 className='bp3-heading' key="other">{owner.charAt(0).toUpperCase() + owner.slice(1) + "'s"}</h6>
        }


        return (
            <div
                className={`bp3-card ${classNameBasket} ${classNameHovered}`}
                onDrop={this.handleDrop}
                onDragOver={this.handleDragOver}
                onDragLeave={this.handleDragLeave}
            >
                {/*Maybe move it to functions*/}
                <div className='basketName'>
                    {title}
                </div>
                <div className='basket'>
                    {items}
                </div>
            </div>
        );


    };
}
