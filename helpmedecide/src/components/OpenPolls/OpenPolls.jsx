import React from 'react';
import './OpenPolls.css';
//import Form from '@material-ui/core/FormControl';
//import Label from '@material-ui/core/FormLabel';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';

class OpenPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: ["",""],
            question: "",
            solution1: "",
            solution2: "",
            createdAt: ""

        }
        //this.pollMapper = this.pollMapper.bind(this)
    }

    getActive() {
        fetch('http://localhost:3001/poll')
       .then(response => response.json())
       .then(result => {
        let pollArray = []
        for (i=0, i < result.length, i++) {
            let pollObj = {
            question: result[i].dataValues.question,
            tags: result[i].dataValues.tags,
            solution1: result[i].dataValues.solution1,
            solution2: result[i].dataValues.solution2
            }
        pollArray.push(pollObj)
        }    
    }).catch(err => console.log(err))
    }
    //    render() {
        
    //     pollObj.map(function(poll, index)
    //         {
    //             return (
    //                 <div className="active container">
    //                 <TableRow key={index}>
    //                     <TableCell >{poll.tags}</TableCell>
    //                 </TableRow>
    //                  <TableRow key={index}>
    //                     <TableCell >{poll.question}</TableCell>
    //                 </TableRow>
    //                 <TableRow key={index}>
    //                     <TableCell >{poll.solution1}</TableCell>
    //                 </TableRow>
    //                 <TableRow key={index}>
    //                     <TableCell >{poll.solution2}</TableCell>
    //                 </TableRow>
    //                 </div>
    //                 )
    //             })
    //         }};
        
    render() {
        return (
        <div className="view">
            <div className="active">
            <h2>View Active Polls to Participate In</h2>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                className='submit'
                onClick={this.getActive}
                > Submit
            </Button>
            
            </div>
        </div>
        )}
    }
}




export default OpenPoll