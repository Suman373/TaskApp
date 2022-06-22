import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
    // getStyle function
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration : "line-through"
        //     }
        // }else{
        //     return{
        //         textDecoration:"none"
        //     }
        // }
        return {
            padding: '5px',
            borderBottom: '1px dotted lightblue',
            color: this.props.todo.completed ? 'green' : 'orangered',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? 'white' : '#f7f2aa'
        }
    }

    btnStyle = () => {
        return {
            fontSize: '1.2rem',
            right: '0px',
            color: 'orangered',
            fontWeight: '600',
            cursor: 'pointer',
            margin:'1px',
            padding: '6px',
            border: 'none',
            position: 'absolute',
            background: 'transparent'
        }
    }

    render() {
        // destructure
        const { id, title } = this.props.todo;
        return (
            <div className="todoHolder" style={this.getStyle()}>
                <p>
                    {/* Lets do component drilling */}
                    <input type="checkbox" onChange={this.props.taskComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={this.btnStyle()}>X</button>
                </p>
            </div>

        )
    }
}

// Proptypes good practice
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem;
