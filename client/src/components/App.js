import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import * as actions from '../actions'; 

import Header from './Header'; 
import Landing from './Landing'; 
import MapContainer from './MapContainer'; 

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
//const Landing = () => <h2>Landing</h2>


class App extends Component {
    //as soon as component is mounted 
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div className = 'container'>
                <BrowserRouter>
                    <div>
                        <Header />

                        <Route exact path = "/" component = { Landing } />
                        <Route exact path = "/surveys" component = { Dashboard } />
                        <Route path = "/surveys/new" component = { SurveyNew } />
                        <Route path = "/map" component = { MapContainer } />
                    </div>
                </BrowserRouter> 
            </div>
        );
    }
};

export default connect(null, actions)(App);         