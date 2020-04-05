import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import CreatePage from "../CreatePage/CreatePage";
import Home from "../Home/Home";
import Actual from "../Actual/Actual"
import './RouterPage.css'
class RouterPage extends Component {
    render() {
        return (
            <>

               <nav className="header-link">
                <Link to={'/'} className="link">NotesApp</Link>
                <Link to={'/actual'}><button className="actual-button">Actual </button>  </Link>
                <Link to={'/create'}><button className="create-button">Create </button>   </Link>
                </nav>
                <Route path={'/actual'} component={Actual}/>
                <Route path={'/create'} component={CreatePage}/>
                <Route exact path='/' component={Home}/>

            </>

        );
    }
}

export default RouterPage;