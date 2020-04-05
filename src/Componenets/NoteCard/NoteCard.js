import React, {Component} from 'react';
import "./NoteCard.css"
class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: props.albums,
            id:props.id,
            color:props.color
        }

    }



    render() {
        const albums = this.state.albums;
        return (
            <div className='album'>
                {
                    albums.map((card, ind) => {
                        return  <div key={ind} className="card">
                            <div className='album-info'>
                                <h6 className='album-name'>{card.name}</h6>
                                <p className='album-text' style={this.state.color}>{card.text}</p>



                            </div>
                        </div>
                    })
                }

            </div>
        );
    }

}

export default NoteCard;