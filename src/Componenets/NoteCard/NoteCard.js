import React, {Component} from 'react';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: props.albums,
            starColor:true,
            id:props.id,
            onclick: props.onclick
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
                                <p className='album-text'>{card.text}</p>



                            </div>
                        </div>
                    })
                }

            </div>
        );
    }

}

export default NoteCard;