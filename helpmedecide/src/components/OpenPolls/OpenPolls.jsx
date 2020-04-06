import React from 'react';
import './OpenPolls.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
          
          return ( 
              <div>
                  <TableContainer component={Paper}>
                  <TableHead><h4>Active Polls</h4></TableHead>
                  <TableBody>
                  <Table>
                
                  {
                  this.state.polls.map(function(poll, index)
                      {
                          return <TableRow key={index}><TableCell>{poll.tags}</TableCell><TableCell>{poll.question}</TableCell><TableCell>{poll.solution1}</TableCell><TableCell>{poll.solution2}</TableCell></TableRow>
                      })
                  }
                  </Table>
                  </TableBody>
                  </TableContainer>
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