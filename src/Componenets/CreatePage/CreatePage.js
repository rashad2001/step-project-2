import React, {Component} from 'react';
import "./CreatePage.css"

class CreatePage extends Component {




    render() {
        return (
            <div>
                <form className="form-class">
                    <h1>Fill data</h1>
                    <input type="text"   className="title-input"  placeholder="title"/>
                    <input type="text" className="text-input"   placeholder="Note text"/>
                  <div className="button-label-div">
                      <p className="color-text">Color</p>
                    <button  className="button-color blue" ></button>
                    <button className="button-color violet"></button>
                    <button className="button-color red"></button>
                    <button className="button-color black"></button>
            </div>
                    <button type="submit" className="button-submit">Create</button>
                </form>
            </div>
        );
    }
}

export default CreatePage;