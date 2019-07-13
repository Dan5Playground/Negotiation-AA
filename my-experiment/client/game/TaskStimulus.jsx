import React from "react";
import {HTMLTable} from "@blueprintjs/core";

export default class TaskStimulus extends React.Component {
    render() {
        const { round, stage, player } = this.props;
        // get the player's goal
        const goalDescriptions = player.get("goal");
        // get the name of all the issues
        const issues = stage.get("issues");
        let tbTitle = [];
        let tbVal = [];
        issues.forEach((name) => {
            tbTitle.push(
                <th key = {name} >{name}</th>
            );
            tbVal.push(
                <td key = {name + '_v'}>{player.get(name)}</td>);
        });




        return (
                <div className="task-stimulus bp3-card">
                    <div className = "">
                        <h3>Instruction:</h3>
                        <p>
                            You will play the role of <b>{goalDescriptions.SVO} </b>
                            that has the goal to <b>{goalDescriptions.goal}</b>.
                            {goalDescriptions.frame1 + ". "}<b>{goalDescriptions.frame2}</b>
                        </p>
                    </div>
                    <div className="center">
                        <HTMLTable className="bp3-html-table-bordered bp3-html-table-striped bp3-interactive">
                            <caption><strong>Value Table</strong></caption>
                            <thead><tr>
                                <th>Objects</th>
                                {tbTitle}
                            </tr></thead>
                            <tbody><tr key="payoffValue">
                                <th>Value (points per item)</th>
                                {tbVal}
                            </tr></tbody>
                        </HTMLTable>
                    </div>

                </div>
        );
  }
}
