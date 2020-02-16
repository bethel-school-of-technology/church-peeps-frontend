// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from 'axios';
import "../App"
import { Link } from "react-router-dom";

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validate form errors are empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    //validate form was completed
    Object.values(rest).forEach(val => {
        val == null && (valid = false);
    });

    return valid;
};

class CreateChurch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            city: "",
            state: "",
            formErrors: {
                title: "",
                city: "",
                state: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        const church = {

            title: this.state.title,
            city: this.state.city,
            state: this.state.state
        }
        let church1 = JSON.stringify(church);
        axios.post('/church/add', church1, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (formValid(this.state.formErrors)) {

        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state;

        switch (name) {
            case "title":
                formErrors.title = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;

            case "city":
                formErrors.city = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;

            case "state":
                formErrors.state = value.length < 3 && value.length > 0 ? "minimum 3 characters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log());
    };

    componentDidMount() {
        axios.get('/church/add')
            .then(response => {
                if (response.data.length > 0) {
                    this.state({
                        Church: response.data.map(church => church.title),
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangetitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangecity(e) {
        this.setState({
            city: e.target.value
        })
    }
    onChangestate(e) {
        this.setState({
            state: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Church = {
            Church: this.state.Church
        }
        console.log();

        axios.post('/church/add', Church)
            .then(res => console.log(res.data));


    }

    render() {
        const { formErrors } = this.state;
        return (
            <div>
                <h2>Create New Church</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="title">Church: </label>
                        <input className={formErrors.title.length > 0 ? "error" : null}
                            placeholder="title" type="text"
                            name="title" noValidate onChange={this.handleChange}
                        />
                        {formErrors.title.length > 0 && (
                            <span className="errorMessage">{formErrors.title}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City: </label>
                        <input className={formErrors.city.length > 0 ? "error" : null}
                            placeholder="city" type="text" name="city" noValidate onChange={this.onChange} />
                        {formErrors.city.length > 0 && (
                            <span className="errorMessage">{formErrors.city}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State: </label>
                        <input className={formErrors.state.length > 0 ? "error" : null}
                            placeholder="state" type="text" name="state" noValidate onChange={this.handleChange} />
                        {formErrors.state.length > 0 && (
                            <span className="errorMessage">{formErrors.state}</span>
                        )}
                    </div>
                    <div className="church">
                       <nav>
                           <Link to="/"><h5>Create Church</h5></Link>
                       </nav>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateChurch;