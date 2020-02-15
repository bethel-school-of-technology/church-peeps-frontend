// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import "../App"
// import { render } from "node-sass";

class EditChurch extends Component {
    state = {
        value: "Edit Church",
        isInEditMode: false
    }
    

     componentDidMount() {
        axios.put('/church')
        .then(response => {
            this.state({
               title: response.data.title
            })
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.put('/users')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })
        
    }

onChangeEditMode = () => {
    this.setState ({
        isInEditMode: !this.state.isInEditMode
    })
}

updateComponentValue = () => {
    this.setState ({
        isInEditMode: false,
        value: this.refs.theTextInput.value
    })
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

renderEditChurch = () => {
    return <div>
        <input 
        type="text"
        defaultValue = {this.state.value}
        refs = "theTextInput"
        />
        <button onclick={this.changeEditMode}>X</button>
        <button onclick={this.UpdateComponentValue}>OK</button>
    </div>
    }

renderDefaultChurch = () => {
    return <div onDoubleClick={this.changeEditMode}>
        {this.state.value}
    </div>
    }

render() {
    return this.state.isInEditMode ?
    this.renderEditChurch() :
    this.renderDefaultChurch()
    }
}

export default EditChurch;