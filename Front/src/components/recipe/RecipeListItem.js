import React, {Component} from 'react';


export default class RecipeListItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
                    <div className="recipeItem"
                         onClick={this.props.onItemClick.bind(this,this.props)}
                    >
                        <div className="cont-img-wrap">
                            <img src={this.props.img} alt="noimg"/>
                        </div>
                        <div className="rDescription">
                            <span className="rLabel">Name:</span> {this.props.name}
                            <br/>
                            <span className="rLabel">Description:</span> {this.props.description}
                        </div>
            </div>
        );
    }

}
