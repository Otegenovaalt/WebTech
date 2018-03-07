import React, {Component} from 'react';
import _ from "lodash";
import RecipeListItem from "./RecipeListItem";

export default class RecipeList extends Component {

    constructor(props){
        super(props);

        this.state = {
            isItemClicked: false,
            isEditing: false,
            name: "",
            description: "",
            cart: []
        };
    }

    showRecipes() {
        let filteredRecipes = this.props.recipes.filter(
            recipe=> {
                return recipe.name.toLowerCase().indexOf(this.props.searchState.toLowerCase()) !== -1;
            }
        );



        return _.map(filteredRecipes, (recipe, i) => <RecipeListItem
            onItemClick={this.onItemClick.bind(this)}
            key={i}
            {...this.props} {...recipe}/>);
    }


    renderActionButtons(){
        if(this.state.isEditing){
            return(
                <div className="recipeActionButtons">
                    <button onClick={this.onSaveClick.bind(this)} className="btn btn-default">Save</button>
                    <button onClick={this.onCancelClick.bind(this)} className="btn btn-danger">Cancel</button>
                    <button onClick={this.buyRecipe} className="btn btn-success">Buy</button>

                </div>
            );
        }
        
        return(
            <div className="recipeActionButtons">
                <button onClick={this.onEditClick.bind(this)} className="btn btn-default">Edit</button>
                <button onClick={this.props.deleteRecipe.bind(this,this.name)} className="btn btn-danger">Delete</button>
                <button onClick={this.buyRecipe} className="btn btn-success">Buy</button>

            </div>
        );
    }

    buyRecipe = () => {
        this.setState({
            cart: [...this.state.cart, this.name]
        })
    }

    renderRecipeInfo(){


        if(this.state.isEditing){
            return(
            <div className="rDescription">
                <form onSubmit={this.onSaveClick.bind(this)}>
             <span className="rLabel">Name:</span> <input type="text" defaultValue={this.name} ref="editNameInput"/>
                <br/>
                <span className="rLabel">Description:</span> <input type="text" defaultValue={this.description} ref="editDescriptionInput"/>
                <br/>
                </form>

                {this.renderActionButtons()}

            </div>

            );
        }



        return(
            <div className="rDescription">
                <span className="rLabel">Name:</span> {this.name}
                <br/>
                <span className="rLabel">Description:</span> {this.description}
                <br/>
                
                {this.renderActionButtons()}


            </div>
        );


    }


    renderItemDetails(){


        if(this.state.isItemClicked){
            return(
                <div className="contDetails">
                    {this.renderRecipeInfo()}
                </div>
            );
        }

        return null;
    }

        render()
        {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1">
                            {this.showRecipes()}
                        </div>
                        <div className="col-md-5">
                            {this.renderItemDetails()}

                        </div>
                        <div className="cart">
                        <h3>Cart</h3>
                        <div className="rDescription">
                            {this.state.cart.map((r, i) => {
                                return(
                                    <h4 key={i}>{r}</h4>
                                )
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            );
        }

    onItemClick(recipe){
        this.setState({
            isItemClicked: true
        });

        this.name = recipe.name;
        this.description = recipe.description;
        

    }

    onEditClick(){
        this.setState({
            isEditing: true
        });
    }

    onCancelClick(){
        this.setState({
            isEditing: false
        });
    }

    onSaveClick(e){
        e.preventDefault();

        const oldRecipe = this.name;
        const newRecipe = this.refs;



        this.props.saveRecipe(oldRecipe,newRecipe);

        this.setState({
            isEditing: false,
            name: this.state.name,
            description: this.state.description,
        });

    }
}

