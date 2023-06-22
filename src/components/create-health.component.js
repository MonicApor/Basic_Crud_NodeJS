import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateHealth extends Component {

    constructor(props){
        super(props);

        this.state = {
            fullname:'',
            temperature: '',
            email: '',
            number: ''
        }

        this.onSubmit = this.onSubmit.bind(this);       
        this.onValueChanged = this.onValueChanged.bind(this);
    }

    onValueChanged(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
        })

    }

    onSubmit(e){
        e.preventDefault();
        //console.log(this.state)

        const health = {
            fullname: this.state.fullname,
            temperature: this.state.temperature,
            email: this.state.email,
            number: this.state.number
        }

        axios.post('http://localhost:5000/health/add', health)
            .then(res => window.location = "/")
            .catch(err => console.log('Error: ' + err));

    }
   
    render(){

        return(
            <div className="container">
                <h1>Create List</h1>
                
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Full Name:</label>
                        <input type = "text" className='form-control' data-name="fullname" required onChange={this.onValueChanged}/>
                    </div>

                    <div className='form-group'>
                        <label>Temperature:</label>
                        <input type = "number" step = "0.1" className='form-control' data-name="temperature" required onChange={this.onValueChanged}/>
                    </div>

                    <div className='form-group'>
                        <label>Email:</label>
                        <input type = "email" className='form-control' data-name="email" required onChange={this.onValueChanged}/>
                    </div>

                    <div className='form-group'>
                        <label>Phone Number:</label>
                        <input type = "tel" className='form-control' data-name="number" required onChange={this.onValueChanged}/>
                    </div>

                    <button type = "submit" className='btn btn-success mt-2'>Submit</button>
                </form>
            </div>
        )
    }
}
