import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.salary === '') {
            return alert("Enter name and salary!!!")
        }
        this.props.onAdd(this.state.name, this.state.salary);
        // alert("Name: " + this.state.name + ". Salary: " + this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
       
    }

    

    render() {
        const {name, salary} = this.state;
            return (
                <div className="app-add-form">
                    <h3>Add new employee</h3>
                    <form
                        onSubmit={this.onSubmit}
                        className="add-form d-flex">
                        <input type="text" 
                            className="form-control new-post-label" 
                            placeholder="Name?"
                            onChange={this.onValueChange}
                            value={name}
                            name="name"/>
                        <input type="number" 
                            className="form-control new-post-label" 
                            placeholder="Salary in $"
                            onChange={this.onValueChange}
                            value={salary}
                            name="salary"/>

                            <button type="submit" 
                                className="btn btn-outline-light">Add</button>
                    </form>
                </div>
            )
    }
}

export default EmployeesAddForm;