import React from 'react';
import './OpenPolls.css';
import Table from '@material-ui/core/Table';
<<<<<<< HEAD
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
=======
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
>>>>>>> a46547f9d8ef24ca69e0ac8b855e12e43add9378

class OpenPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           polls: undefined
        }
    }

    componentDidMount() {
        let pollArray = []
        fetch('http://localhost:3001/poll')
        .then(response => response.json())
        .then(result => {        
         for (let i=0; i < result.length; i++) {
             let pollObj = {
             question: result[i].question,
             tags: result[i].tags,
             solution1: result[i].solution1,
             solution2: result[i].solution2
             }
         pollArray.push(pollObj)
         }
        this.setState({
            polls: pollArray
        })
        console.log(this.state.polls)
    }).catch(err => console.log(err))
    
    }

    render() {
        if (this.state.polls !== undefined) {
        // const  {classes, item}  = this.props;
          return ( 
              <div>
<<<<<<< HEAD
                  <h4>Active Polls</h4>
                  <ExpansionPanel>
                      <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-label="Expand"
                      aria-controls="additional-actions1-content"
                      id="additional-actions1-header"
                      >
=======
                  <TableContainer component={Paper}>
                  <TableHead><h4>Active Polls</h4></TableHead>
                  <TableBody>
>>>>>>> a46547f9d8ef24ca69e0ac8b855e12e43add9378
                  <Table>
                
                  {
                      this.state.polls.map(function(poll, index)
                      {
                          return <TableRow key={index}><TableCell>{poll.tags}</TableCell><TableCell>{poll.question}</TableCell><TableCell>{poll.solution1}</TableCell><TableCell>{poll.solution2}</TableCell></TableRow>
                      })
                  }
                  </Table>
<<<<<<< HEAD
                  </ExpansionPanelSummary>
                    <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox />}
                    label="checkbox"
                    />
                    <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox />}
                    label="second checkbox"
                    />
                      <ExpansionPanelDetails>
                          <Typography>
                              Check one of the options!
                          </Typography>
                      </ExpansionPanelDetails>
                  </ExpansionPanel>
=======
                  </TableBody>
                  </TableContainer>
>>>>>>> a46547f9d8ef24ca69e0ac8b855e12e43add9378
              </div>
          )
      } else 
          return (
            <div>
            <p>loading Polls</p>
        </div>

          )
      }
    }

export default OpenPoll