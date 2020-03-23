import React from "react";
import fire from "../firebase/fire";

class Login extends React.Component {
    state = {
        email: "",
        password: ""  
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            console.log(error)
        })
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            console.log(error)
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value} )
    }

    render () {
        return (
            <form className="form-signin">       
                <h3 className="form-signin-heading">Welcome! Chewbacca is waiting for you</h3>
                
                <input onChange={this.handleChange} value={this.state.email} type="email" className="form-control" name="email" placeholder="Username" required="" />
                <input onChange={this.handleChange} value={this.state.password} type="password" className="form-control" name="password" placeholder="Password" required=""/>     		  
                
                <button onClick={this.login} className="btn btn-lg btn-primary btn-block form-button" type="Submit">Login</button>
                <button onClick={this.signup} className="btn btn-lg btn-primary btn-block form-button" type="submit">Sign up</button>  	  			
            </form>			
        );
    }
}

export default Login;
