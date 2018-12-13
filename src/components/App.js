import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import { PigList } from './PigList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pigs: [],
      sortedPigs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/hogs')
      .then(resp => resp.json())
      .then(data => this.setState({ 
        pigs: data,
        sortedPigs: data 
      }))
  }

  sortOrFilterPigs = (filter) => {
    let sortedArray;
    if (filter==='true'){
      sortedArray = this.state.pigs.filter((pig) => pig.greased)
    } else if (filter === 'false'){
      sortedArray = this.state.pigs.filter((pig) => !pig.greased)
    } else {
      sortedArray = this.state.pigs.sort((a,b) => {
        if (a[filter] < b[filter]) {return -1}
        if (a[filter] > b[filter]) {return 1}
        return 0
      })
    } 
    this.setState( { sortedPigs: sortedArray })    
  }

  render() {
    return (
      <div className="App">
        < Nav sortOrFilterPigs={this.sortOrFilterPigs} />
          < PigList pigs={this.state.sortedPigs} />
      </div>
    )
  }
}

export default App;
