
import './App.css'
import React, { Component } from 'react'

export default class  extends Component {
  state={
    theList: "",
    lists: []
  }

  render() {
    
    return (
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          value={this.state.theList}
          onChange={this.handleChange.bind(this)}
          name="theList"
        />
        <button onClick={this.handleAddClick.bind(this)}>Add a Task</button>
        <ul>
          {this.state.lists.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      theList: e.target.value
    });
  }

  handleAddClick() {
    if (!this.state.theList.length) {
      return;
    }
    this.setState({
      theList: "",
      lists: [...this.state.lists, this.state.theList]
    });
  }
}
