import React, { Component } from 'react';


class Addtask extends Component {
    // the state contains the added task, app level state
    state = {
        title:''
    }
      // title --> save
      inputSave =(e)=>{
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({
            title: ''
        });
    }

    // text input -> title -> title in setState
    inputReceive =(e)=> this.setState({
        title: e.target.value
    });
  
    render() {
        return (
            <header className='header'>
                <form onSubmit={this.inputSave} style={formStyle}>
                    <input type="text" 
                    name="task" 
                    style={addInputStyle} 
                    placeholder='Enter your task'
                    value={this.state.title}
                    onChange={this.inputReceive}
                    />
                    <button type='submit' id="addBtn" style={addbtnStyle}>Add</button>
                </form>
            </header>
        )
    }
}
const addInputStyle = {
    fontSize: '1.2rem',
    height: '2.5rem',
    margin: '1rem auto',
    padding: '5px',
    width: '85%',
    border: '2px solid orangered',
    outline: 'none',
    fontFamily: 'Marcellus SC,serif'

}
const addbtnStyle = {
    fontSize: '1.2rem',
    padding: '7px',
    color: 'orangered',
    cursor: 'pointer',
    background: '#f7f2aa',
    border: '2px solid orangered'
}
const formStyle = {
    display: 'flex',
    alignItems: 'center'
}

export default Addtask;