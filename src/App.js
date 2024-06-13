import React, {Component} from "react";


class App extends Component {


  render() {
    return (
      <div>
        <header>
          <h1>My Notes</h1>
          <aside>
            <button>+ New Note</button>
            <input type="text" placeholder="Type here to search..."/>
          </aside>
        </header>
        <ul>
          <li>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Description..."/>
            <span>X</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;