import React from 'react';
import './Vote.css'
import { LinearProgress, Button } from '@material-ui/core/';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        havePoll: false,
        
        question: "",
        solution1: "",
        solution2: ""
    }
    this.clearVote = this.clearVote.bind(this)
    this.voteHandler = this.voteHandler.bind(this)
}

  componentDidMount() {
    let fetchId = this.props.pollId + 1
    fetch(`http://localhost:3001/poll/${fetchId}`)
    .then(response => response.json())
    .then(result => {
        this.setState({
            question: result.question,
            solution1: result.solution1,
            solution2: result.solution2,
            havePoll: true
        })
        console.log(this.state.question)
    })
    .catch(error => console.log('error', error));
}

clearVote() {
    this.props.pollHandler()
}

voteHandler(choice) {
    let pollId = this.props.pollId + 1
    

}

render() {
    if (this.state.havePoll) {
        return (
            <div className="home">
                <h2>POLL ID is {this.props.pollId + 1}</h2>
               <h2>{this.state.question}</h2>
               <p>This might end up being some longer form description of the problem at hand. Here the user can add extra information beyond the brevity of the question field.</p>
               <div>
                    <h3>{this.state.solution1}</h3>
                    <Button variant="contained" color="secondary" onClick={() => {this.voteHandler(1)}}>Vote Option 1</Button>
               </div>
               <div>
                    <h3>{this.state.solution2}</h3>
                    <Button variant="contained" color="secondary"onClick={() => {this.voteHandler(2)}}>Vote Option 2</Button>
               </div>
               <img src="/pieChart.png" alt=""/>
               <p>Image is just a place Holder.</p>
               <Button variant="contained" color="primary" onClick={this.clearVote}>Back to Polls</Button>

            </div>
            )
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
