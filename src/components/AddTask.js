import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: ``,
    date: this.minDate,
    important: false
  };

  // <App text={this.text} date={this.date} important={this.important} />;

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleCheck = e => {
    this.setState({
      important: e.target.checked
    });
  };
  handleClick = e => {
    // console.log("dodaj");
    e.preventDefault();
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.addTask(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("zadanie musi być dłuższe niż 2 znaki");
    }
  };
  render() {
    return (
      <form>
        <h3>nowe zadanie</h3>
        <input
          className="taskName"
          type="text"
          value={this.state.text}
          onChange={this.handleText}
          placeholder="nazwa"
        />
        <br />
        <label>
          <input
            className="important"
            type="checkbox"
            checked={this.state.important}
            onChange={this.handleCheck}
          />{" "}
          Ważne
        </label>
        <p>
          <label>
            {" "}
            <p>Do kiedy zrobić?</p>
            <input
              className="date"
              type="date"
              value={this.state.date}
              onChange={this.handleDate}
            />
          </label>
        </p>
        <button onClick={this.handleClick}>Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
