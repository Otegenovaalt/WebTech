import React, {Component} from 'react';
import RecipeList from "./RecipeList";
import RecipeListItem from "./RecipeListItem";
import CreateRecipe from "./CreateRecipe";
import _ from "lodash";
import Gazpacho from './img/img1.jpeg';
import Ratatouille from './img/img2.jpg';
import Fettuccine from './img/img3.jpg';

const recipes = [
   
    {
        name: "Gazpacho",
        description: "Gazpacho or Andalusian Gazpacho is a cold soup made of raw blended vegetables. A classic of Spanish cuisine, it originating in the southern region of Andalusia.",
        img: Gazpacho
    },
    
    {
        name: "Ratatouille",
        description: "Ratatouille is a French Provençal stewed vegetable dish, originating in Nice, and sometimes referred to as ratatouille niçoise.",
        img: Ratatouille    
    },
    
    {
        name: "Fettuccine",
        description: "Fettuccine is a type of pasta popular in Roman and Tuscan cuisine. It is a flat thick pasta made of egg and flour, wider than but similar to the tagliatelle typical of Bologna.",
        img: Fettuccine   
    }
];

class Recipe extends Component {

    constructor(props){
        super(props);

        this.state = {
            recipes,
            search: ""
        };

    }

    render(){
        return(
            <div className="main">
                <h2>Recipe List</h2>

                <div className="contSearch">
                    <input className="searchInput" type="text" placeholder="Search..." value={this.state.search} onChange={this.updateSearch.bind(this)} ref="searchInput"/>
                </div>

                <CreateRecipe createRecipe={this.createRecipe.bind(this)}/>
                
                <RecipeList
                    searchState={this.state.search}
                    recipes = {this.state.recipes}
                    saveRecipe = {this.saveRecipe.bind(this)}
                    deleteRecipe ={this.deleteRecipe.bind(this)}/>
            </div>
        );
    }

    updateSearch(e){
        this.setState({
            search: e.target.value
        });
    }

    createRecipe(name, description, img){
        this.state.recipes.push({
            name,
            description,
            img
        });

        this.setState({
            recipes: this.state.recipes
        });

    }

    saveRecipe(oldRecipe,newRecipe){


        const newName = newRecipe.editNameInput.value;
        const newDescription = newRecipe.editDescriptionInput.value;


        const foundRecipe = this.state.recipes.find(recipe => recipe.name === oldRecipe);
        foundRecipe.name = newName;
        foundRecipe.description = newDescription;

        this.setState({recipes: this.state.recipes});
    }

    deleteRecipe(recipeToDelete){
        _.remove(this.state.recipes,recipe => recipe.name === recipeToDelete);

        this.setState({
            recipes: this.state.recipes
        });
    }
}

export default Recipe;