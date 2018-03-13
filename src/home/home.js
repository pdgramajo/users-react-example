import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from './actions';
import AddForm from './forms/add';
import "./home.sass";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showMessage: false,
            initialValues: {}
        };
    }

    componentDidMount() {
        this.props.actions.home.GetCountries();
        this.props.actions.home.GetUsers();
    }

    submit = (values) => {
        this.setState({
            name: values.name,
            surname: values.surname,
            country: values.country,
            birthdate: values.birthdate,
            showMessage: true
        });

        var arrayvar = this.props.users;
        arrayvar.push(values);
        localStorage.setItem('users', JSON.stringify(arrayvar));       
    }

    render() {
        return (
            <div className="App">
                <AddForm
                    onSubmit={this.submit}
                    cmbData={this.props.countries}
                />
                {this.state.showMessage &&
                    <p>
                        hello {this.state.name} from {this.state.country} on day of month you will have {this.state.birthdate}
                    </p>
                }
                <ol>
                    {this.props.users &&
                        this.props.users.map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.homeReducer.countries,
        users: state.homeReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    const actions = {
        home: bindActionCreators(homeActions, dispatch)
    };
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
