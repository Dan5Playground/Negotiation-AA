export const negotiaitorPrompts = [
        // setting one: SVO
        {
            "SVO":"a competitive player",
            "goal" : "get more points than the other player",
            "frame1" : "Every point you have more than the other player at the end of the game will give " +
                "you one entry into a lottery on MTurk for one of several $10 bonus prizes",
            "frame2":"So, the more points you have than the other player, the more likely you are to win!"
        },
        {
            "SVO":"an individualistic player",
            "goal" : "get as many points as possible",
            "frame1" : "Each point you have at the end of the game will give you one entry into a lottery on" +
                " MTurk for one of several $10 bonus prizes",
            "frame2":"So, the more points you have, the more likely you are to win!"
        },
        {
            "SVO":"a cooperative player",
            "goal" : "get the most points for both of you",
            "frame1" : "The minimal value you and the other player get at the end of the game will give you one" +
                " entry into a lottery on MTurk for one of several $10 bonus prizes ",
            "frame2":"So, the more similar your points are, the more likely you are to win."
        }];
// the setting of the negotiation is adapted from
// Johnathan Mell and Jonathan Gratch. 2017.
// Grumpy & Pinocchio: Answering Human-Agent Negotiation Questions through Realistic Agent Design.
// In Proceedings of the 16th Conference on Autonomous Agents and MultiAgent Systems (AAMAS '17).
// International Foundation for Autonomous Agents and Multiagent Systems, Richland, SC, 401-409.

// pay-off value designed for dyad-negotiation
// BATNA is 4, duration is 10 mins ~ 20mins
export const negotiationSetting = [
    [{name:"book", quantity: 5, value: [1,4] },
        {name:"painting", quantity: 5, value: [2,3] },
        {name:"lamp", quantity: 5, value: [3,2]},
        {name:"ball", quantity: 5, value: [4,1]}]
];

export const systemMessages = {
    waiting : "Please wait for the other player's response. ",
    active_long: "It's your turn. You could make a new offer, accept current offer" +
        " or send message to the other player. Click 'Accept/Send Offer' button when you finish. ",
    accept: "The other player accept the offer. You could press the 'Accept" +
        " offer' button to finish the negotiation or continue make changes.",
    active : "It's your turn now. "
};

