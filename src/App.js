import React, {Component} from "react";


class App extends Component {


  render() {
    return (
      <div>
        <header>
          <h1 className="app-header__title">My Notes</h1>
          <aside className="app-header__controls">
            <button className="add-new">+ New Note</button>
            <input className="search" type="text" placeholder="Type here to search..."/>
          </aside>
        </header>
        <ul className="notes-list">
          <li className="note">
            <input className="note__title" type="text" placeholder="Title"/>
            <textarea className="note__description" placeholder="Description..."/>
            <span className="note__delete">X</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;