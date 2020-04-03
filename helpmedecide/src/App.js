import React from 'react';
import './App.css'
import Register from './components/Login/register'
import Login from './components/Login/login'
import Splash from './components/Splash/Splash'
import Home from './components/Home/Home'
import NewPoll2 from './components/MakePoll/NewPoll2'
import OpenPolls from './components/OpenPolls/OpenPolls'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      step: "Splash" 
    }
    this.stepLogin = this.stepLogin.bind(this);
    this.stepRegister = this.stepRegister.bind(this);
    this.stepLoggedIn = this.stepLoggedIn.bind(this);
    this.stepLogout = this.stepLogout.bind(this);
  }

  stepLogin() {
    this.setState({
      step: "Login"
    })
  }

  stepRegister() {
    this.setState({
      step: "Register"
    })
  }

  stepLoggedIn() {
    this.setState({
      step: "Authed"
    })
  }

  stepLogout() {
    this.setState({
      step: "Splash"
    })
  }

  render() {
    if (this.state.step === "Splash") {
      return (
        <div className="App">
        <Splash login={this.stepLogin} register={this.stepRegister}/>
        </div>
      );
    } else if (this.state.step === "Login") {
      return (
        <div className="App">
        <Login register={this.stepRegister} authed={this.stepLoggedIn}/>
        </div>
      );
    } else if (this.state.step === "Register") {
      return (
        <div className="App">
        <Register login={this.stepLogin} authed={this.stepLoggedIn}/>
        </div>
      );
    } else if (this.state.step === "Authed") {
      return (
        //ALL OF THE FUNCTIONALLITY HAPPENS HERE

        //NAVBAR

        <div className="Main">
          {/* HOME CAN BE CLEANED UP */}
        <Home logout={this.stepLogout}/>
        {/* <NewPoll2 /> */}
        
        </div>
    )
    }
  }
}


export default App;
