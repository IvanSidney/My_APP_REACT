import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ivan S.', salary: 3000, increase: false, id: 1},
                {name: 'Natali Y.', salary: 5000, increase: true, id: 2},
                {name: 'Uliya D.', salary: 800, increase: false, id: 3},
            ]
        }
        this.nextId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (newItemName, newItemSalary) => {
       
        const newUser = [{
            name: newItemName,
            salary: newItemSalary,
            increase: false,
            id: this.nextId++
        }]
        this.setState(({data}) => ({
            data: data.concat(newUser)
        }))
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeeList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeeAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;