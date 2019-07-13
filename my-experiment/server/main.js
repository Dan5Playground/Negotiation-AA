import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
import {negotiaitorPrompts, negotiationSetting, BATNA} from "./constants";


// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit(game => {
    // log game info
    console.log("Game in condition: ", game.treatment.hasPrompt,
        " will start, with workers",
        _.pluck(game.players, "id")
    );
    game.set("justStarted", true);

    //const issueList =  // add shuffle if there are more local
    // get a list of issues
    let issues = [];
    let itemsOwnedBy = {};
    negotiationSetting[0].forEach((item) => {
        issues.push(item.name);
        _.times(item.quantity, j => {
            //stage.set("item-"+ item.name + j.toString()+"-belongTo", "deck");
            itemsOwnedBy[item.name + "-" + j.toString()] = "undecided";
        });
    });


    // fix the color
    // to do more go to https://jdenticon.com/#icon-D3
    const avatarNames = ["Colton", "Aaron"];
    // similar to the color of the avatar
    const nameColor = ["#3D50B7", "#70A945"];

    // init the players
    game.players.forEach((player, i) => {
        player.set("name", "negotiator_" + i);
        player.set("avatar", `/avatars/jdenticon/${avatarNames[i]}`);
        player.set("nameColor", nameColor[i]);
        player.set("points", 0);
        player.set("agree", false);
        // For each player, set the value of all the issues
        // Note : different player may have different values
        negotiationSetting[0].forEach((item) => {
            // set the value of the object
            // if both side has the same payoff value
            player.set(item.name, item.value[0]);
            // else:
            //player.set(item.name, item.value[i]);

            // set the number of owned
            player.set("own-" + item.name, 0);
        });
    });

    // this game has one round with one stage only
    const round = game.addRound();
    let duration = 0;
    // add stage to round
    const stage = round.addStage({
        name: "negotiation",
        displayName: "Negotiation-1",
        durationInSeconds: game.treatment.duration // 5 and 10 min were normally used in IAGO
    });
    // bind stage-wise variables
    //
    stage.set("issues", issues);
    stage.set("itemsOwnedBy", itemsOwnedBy);
    stage.set("chatHistory", [{
        target: "all",
        text: "Welcome to the negotiation game.",
        subject: "System",
        type: "text"
    }]);
    stage.set("offerHistory", []);
    if (game.treatment.hasPrompt === true) {
        stage.set("prompts", negotiaitorPrompts);
    }
    // The players take actions by turns, start from the first player
    stage.set("activePlayer", game.players[0].get("name"));

});
