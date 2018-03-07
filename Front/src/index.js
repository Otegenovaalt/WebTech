import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Home from "./components/Home";
import Recipe from "./components/recipe/Recipe";
import React,{Component} from "react"
import LoginForm from "./components/login/LoginForm";

import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


class Index extends Component{

    constructor(props){
        super(props);

        this.state = {
        isToggleLogin: false
        }
    };
    render(){
        return(
            <Router history={history}>
                <div className="container">

                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink exact activeClassName="activeNav" to="/" href="#">Home</NavLink></li>
                                    <li><NavLink activeClassName="activeNav"  to="/recipe" >Recipe List</NavLink></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="Registration-account" onClick={this.onClickRegistration.bind(this)}><a><i className="fa fa-user"></i>Log In</a></li>

                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Route exact path="/" component={Home}/>
                    <Route path="/recipe" component={Recipe}/>
                  
                    {this.state.isToggleLogin ? <LoginForm onSetStateIsToggleLogin = {this.onSetStateIsToggleLogin.bind(this)}
                                                                  isToggleLogin = {this.state.isToggleLogin}
                                                                  /> : null}



                </div>
            </Router>
        );
    }

    onClickRegistration(){
        this.setState({
            isToggleLogin: true
        });

    }

    onSetStateIsToggleLogin(){
        this.setState({
            isToggleLogin: false
        });


    }

}

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
