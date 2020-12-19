import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component{

    state ={
        text: '', 
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //Submit the form
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        //Reset the form
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="to do..." />
                <button onClick={this.handleSubmit} >Add to do</button>
            </form>
        )
    }
}