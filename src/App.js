import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots';
import './App.css';


// STATE:--> It means the discription of your App. 
// PROPS:--> it is simply things that come out of state. 


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        }) 
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} /> 
            </div>
        );
    }
}

export default App;