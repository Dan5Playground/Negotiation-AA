import React from "react";

export default class OfferDemo extends React.Component {
    constructor(props) {
        super(props);
        const {payoff} = props;
        this.state = {
            items: [
                {
                    name:"ball-1",
                    category:"self",
                    v: payoff["Ball"]},
                {
                    name:"ball-2",
                    category:"undecided",
                    v: payoff["Ball"]},
                {
                    name:"book-1",
                    category:"undecided",
                    v: payoff["Book"]},
                {
                    name:"lamp-1",
                    category:"other",
                    v:payoff["Lamp"]}]}}

    onDragStart = (ev, id) => {
        //console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let items = this.state.items.filter((task) => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            items
        });
    };
    render() {
        const { payoff } = this.props;
        let tasks = {
            self:[],
            other:[],
            undecided:[]
        };
        let tot_point = 0;
        this.state.items.forEach((i) => {
            if (i.category === 'self')
            {
                //console.log(i);
                tot_point += i.v;
            }
            tasks[i.category].push(
                    <img key = {i.name}
                         draggable
                         onDragStart = {(e) => this.onDragStart(e, i.name)}
                         src={"./resources/objects/" + i.name.split('-')[0] + ".png"}
                         className="icon"/>
            )

        })

        return (
            <div className="container-drag">
                <div className={"bp3-card basket bp3-elevation-3"}
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>{this.onDrop(e, "other")}}>
                    <h6 className="bp3-heading">Opponent's</h6>
                    {tasks.other}
                </div>
                <div className={"bp3-card basket deck bp3-elevation-1"}
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>this.onDrop(e, "undecided")}>
                    <h6 className="bp3-heading">undecided</h6>
                    {tasks.undecided}
                </div>
                <div className={"bp3-card basket bp3-elevation-3"}
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>this.onDrop(e, "self")}>
                    <h6 className="bp3-heading">{"Yours (Total points: " +
                                                tot_point.toString() + ")"}</h6>
                    {tasks.self}
                </div>


            </div>
        );




    }
}
