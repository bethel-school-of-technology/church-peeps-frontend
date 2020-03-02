import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App";

export default class EditPrayer extends Component {

  constructor(props) {
    super(props);

    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      description: "",
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    console.log(process.env);

    axios.get('/prayer/' + this.props.match.params.id)
    .then(response => {
      console.log(response.data);
      this.setState({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        description: response.data.description,
        date: new Date(response.data.date)
      });
    })
    .catch(function (err) {
      console.log(err);
    });
  }
     

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangedate(date) {
    this.setState({
      date: date
    });
  }

    onSubmit(e) {
    e.preventDefault();

    const prayer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      description: this.state.description,
      date: this.state.date
    };

    console.log(prayer);

    axios.put("/prayer/update", prayer)
    .then(res => {
      console.log(res);
    this.props.history.push('/prayer');
})
.catch(err => {
  console.error(err);
  alert('Something went wrong');
});
    }

  render() {
    return (
      <div>
        <h3>Edit Prayer Request</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <label>First Name</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangefirstName}
            >
            </select>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangelastName}
            >
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea
              className="form-control"
              noValidate
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit" value="Edit Prayer Request" className="btn btn-secondary"
            /> 
          </div>
        </form>
      </div>
    );
  }

}


