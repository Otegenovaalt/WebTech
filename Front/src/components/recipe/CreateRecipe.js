import React, {Component} from 'react';

export default class CreateRecipe extends Component {

    render(){
        return(
            <div className="dataForm">
            <form className="dataInputs" onSubmit={this.submitCreate.bind(this)}>

                <input className="inlineInputs" type="text" placeholder="title" ref="nameInput"/>
                <input className="inlineInputs" type="text" placeholder="img" ref="imgInput"/>
                <input className="descriptionInput" type="text" placeholder="description" ref="descriptionInput"/>
                <button className="createButton">Create</button>
            </form>
            </div>
        );
    }

    submitCreate(e){
       
        e.preventDefault();

        this.props.createRecipe(this.refs.nameInput.value,this.refs.descriptionInput.value,this.refs.imgInput.value);

        this.refs.nameInput = "";
        this.refs.descriptionInput = "";
        this.refs.imgInput = "";
    }
}