import React from "react";
import fire from "./firebase/fire";
import "./styles/App.scss";
import Login from "./components/Login";
import Animation from "./components/Animation";
import Routes from "./Routes";

class App extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
            user: {}
        }
   }
   
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState( {user} )
            }  else {
                this.setState( {user: null} )
            }
        })
    }
       
    render () {
        return (
            <div className="app-wrapper">
                {this.state.user ? 
                    (<Routes/>) : (<Login/>)}
                <Animation />
            </div>
        );
    }
}

export default App;
