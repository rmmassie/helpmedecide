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
       .then(result =>console.log(result))
       .catch(error => console.log('error', error))


    //    let pollArray = []
    //    .then(result => {
    //     for (i=0, i < result.length, i++) {
    //     let pollObj = {
    //         question: result[i].dataValues.question,
    //         tags: result[i].dataValues.tags,
    //         solution1: result[i].dataValues.solution1,
    //         solution2: result[i].dataValues.solution2
    //     }
    //         pollArray.push(pollObj)
    //     }
    //     })  .catch(err => console.log(err))

    }


    // pollMapper = () => {
    //     return this.props.polls.map((poll, index) => {
    //         return(
    //         <tr key={index}>
    //         <th scope = "row">{poll.id}</th>
    //         <td>{poll.tag}</td>
    //         <td>{poll.question}</td>
    //         <td>{poll.solution1}</td>
    //         <td>{poll.solution2}</td>
    //         </tr>
    //         )
    //     })
    // }



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
            {/* <Table striped>
            <thead>
                <tr>
                    <th></th>
                    <th>Tags</th>
                    <th>Question</th>
                    <th>Solution1</th>
                    <th>Solution2</th>
                </tr>
            </thead>
            <tbody>
               {this.pollMapper} 
            </tbody>
            </Table> */}
            </div>
        </div>
        )}
}



export default OpenPoll