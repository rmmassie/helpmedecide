import React from 'react';
import './Home.css'
import OpenPolls from '../OpenPolls/OpenPolls'
import ClosedPolls from '../ClosedPolls/ClosedPolls'
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
    
    return (
        <div className="home">
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
        <div className="pollcontainer">
        <OpenPolls />
        {/* <ClosedPolls /> */}
       
        </div>
        </div>
    )
}
}


export default Home;
