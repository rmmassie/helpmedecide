import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class NavBar extends React.Component{
// function NavBar(props) {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.logoutHandler = this.logoutHandler.bind(this)
    }

    
    logoutHandler() {
        localStorage.clear()
        this.props.logout ()
    }
    
    render() {
    
        return (
        <List component="nav">
            <ListItem component="div">
            <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home
                </TypoGraphy>
                </ListItemText>


                <ListItemText inset></ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Vote On A Poll
                </TypoGraphy>
                </ListItemText>


                <ListItemText inset></ListItemText>



                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Got A Question? Create A Poll!
                </TypoGraphy>
                </ListItemText>



               <ListItemText inset></ListItemText>  


               <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Click Here To View Previous Polls
                </TypoGraphy>
                </ListItemText>

                <ListItemText inset></ListItemText>



                <ListItemText inset>
                    <div className="logout">
                    <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className="submit"
                    onClick={this.logoutHandler}
                    >
                    Log Out
                    </Button>
                    {/* <TypoGraphy color="inherit" variant="title">
                       Log Out
                    </TypoGraphy> */}
                    </div>
                </ListItemText>
                
                </ListItem>
                </List>
    )
}
}


export default NavBar;