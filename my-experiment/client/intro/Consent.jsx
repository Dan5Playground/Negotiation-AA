import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";
import BrowserDetection from "react-browser-detection";
import {contact} from "../local/localConst";

export default class Consent extends React.Component {
  render() {
      const contact_email = contact;

      return (
      <Centered>
        <div className="consent">
          <h1> Participation Consent Form </h1>
            <h5 className="bp3-heading">INTRODUCTION</h5>
            <p>
                Thank you for deciding to volunteer in this research study. This
                form will tell you about the study. You can choose to
                participate or not, you can also discontinue at any time.
                However, discontinuing may result in losing the payment.
                You may need to wait for up to <strong>15 minutes</strong> for
                another Turker to join.

            </p>
            <h5 className="bp3-heading">Why is this research study being done? </h5>
            <p>The purpose of this research is to develop a model of human
                negotiation.</p>

            <h5 className="bp3-heading">What will I be asked to do?</h5>
            <p>
                If you decide to take part in this study, we will ask you to: (1)
                Complete a negotiation with another Turker about how to divide a set of objects;
                (2) Fill in a short post-survey. More detailed instruction will be shown on the next page.
            </p>

            <h5 className="bp3-heading">How much of my time will it take?</h5>
            <p>
                The study should take up to 30 minutes in total.
            </p>
            <h5 className="bp3-heading">Will there be any risk or discomfort to me?</h5>
            <p>
                There are no foreseeable risks or discomforts to you for taking part in
                this study.
            </p>

            <h5 className="bp3-heading">Who will see the information about me?</h5>
            <p>
                All the data will be anonymous. Any
                reports or publications based on this research will use only group
                data and will not identify you or any individual as being of this
                project. Your data is also stored on Mechanical Turk’s servers,
                and the data there are subject to the Amazon Mechanical Turk
                Privacy Notice and Participation Agreement. If you have any
                questions regarding privacy, please feel free to contact {" " + contact_email}.

            </p>

            <h5 className="bp3-heading">Can I stop my participation in this study?</h5>
            <p>
                The decision to participate in this research project is up to you.
                You do not have to participate. If you decide to participate, but the
                system cannot match you to another Turker after waiting for <strong>15
                minutes</strong>, you can still get paid.

            </p>
            <h5 className="bp3-heading">Is there anything else I need to know?</h5>
            <p>
                You must be <strong>at least 18 years</strong> old to participate and
                you must be a <strong>native or proficient English speaker.</strong>
            </p>
            <br />
            <h5>
                I have read the consent form. By clicking the box labeled
                “I agree” I give my consent to proceed with the study.
            </h5>

          <ConsentButton text="I AGREE" />
        </div>
      </Centered>
    );
  }
}
