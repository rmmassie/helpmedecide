import React from 'react';
import './Vote.css'
import { LinearProgress, Button } from '@material-ui/core/';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        question: "",
        solution1: "",
        solution2: "",
        havePoll: false,
        //DON'T HARDCODE RESPONSES
        vote: null,
        hasVoted: false
    }
    this.voteHandler = this.voteHandler.bind(this)
}
 
//Grab the Poll Information & User Info
    componentDidMount() {
    let fetchId = this.props.pollId
    let token = localStorage.getItem('session')
    let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

    let body = JSON.stringify({"session":token});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: body,
    redirect: 'follow'
    };
    fetch(`http://localhost:3001/poll/${fetchId}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        let voted
        let vote
        if (result[1] === null) {
            voted = false
            vote = null
        } else {
            voted = true
            vote = result[1].response
            
        }
        this.setState({
            question: result[0].question,
            solution1: result[0].solution1,
            solution2: result[0].solution2,
            havePoll: true,
            hasVoted: voted,
            vote: vote
            })
    })
    .catch(error => console.log('error', error));
    }

    voteHandler(choice) {
        let token = localStorage.getItem('session')
        let pollId = this.props.pollId + 1
        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let body = JSON.stringify({"session":token,"vote":choice});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: body,
            redirect: 'follow'
            };

        fetch(`http://localhost:3001/response/${pollId}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                hasVoted: true,
                vote: result.response
            })
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }

render() {
    console.log(this.state)
    
    if (this.state.havePoll === true && this.state.hasVoted === false) {
        return (
            <div className="home">
                <h2>POLL ID is {this.props.pollId}</h2>
               <h2>{this.state.question}</h2>
               <p>This might end up being some longer form description of the problem at hand. Here the user can add extra information beyond the brevity of the question field.</p>
               <div>
                    <h3>{this.state.solution1}</h3>
                    <Button variant="contained" color="secondary" onClick={() => {this.voteHandler(1)}}>Vote Option 1</Button>
               </div>
               <div>
                    <h3>{this.state.solution2}</h3>
                    <Button variant="contained" color="secondary" onClick={() => {this.voteHandler(2)}}>Vote Option 2</Button>
               </div>
               <img src="/pieChart.png" alt=""/>
               <p>Image is just a place Holder.</p>
               <Button variant="contained" color="primary" onClick={() => this.props.setVote(false)}>Back to Polls</Button>
    
            </div>
            )
    } else if (this.state.havePoll === true && this.state.hasVoted === true) {
        if (this.state.vote === 1) {
            return (
                <div className="home">
                    <h2>POLL ID is {this.props.pollId + 1}</h2>
                   <h2>{this.state.question}</h2>
                   <p>This might end up being some longer form description of the problem at hand. Here the user can add extra information beyond the brevity of the question field.</p>
                   <p><b>You voted for {this.state.solution1}</b></p>
                   <img src="/pieChart.png" alt=""/>
                   <p>Image is just a place Holder.</p>
                   <Button variant="contained" color="primary" onClick={() => this.props.setVote(false)}>Back to Polls</Button>
    
                </div>
                )
        } else if (this.state.vote === 2) {
            return (
                <div className="home">
                    <h2>POLL ID is {this.props.pollId + 1}</h2>
                   <h2>{this.state.question}</h2>
                   <p>This might end up being some longer form description of the problem at hand. Here the user can add extra information beyond the brevity of the question field.</p>
                   <p><b>You voted for {this.state.solution2}</b></p>
                   <img src="/pieChart.png" alt=""/>
                   <p>Image is just a place Holder.</p>
                   <Button variant="contained" color="primary" onClick={() => this.props.setVote(false)}>Back to Polls</Button>
                 
                </div>
                )
        }
        
        } else {
        return (
            <div className="home">
               <LinearProgress />
               
              
            </div>
            )
    }
    
    }
}


export default Vote;