import React, {Component} from 'react';
import LoginForm from "./login/LoginForm";


class Home extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="homepage">
                
                <img class="homepageImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBNhDxG-SeHbaNHxRtDOPIjaiqv09QjsOdFlM_Nv-_w5Cs5K9"/>
            </div>
        );
    }

}

export default Home;