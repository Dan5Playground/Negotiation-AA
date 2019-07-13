import React from "react";

export default class Message extends React.Component {
    render() {
        const {text, subject, type, isSelf} = this.props;
        let msgDiv;
        const label = isSelf ? subject + "(You) : " : subject + " : ";
        const classNameText = subject === "System" ? "system" : "dialogue";
        if (type === "text") {
            msgDiv = <p className={classNameText}>
                <span><strong>{label}</strong></span>
                {text}
            </p>

        } else {
            msgDiv = <p className={classNameText}>
                <span><strong>{label}</strong></span>
                <img key={"msg-" + text}
                     src={"./resources/emojis/" + text + ".png"}
                     alt={"emoji-" + text}/>
            </p>
        }

        return (
            <div className="message">
                {msgDiv}
            </div>
        );
    }
}