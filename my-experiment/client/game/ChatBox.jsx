import React from "react";
import {ButtonGroup} from "@blueprintjs/core";
import Message from "./Message";


export default class ChatBox extends React.Component {
    state = {message: ""};


    handleChange = e => {
        const el = e.currentTarget;
        this.setState({[el.name]: el.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const text = this.state.message.trim();
        if (text !== "") {
            const {stage, player} = this.props;
            stage.append("chatHistory", {
                text: text,
                subject: player.get("name"),
                target: "all",
                type: "text"
            });
            this.setState({message: ""});
            /*const otherPlayers = _.reject(this.props.game.players,
                p => p._id === player._id);
            // Dan : only deal with 2 player conditions
            if (otherPlayers.length == 1)
                stage.set("whosTurn", otherPlayers[0]._id);
            player.set("satisfied", false);*/
        }


    };
    sendEmoji = (emoji, e) => {
        e.preventDefault();
        const {stage, player} = this.props;
        stage.append("chatHistory", {
            text: emoji,
            subject: player.get("name"),
            target: "all",
            type: "img"
        });
    };

    render() {
        const {game, stage, player} = this.props;
        const messages = stage.get("chatHistory");
        const {message} = this.state;
        const emojis = ["anger", "happy", "neutral", "sad", "shock"];
        let emoji_btn = [];
        emojis.map((img) => {
            emoji_btn.push(
                <button key={"btn-" + img}><img
                    key={"emoji-" + img}
                    src={"./resources/emojis/" + img + ".png"}
                    alt="emoji"
                    onClick={this.sendEmoji.bind(this, img)}/>
                </button>
            )
        });

        let msgDivs = [];
        messages.map((msg, i) => {
            if (msg.target === player.get("name") || msg.target === "all") {
                msgDivs.push(
                    <Message
                        key={"msg-" + i}
                        text={msg.text}
                        subject={msg.subject}
                        target={msg.target}
                        type={msg.type}
                        isSelf={msg.subject === player.get("name")}
                    />
                )
            }

        });

        // add system messages
        if (stage.get("activePlayer") === player.get("name")) {
            msgDivs.push(
                <Message
                    key="msg-sys"
                    text="Please start making offers by drag and drop the items"
                    subject="System"
                    target="all"
                    type="text"
                    isSelf={"system" === player.get("name")}
                />)
        } else {
            msgDivs.push(
                <Message
                    key="msg-sys"
                    text="Please wait for the other player ..."
                    subject="System"
                    target="all"
                    type="text"
                    isSelf={"system" === player.get("name")}
                />
            )
        }

        return (
            <div className="board bp3-card">
                <h3>Chat</h3>

                <div key="messages" className="chat-history bp3-card">
                    {msgDivs}
                    {/*{messages.length === 0 ? (*/}
                    {/*<div className="empty">No messages yet...</div>*/}
                    {/*) : null}*/}
                    {/*{messages.map((message, i) => (*/}
                    {/*<Message*/}
                    {/*key={i}*/}
                    {/*message={message}*/}
                    {/*isSelf={message.subject ? player.get("name") === message.subject: null}*/}
                    {/*/>*/}
                    {/*))}*/}

                </div>
                <div key="send" className="input-box">
                    <ButtonGroup className="bp3-fill">
                        {emoji_btn}
                    </ButtonGroup>
                    <form onSubmit={this.handleSubmit}>
                        <div className="bp3-control-group">
                            <input
                                name="message"
                                type="text"
                                className="bp3-input bp3-fill"
                                placeholder="Enter message here. "
                                value={message}
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className="bp3-button bp3-intent-primary"
                            >
                                + Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

