import React, { Component } from "react";
import "./Actual.css";

class Actual extends Component {
    state = {
        notes: [],

    };


    componentDidMount() {
        fetch('../../../db.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    notes: data,
                    completed:"false"
                });
            })
    }

    render() {
        const {id} = this.props;
        return (

            <div className="actual">
                {this.state.notes.map((card,ind) => (

                    <div
                        className="actual-item" style={{ backgroundColor: card.color }} key={id}


                    >
                        <h3 className="actual-h3" key= {ind} >{card.name}</h3>
                        <div className="actual-text" key= {ind} >{card.text}</div>
                    </div>
                ))}
            </div>
        );
    }
}
export default Actual;
