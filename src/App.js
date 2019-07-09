import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      //default values for state
      monsters: [],
      searchField: ''
    }
  }
  //gets the users
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    //same as const searchField = this.state.searchField && const monsters = this.state.monsters
    const { monsters, searchField } = this.state
    //takes the state from the searchfield and filters the monsters
    const filteredMonsters = monsters.filter(monster =>
      //to lowercase so that it's not case sensitive
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          // sets the state of searchField to the input from the textbox
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        {/* passes in the list of filtered monsters as a prop */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
