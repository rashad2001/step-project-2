import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NoteItem from "../NoteItem/NoteItem";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []

        }
    }


    componentDidMount() {
        fetch('../../../db.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    albums: data
                });
            })
    }


    render() {
        return (
            <div className='App'>
                {
                    this.state.albums.length > 0 ? <NoteItem albums={this.state.albums}/> : null

                }
            </div>
        );
    }

}

export default Home;