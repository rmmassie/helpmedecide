import React from 'react';
import './Home.css'
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.logoutHandler = this.logoutHandler.bind(this)   
  }

    logoutHandler() {
      localStorage.clear()
      this.props.logout()
    }

  render() {
    let token = localStorage.getItem('session')
    return (
        <div className="home">
            <h1>Awesome! You're logged into the main part of the app</h1>
            <h4>Your Hashed Session token is {token}</h4>
           
             <img src="/logo1.png" alt=""/>
             <h3>From here we'll build out the Polling Portion of the App</h3>

             <h4>When you click the logout button below, the localStorage will be flushed and the session will be closed.</h4>
             <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={this.logoutHandler}
          >
            Sign Out
          </Button>
        </div>
    )
}
}


export default Home;
