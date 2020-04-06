import React, {Component} from 'react';
import "./NoteCard.css"
class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote:[],
            notes: props.notes,
            id:props.id,

        }

    }

    openNote = (e) => {
        let selectedNote = this.state.notes.filter(album => album.id === e.currentTarget.getAttribute('id'));
        this.setState({selectedNote: selectedNote});
        this.setState({id: selectedNote[0].id});
    };

    render() {
        const notes = this.state.notes;
        return (
            <div className='album'>
                {
                    notes.map((card, ind) => {
                        return  <div key={ind} className="card">
                            <div className='album-info' style={{background: this.props.color}} onClick={this.openNote}>
                                <h6 className='album-name'>{card.name}</h6>
                                <p className='album-text' >{card.text}</p>



                            </div>
                        </div>
                    })
                }

            </div>
        );
    }

}

export default NoteCard;