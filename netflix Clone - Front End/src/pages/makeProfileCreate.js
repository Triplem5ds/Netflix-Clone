import React, { Component } from 'react';
import './makeProfileCreate.css';

class UserCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            ppUrl:'',
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    c{/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Add Profile</h1>
                    <h6><font color="#808080">Add a profile for a new person</font></h6>
                </header>
                <div className= "profileInfo">
                    <div className= "profilePicture">
                    </div>
                    <div className="username">
                    </div>
                </div>
            </div>
        );
    }
}
export default UserCreate;