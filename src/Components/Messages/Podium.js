import {observer, inject} from 'mobx-react';
// import {autorun, reaction, intercept} from 'mobx';
import {observable} from 'mobx';
import React, { Component } from 'react';
import { setInterval, setTimeout } from 'timers';

@inject("store")
@observer
class Podium extends Component {
    render (){
        return (<div className="podium">
        <div className="first-place">User-1</div>
        <div className="second-place">User-2</div>
        <div className="third-place">User-3</div>
        </div>)
    }
}

export default Podium; 