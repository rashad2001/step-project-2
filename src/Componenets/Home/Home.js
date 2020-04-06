import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NoteItem from "../NoteItem/NoteItem";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []

        }
    }


    componentDidMount() {
        fetch('../../../db.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    notes: data
                });
            })
    }


    render() {
        return (
            <div className='App'>
                {
                    this.state.notes.length > 0 ? <NoteItem notes={this.state.notes}/> : null

                }
            </div>
        );
    }

}

export default Home;