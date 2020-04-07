import React from 'react';
import './ClosedPolls.css';
import Vote from '../Vote/Vote'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ClosedPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           polls: undefined,
           vote: false,
           pollId: null
        }
        this.voteHandler = this.voteHandler.bind(this)
        this.pollHandler = this.pollHandler.bind(this)
       
    }

    componentDidMount() {
        let pollArray = []
        fetch('http://localhost:3001/poll/')
        .then(response => response.json())
        .then(result => {        
            for (let i=0; i < result.length; i++) {
                let pollObj = {
                id: result[i].id,
                question: result[i].question,
                tags: result[i].tags,
                solution1: result[i].solution1,
                solution2: result[i].solution2
                }
            pollArray.push(pollObj)
            }
            console.log(pollArray)
            
            this.setState({
                polls: pollArray
            })
        console.log(this.state.polls)
        }).catch(err => console.log(err))
    }

    voteHandler(index) {
        this.setState({
            vote: true,
            pollId: index
        })
    }

    pollHandler() {
        this.setState({
           vote: false,
           pollId: null
        })
    }

    render() {
        if (this.state.polls !== undefined && this.state.vote === true) {
            return (
                <Vote pollId={this.state.pollId} pollHandler={this.pollHandler}/>
            )
        } else if (this.state.polls !== undefined && this.state.vote === false) {
        
          return ( 
              <div>
                  <h4>Closed Polls</h4>
                  <Table>
                    {
                      this.state.polls.map(function(poll, index)
                      {
                          return <TableRow key={index}>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-label="Expand" aria-controls="additional-actions1-content" id="additional-actions1-header">
                                        {poll.question}, {poll.tags}
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <h2>Voting Has Closed</h2>
                                            
                                            <RadioGroup aria-label="gender" name="Answer" value={index} >
                                                <FormControlLabel value={poll.solution1} control={<Radio />} label={poll.solution1} />
                                                <FormControlLabel value={poll.solution2} control={<Radio />} label={poll.solution2} />
                                            </RadioGroup>
                                            <Button variant="contained" color="secondary" onClick={() => this.voteHandler(index) }>See Results!</Button>
                                           
                                       
                                            
                                        </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        </TableRow>
                      }, this)
                  }
                  </Table>
              </div>
          )
        } else {
          return (
            <div>
            <p>loading Polls</p>
        </div>
          )
        }
      }
    }

export default ClosedPoll