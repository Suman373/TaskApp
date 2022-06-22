
import React from 'react';

function About() {
    return (
        <React.Fragment>
            <h3>About</h3>
           <div className='para'>
           <p style={paraStyle}>Hi there! This is a task listing app or what people commonly refer as "TodoApp" is my first react practice project. It helps you to list/add your tasks and keep track of them. You can add, edit and delete the tasks/todos. This app doesn't have any backend. They say you can't be a developer unless you have made one todo-app in your life, so here is mine! ☕❤️ </p>
            <p style={paraStyle}>No copyright All Rights reserved 2022</p>
           </div>
        </React.Fragment>
    )
}

const paraStyle = {
    fontSize: '1.5rem',
    textAlign:'center',
    fontWeight: '500',
    color:'orangered',
    fontFamily: 'Marcellus SC, serif'
}
export default About;