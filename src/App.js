import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Addtask from './components/Addtask';
import About from './components/pages/About';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Add your todos/tasks below',
        completed: false
      },
      {
        id:uuidv4(),
        title:'Follow me on Github:Suman373',
        completed:false
      },
      {
        id:uuidv4(),
        title:"Page refresh will remove todos, try to avoid refresh",
        completed:false
      }
    ]

  }

  // task state
  taskComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          //if true change to false and vice versa
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  //delet task in state
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) =>
        todo.id !== id
      )]
    })
  }

  // add task in class level state(from Addtask)
  addTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos,newTask]
    });
  }

  render() {
    return (
      <Router>
         <div className="App">
         <h2>Task List</h2>
          <div style={linkContainer}>
          <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
          </div>
            <Routes>
              <Route path="/" element={
                <React.Fragment> 
                  <Addtask addTask={this.addTask}/>
                  <Todos todos={this.state.todos} taskComplete={this.taskComplete} deleteTodo={this.deleteTodo} />
                </React.Fragment>
                }></Route>
                <Route path="/about" element={
                  <About/>
                }></Route>
              </Routes>
          </div>
      </Router>
    )
  }
}
const linkContainer={
  textAlign:'center'
 
}
const linkStyle={
  fontSize:'1.3rem',
  color:'orangered',
  margin:'1rem auto',
  textDecoration:'none',
  padding:'10px'
}
export default App;
