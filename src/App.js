import React, {Component} from "react";
import Header from "./Header.js"
import NotesList from "./NotesList.js";



class App extends Component {

  state= {
    notes: [{
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    }],
    searchText: "",
  }
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    }
    const newNotes = [newNote, ...this.state.notes];
    this.setState({notes: newNotes});
  }

  onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map(note=> {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({notes: updatedNotes})
  }

  onSearch = text => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map(note=> {
      if(!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const itMatches = titleMatch || descriptionMatch;
         note.doesMatchSearch = itMatches;
         return note;
      }
    })
    this.setState({notes: updatedNotes, searchText: newSearchText})
  }

  removeNote = noteId => {
    const notMatch = note => note.id !== noteId;
    const deleteMatch = this.state.notes.filter(notMatch);
    this.setState({notes: deleteMatch})
  }

  componentDidUpdate() {
    const stringifiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifiedNotes);
  }

  componendDidMount () {
    const stringifiedNotes = localStorage.getItem("savedNotes");
    if(stringifiedNotes) {
      const savedNotes = JSON.parse(stringifiedNotes);
      this.setState({notes: savedNotes});
    }
  }


  render() {
    return (
      <div>
        <Header 
          searchText={this.state.searchText}
          addNote = {this.addNote}
          onSearch={this.onSearch}
          />
        <NotesList 
          notes={this.state.notes}
          onType={this.onType}
          removeNote={this.removeNote}
           />
      </div>
    )
  }
}

export default App;