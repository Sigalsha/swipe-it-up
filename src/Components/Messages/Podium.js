import {observer, inject} from 'mobx-react';
// import {autorun, reaction, intercept} from 'mobx';
import {observable} from 'mobx';
import React, { Component } from 'react';
import { setInterval, setTimeout } from 'timers';

@inject("store")
@observer
class Podium extends Component {
    render (){
        if (this.props.store.shots.length===0){
            return (<div className="podium">
            <div className="first-place"></div>
            <div className="second-place"></div>
            <div className="third-place"></div>
            </div>)
        }
        else if (this.props.store.shots.length===1){
            return (<div className="podium">
            <div className="first-place">{this.props.store.shots[0].userName}</div>
            </div>)
        }
        else if (this.props.store.shots.length===2){
            return (<div className="podium">
            <div className="first-place">{this.props.store.shots[0].userName}</div>
            <div className="second-place">{this.props.store.shots[1].userName}</div>
            </div>)
        }
        return (<div className="podium">
        <div className="first-place">{this.props.store.shots[0].userName}</div>
        <div className="second-place">{this.props.store.shots[1].userName}</div>
        <div className="third-place">{this.props.store.shots[2].userName}</div>
        </div>)
    }
}

export default Podium; 