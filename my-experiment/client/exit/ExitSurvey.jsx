import React from "react";

import {Centered} from "meteor/empirica:core";

const Radio = ({selected, name, value, label, onChange}) => (
    <label>
        <input
            type="radio"
            name={name}
            value={value}
            checked={selected === value}
            onChange={onChange}
        />
        {label}
    </label>
);

export default class ExitSurvey extends React.Component {
    static stepName = "ExitSurvey";
    state = {age: "", gender: "", strength: "", fair: "", feedback: "", education:"", agreement:"",
        selfGoal:"", preceivedGoal:"", selfStratergies:"", otherStratergies:"", selfGoalAchieved:"",
        RCT:""};

    handleChange = event => {
        const el = event.currentTarget;
        this.setState({[el.name]: el.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        const {player} = this.props;
        const {age, gender, strength, fair, feedback, education, agreement, selfGoal, preceivedGoal,
            selfGoalAchieved, selfStratergies, otherStratergies, RCT} = this.state;

        return (
            <Centered>
                <div className="exit-survey">
                    <h1> Exit Survey </h1>
                    <p>
                        Please submit the following code to receive your bonus:{" "}
                        <strong>{player._id}</strong>. You final <strong>bonus</strong> is $1.5 in addition of the $1.5 base reward
                        for completing the HIT.
                    </p>

                    <br/>
                    <p>
                        Please answer the following short survey for another $0.5 bonus.
                    </p>

                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <label>1. Have you reached an agreement with the other player?</label>
                            <div>
                                <Radio
                                    selected={agreement}
                                    name="agreement"
                                    value="Yes"
                                    label="Yes"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={agreement}
                                    name="agreement"
                                    value="No"
                                    label="No"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>2a. What is your goal in the game?</label>
                            <div>
                                <Radio
                                    selected={selfGoal}
                                    name="selfGoal"
                                    value="competitive"
                                    label="get more points than the other player"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={selfGoal}
                                    name="selfGoal"
                                    value="individualistic"
                                    label="get as many points as possible"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={selfGoal}
                                    name="selfGoal"
                                    value="cooperative"
                                    label="get the most points for both of you"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label>2b. Did you achieve your goal?</label>
                            <div>
                                <Radio
                                    selected={selfGoalAchieved}
                                    name="selfGoalAchieved"
                                    value="Yes"
                                    label="Yes"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={selfGoalAchieved}
                                    name="selfGoalAchieved"
                                    value="No"
                                    label="No"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label>3. What do you think the other player's goal is in the game?</label>
                            <div>
                                <Radio
                                    selected={preceivedGoal}
                                    name="preceivedGoal"
                                    value="competitive"
                                    label="get more points than you"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={preceivedGoal}
                                    name="preceivedGoal"
                                    value="individualistic"
                                    label="get as many points as possible"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={preceivedGoal}
                                    name="preceivedGoal"
                                    value="cooperative"
                                    label="get the most points for both of you"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="strength">
                                4. How would you describe your strategy(-ies) in the game?
                            </label>
                            <div>
                                  <textarea
                                      dir="auto"
                                      id="selfStratergies"
                                      name="selfStratergies"
                                      value={selfStratergies}
                                      onChange={this.handleChange}
                                  />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="strength">
                                5. How would you describe the other player's strategy(-ies) in the game?
                            </label>
                            <div>
                                  <textarea
                                      dir="auto"
                                      id="otherStratergies"
                                      name="otherStratergies"
                                      value={otherStratergies}
                                      onChange={this.handleChange}
                                  />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="strength">
                                6.The lady sitting on the right in the pictures hides a roll of
                                <strong> adhesive tape</strong> in
                                a brown paper bag. She knows what is in the bag, though she can no longer see it.
                                She also knows that the other person sitting on the left does not know the identity
                                of that object. If <strong>the person on the left</strong> tells her to move
                                the tape, which tape will she pick up?
                            </label>
                            <div>
                                <Radio
                                    selected={RCT}
                                    name="RCT"
                                    value="adhesive"
                                    label="The adhesive tape in the brown paper"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={RCT}
                                    name="RCT"
                                    value="cassette"
                                    label="The cassette tape box on the table"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="center">
                                <img  src={"./resources/UI/RCT.png"} alt = "RCT"/>
                            </div>
                        </div>

                        <hr/>
                        <p>The following questions are optional. You do not have to provide
                            any information you feel uncomfortable with.</p>
                        <div className="form-line">
                            <div>
                                <label htmlFor="age">Age</label>
                                <div>
                                    <input
                                        id="age"
                                        type="number"
                                        min="0"
                                        max="150"
                                        step="1"
                                        dir="auto"
                                        name="age"
                                        value={age}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender">Gender</label>
                                <div>
                                    <input
                                        id="gender"
                                        type="text"
                                        dir="auto"
                                        name="gender"
                                        value={gender}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Highest Education Qualification</label>
                            <div>
                                <Radio
                                    selected={education}
                                    name="education"
                                    value="high-school"
                                    label="High School"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={education}
                                    name="education"
                                    value="bachelor"
                                    label="US Bachelor's Degree"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={education}
                                    name="education"
                                    value="master"
                                    label="Master's or higher"
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    selected={education}
                                    name="education"
                                    value="other"
                                    label="Other"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-line">

                            <div>
                                <label htmlFor="fair">Do you feel the pay was fair?</label>
                                <div>
                                  <textarea
                                      dir="auto"
                                      id="fair"
                                      name="fair"
                                      value={fair}
                                      onChange={this.handleChange}
                                  />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="feedback">
                                    Feedback, including problems you encountered.
                                </label>
                                <div>
                                  <textarea
                                      dir="auto"
                                      id="feedback"
                                      name="feedback"
                                      value={feedback}
                                      onChange={this.handleChange}
                                  />
                                </div>
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Centered>
        );
    }
}
