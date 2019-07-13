import React from "react";
import TaskStimulus from "./TaskStimulus"
import TaskResponse from "./TaskResponse"

export default class Task extends React.Component {
    render() {
        return (
          <div className="task">
            <TaskStimulus {...this.props} />
            <TaskResponse {...this.props} />
          </div>
    );
  }
}
