import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Navigation from "./components/Navigation";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer/Footer"
import todos from './todos.json'


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      titulo: "asdasd",
      todos
    }
  }

  render() {
    const tareas = this.state.todos.todos.map((todo, i) => {
      return (
        <div className="col-4">
          <div className="card mt-4">
          <div className="card-header">
          <h3>{todo.title}</h3>
          <span className="badge badge-pill badge-danger ml-2"> 
            {todo.priority}
          </span>
          </div>

          <div className="card-body">
          <p>{todo.description}</p>
          </div>
            
            
          </div>
        </div>

      )
    }
    );
    return (
      <div className="App">
        {/* <Navigation titulo="Titulos" /> */}

        <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">
                  { this.state.titulo }

                <span className="badge badge-pill badge-danger">
                    {this.state.todos.todos.length}
                </span>
                </a>
            </nav>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */

        }
      <div className="container">
      <div className="row">
        <Formulario/>
      </div>

      <div className="row">
          {tareas}
        </div>
      </div>
       
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
