import React from "react";

import { Centered } from "meteor/empirica:core";
import {HTMLTable, Radio, RadioGroup} from "@blueprintjs/core";

export default class Quiz extends React.Component {
  state = { pay: "", batna: "", turnTaking: "", bestoutcome:""};

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pay.toLowerCase() !== "book" || this.state.batna !== "4" || this.state.turnTaking != "myturn"||
        (this.props.game.treatment.hasPrompt && this.state.bestoutcome != "fair")) {
      alert("Incorrect! Read the instructions, and please try again.");
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    const { pay, batna, turnTaking, bestoutcome } = this.state;

      // tutorial example
      const payoff ={
          Book:10,
          Lamp:5,
          Ball:2
      };
      let issues = [];
      let values = [];

      Object.keys(payoff).forEach((key) => {
          issues.push(
              <th key = {key} >{key}</th>
          );
          values.push(
              <td key = {key + '_v'}>{payoff[key]}</td>);
      });
    return (
      <Centered>
        <div className="quiz">
          <h1> Quiz </h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="sum">1. According to the payoff table, which item has the highest unit value?</label>
                <input
                    type="text"
                    dir="auto"
                    id="pay"
                    name="pay"
                    placeholder="e.g. lamp"
                    value={pay}
                    onChange={this.handleChange}
                    autoComplete="off"
                    required
                />
                <br/> <br/>
                <HTMLTable className="bp3-html-table-bordered bp3-html-table-striped bp3-interactive">
                    <caption><strong>Payoff Table</strong></caption>
                    <thead>
                    <tr>
                        <th>Objects</th>
                        {issues}
                    </tr>
                    </thead>
                    <tbody>
                    <tr key="payoffValue">
                        <th>Value (points per item)</th>
                        {values}
                    </tr>
                    </tbody>
                </HTMLTable>

            </div>
            <p>
              <label htmlFor="horse">
                2. How many points could you get if you terminate the negotiation without reaching an agreement?
              </label>
              <input
                type="text"
                dir="auto"
                id="batna"
                name="batna"
                placeholder="e.g. 6"
                value={batna}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </p>
            <div>
              <RadioGroup
                    label="3. Select the true statement"
                    onChange={this.handleChange}
                    selectedValue={this.state.turnTaking}
                    name="turnTaking"
                    value={turnTaking}
                    required
                >
                    <Radio
                        label="You could make an offer and send messages to the other player only when it's your turn."
                        value="myturn"
                    />
                    <Radio
                        label="You could send messages at any time."
                        value="anytime"
                    />
                </RadioGroup>
            </div>
              {game.treatment.hasPrompt?
                  <RadioGroup
                      label="4. Which of the following negotiation outcome is the best for a cooperative player A who
                      thinks fairness is the most important thing?"
                      onChange={this.handleChange}
                      selectedValue={this.state.bestoutcome}
                      name="bestoutcome"
                      value={bestoutcome}
                      required
                  >
                      <Radio
                          label="A: 1 book and 1 ball (total points : 12) ; B: 2 lamps (total points : 10)"
                          value="fair"
                      />
                      <Radio
                          label="A: 1 book and 2 lamps (total points : 20) ; B: 1 ball (total points : 2)"
                          value="notfair"
                      />
                      <Radio
                          label="A: 1 book and 1 lamp (total points : 15) ; B: 1 lamp and 1 ball (total points : 7)"
                          value="midfair"
                      />
                  </RadioGroup> : null
              }

            <p>
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
              </button>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}
