import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import OpenPolls from '../../OpenPolls/OpenPolls';
import NewPoll2 from '../../MakePoll/NewPoll2'
import ClosedPoll from '../../ClosedPolls/ClosedPolls'
import React from "react";

const AppRouter = () => {

    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route exact path="/OpenPolls">Vote on a Poll /</Route>
                        <Route exact path="/NewPoll2">Gotta a Question? Create a poll!/</Route>
                        <Route exact path="/ClosedPoll">View Closed Polls</Route>
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;

{/* <Route path="/OpenPolls" component={OpenPollsComponent} />
                        <Route path="/NewPoll2" component={NewPoll2Component} />
                        <Route path="ClosedPoll" component={ClosedPollComponent} /> */}