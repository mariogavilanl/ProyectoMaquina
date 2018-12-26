import React, {Component} from 'react'
import todos from '../todos.json'

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
           title : '',
           responsible : '',
           description : '',
           priority : 'low'
        }      
        
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(e){
        const {value, name} = e.target; 
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }

    addTask(){
        todos.push(this.state)
    }

    render(){
        return(
            <div className="no d-flex">
                <form>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.handleInput} value={this.state.title}/>

                    <label>Responsable</label>
                    <input type="text" name="responsible" onChange={this.handleInput} value={this.state.responsible} />

                    <label>Descripcion</label>
                    <input type="text" name="description" onChange={this.handleInput} value={this.state.description}/>

                    <label>Prioridad</label>
                    <select name="priority" onChange={this.handleInput} value={this.state.priority}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>Hight</option>
                    </select>
                    <input type="button" className="btn btn-success" value="agregar" onClick={this.agregar}/>                                
            </form>
            
            </div>
        )
    }
} 

export default Formulario