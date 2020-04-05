import React, {Component} from 'react';

class SingleNotePage extends Component {
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
            <div>

            </div>
        );
    }
}

export default SingleNotePage;