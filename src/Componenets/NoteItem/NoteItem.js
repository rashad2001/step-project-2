
import React, {Component} from 'react';
import './NoteItem.css';
import NoteCard from "../NoteCard/NoteCard";

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCards: props.albums
        }
    }

    render() {
        return<div className='album'>
            <NoteCard albums={this.state.allCards} />
        </div>;
    }

}

export default NoteItem;