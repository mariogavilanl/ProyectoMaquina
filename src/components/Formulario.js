import React, {Component} from 'react'
import todos from '../todos.json'

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
           title : '',
           responsabile : '',
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
    render(){
        return(
            <div className="no">
                <form>
                    <input
                        type="text"
                        name="title"
                        value=""
                        onChange={this.handleInput}
                    />

                    <input
                        type="text"
                        name="responsible"
                        value=""
                        onChange={this.handleInput}
                    />

                    <input
                        type="text"
                        name="description"
                        value=""
                        onChange={this.handleInput}
                    />

                    <select 
                    name="priority"
                    onChange={this.handleInput}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>Hight</option>
                    </select>
                        
                        
                                                                       
            </form>
            
            </div>
        )
    }
} 

export default Formulario