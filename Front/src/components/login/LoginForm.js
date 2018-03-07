// import React,{Component} from 'react';
// import classNames from 'classnames';
// import _ from "lodash";




// export default class LoginForm extends Component{

//     constructor(props){
//         super(props);

//         this.state = {
//             isChangedToSignUp: false,
//             user: {
//                 email: "",
//                 password: ""
//             },

//             error: {
//                 email: null,
//                 password: null
//             }

//         };
//     };

//     renderAuthorization(){
//         if(this.state.isChangedToSignUp){
//             return(<div className="login-form-wrap">
//                 <h2 className="form-title">Sign Up</h2>
//                 <div className="exit">Cancel</div>

//                 <form onSubmit={this.handleForm.bind(this)}>
                   
//                     <div className={classNames('form-item',{'error' : _.get(this.state.error, "email")})}>
//                         <label  htmlFor="email">Email:</label>
//                         <input value={this.state.user.email} onChange={this.onTextFieldChange.bind(this)} placeholder="Your email address" type="email" id="email" name="email" />
//                     </div>
//                     <div className={classNames('form-item',{'error' : _.get(this.state.error, "password")})}>
//                         <label htmlFor="password">Password: </label>
//                         <input value={this.state.user.password} onChange={this.onTextFieldChange.bind(this)} placeholder="Your password" type="password" id="password" name="password" />
//                     </div>
                    
//                     <div className="form-action">
//                         <button className="btn btn-success">Sign Up</button>
//                     </div>
//                 </form>
//             </div>);
//         }

//         return(
//             <div className="login-form-wrap">
//                 <h2 className="form-title">Sign In</h2>
//                 <div className="exit" onClick={this.onClickExitButton.bind(this)}>Cancel</div>
//                 <form onSubmit={this.handleForm.bind(this)}>
//                     <div className={classNames('form-item',{'error' : _.get(this.state.error, "email")})}>
//                         <label    className="first-input" htmlFor="email">Email:</label>
//                         <input value={this.state.user.email} onChange={this.onTextFieldChange.bind(this)} placeholder="Your email address" type="email" id="email" name="email" />
//                     </div>
//                     <div className={classNames('form-item',{'error' : _.get(this.state.error, "password")})}>
//                         <label htmlFor="password">Password: </label>
//                         <input value={this.state.user.password} onChange={this.onTextFieldChange.bind(this)} placeholder="Your password" type="password" id="password" name="password" />
//                     </div>
//                     <div className="form-action">
//                         <button className="btn btn-success">Sign In</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }



//     render(){
//         return(
//             <div className="login-form">
//                 {this.renderAuthorization()}
//             </div>
//         );
//     }



//     onTextFieldChange(e){
//         const fieldName = e.target.name;
//         const fieldValue = e.target.value;

//         this.state.user[fieldName] = fieldValue;

//         this.setState({
//             user: this.state.user
//         });

//     }

//     onClickChangeToSignUp(){
//         this.setState({
//             isChangedToSignUp: true
//         });


//     }

    

//     onClickExitButton(){
//         this.props.onSetStateIsToggleLogin();
//     }


//     formValidation(fieldToValidate = [], callback = ()=>{}){
//         console.log("i am going to validate form");


//         const allFields = [
//             {
//                 name: {
//                     message: "Your name is requried",
//                     func: ()=>{
//                         const value = _.get(this.state.user, "name", null);

//                         return false; 
//                     }
//                 }
//             }
//         ];

//         const isValid = true;

//         callback(isValid);
//     }

//     handleForm(e){
//         e.preventDefault();

//         this.formValidation((isValid)=>{

//             console.log("THe form is validate: ", isValid);

//         });



//     }

// }