
import React, {Component} from 'react';
import './NoteItem.css';
import NoteCard from "../NoteCard/NoteCard";

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCards: props.notes
        }
    }

    render() {
        return<div className='album'>
            <NoteCard notes={this.state.allCards} />
        </div>;
    }

}

export default NoteItem;