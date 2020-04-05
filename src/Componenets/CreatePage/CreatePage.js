import React, {Component} from 'react';
import "./CreatePage.css"
class CreatePage extends Component {
    render() {
        return (
            <div>
                <form className="form-class">
                    <h1>Fill data</h1>
                    <input type="text" className="title-input" placeholder="title"/>
                    <input type="text" className="text-input" placeholder="Note text"/>
                    <button type="submit" className="button-submit">Create</button>
                </form>
            </div>
        );
    }
}

export default CreatePage;