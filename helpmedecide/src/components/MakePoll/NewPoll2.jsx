import React from 'react';
import './Poll.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class NewPoll2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pollQuestion: null,
        answer1: null,
        answer2: null      
    }
    this.pollSubmit = this.pollSubmit.bind(this)
}

    pollSubmit(event) {
        event.preventDefault()
        console.log("The Question is: ", this.state.pollQuestion)
        console.log("Option 1 is: ", this.state.answer1)
        console.log("Option 2 is: ", this.state.answer2)

        //REQUIRE FORM VALIDATION
        let token = localStorage.getItem('session')
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify(
            {
                "token":token,
                "question":this.state.pollQuestion,
                "answer1":this.state.answer1,
                "answer2":this.state.answer2
            });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
        };

        fetch("http://localhost:3001/poll/new", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        }
    
  render() {
    return (
        <div className="home">
            <div className="pollContainer">
                <form>
                <TextField required id="standard-required" label="Required" autoComplete="off" onChange={e => {
                    console.log(e.target.value)
                    this.setState({
                        pollQuestion: e.target.value,
                    })
              }} placeholder="Summarize the Question You'd like Help With" />
                <TextField required id="standard-required" label="Required" autoComplete="off" onChange={e => {
                    console.log(e.target.value)
                    this.setState({
                        answer1: e.target.value,
                    })
              }} placeholder="First Option" />
                <TextField required id="standard-required" label="Required" autoComplete="off" onChange={e => {
                    console.log(e.target.value)
                    this.setState({
                        answer2: e.target.value,
                    })
              }} placeholder="Second Option" />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.pollSubmit}
                >
                    Submit Poll
                </Button>
                </form>
            </div>
        </div>
        )
    }
}


export default NewPoll2;
