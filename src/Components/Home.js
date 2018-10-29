// import {observer, inject} from 'mobx-react';
// import {observable} from 'mobx';
import React, { Component } from 'react';
import Classroom from '.././images/classroom.png'


class Home extends Component {

    render() {
        return (
            <div>
                <div className="app-header">Swipe it up </div>
                <img className="classroom" src={Classroom} alt="classroom"></img>
            </div>

        )
    }
}
export default Home;