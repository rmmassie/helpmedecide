import React from 'react';
import './OpenPolls.css';
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

class OpenPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           polls: undefined,
           vote: false,
           pollId: null
        }
        this.voteHandler = this.voteHandler.bind(this)
<<<<<<< HEAD
        this.pollHandler = this.pollHandler.bind(this)
=======
>>>>>>> d79321de78703481b47e38b732743111f13274d7
       
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
<<<<<<< HEAD
    }

    render() {
        if (this.state.polls !== undefined && this.state.vote === true) {
            return (
                <Vote pollId={this.state.pollId} pollHandler={this.pollHandler}/>
            )
        } else if (this.state.polls !== undefined && this.state.vote === false) {
        
=======
        console.log(this.state.polls)
        }).catch(err => console.log(err))
    }

    voteHandler(event) {
        console.log(event.target.value)
    }

    render() {
        if (this.state.polls !== undefined && this.state.vote === false) {
        // const  {classes, item}  = this.props;
>>>>>>> d79321de78703481b47e38b732743111f13274d7
          return ( 
              <div>
                  <h4>Active Polls</h4>
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
<<<<<<< HEAD
                                        
=======
                                            {/* <Typography>
                                                Check one of the options!
                                            </Typography> */}
>>>>>>> d79321de78703481b47e38b732743111f13274d7
                                            <TableCell>{poll.solution1}
                                            <RadioGroup aria-label="gender" name="Answer" value={index} >
                                                <FormControlLabel value={poll.solution1} control={<Radio />} label={poll.solution1} />
                                                <FormControlLabel value={poll.solution2} control={<Radio />} label={poll.solution2} />
                                            </RadioGroup>
                                            </TableCell>
<<<<<<< HEAD
                                       
                                            <Button variant="contained" color="secondary" onClick={() => this.voteHandler(index) }>Vote!</Button>
                                        </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        </TableRow>
                      }, this)
=======
                                            {/* <TableCell>{poll.solution2}
                                            <FormControlLabel
                                                aria-label="Acknowledge"
                                                onClick={(event) => event.stopPropagation()}
                                                // onFocus={(event) => event.stopPropagation()}
                                                control={<Checkbox />}
                                                // label="second checkbox"
                                                />
                                            </TableCell> */}
                                            <Button variant="contained" color="secondary">Vote!</Button>
                                        </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        </TableRow>
                      })
>>>>>>> d79321de78703481b47e38b732743111f13274d7
                  }
                  </Table>
              </div>
          )
<<<<<<< HEAD
=======
        } else if (this.state.polls !== undefined && this.state.vote === true) {
            return (
                <Vote pollId={this.state.pollId} />
            )
>>>>>>> d79321de78703481b47e38b732743111f13274d7
        } else {
          return (
            <div>
            <p>loading Polls</p>
        </div>
          )
        }
      }
    }

export default OpenPoll