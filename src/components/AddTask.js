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
    const add = this.props.addTask(text, date, checked);
    if (add) {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate
      });
    }
  };
  render() {
    return (
      <form>
        <p>dodaj zadanie</p>
        <input
          className="taskName"
          type="text"
          value={this.state.text}
          onChange={this.handleText}
          required="required"
        />
        <label>
          <input
            className="important"
            type="checkbox"
            checked={this.state.important}
            onChange={this.handleCheck}
            required="required"
          />{" "}
          Priorytet
        </label>
        <p>
          <label>
            {" "}
            Do kiedy zrobić?
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
