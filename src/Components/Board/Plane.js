import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
library.add(faPaperPlane)


@inject(allStores => ({
    addPlayerIconPos: allStores.store.addPlayerIconPos,
    checkStartPoint: allStores.store.checkStartPoint,
    managePlay: allStores.store.managePlay
    
}))
@observer
class Plane extends Component {
    
    @observable iconPos = { x: "", y: "" };
    @observable clientStart = { x: "", y: "" }
    @observable clientEnd = { x: "", y: "" };
    @observable distance = null;
    
    @action componentDidMount = async () => {
        let rect = await ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.iconPos.x = rect.x + 35 //finding the div's center
        this.iconPos.y = rect.y + 35 //finding the div's center
        //console.log(this.iconPos.x, this.iconPos.y);
        //console.log('componentDidMount');
        this.props.addPlayerIconPos(this.iconPos.x, this.iconPos.y); //send to store
    }
    
    @action start = (e) => {
        this.clientStart.x = e.touches[0].clientX; //where the player's first touch on screen
        this.clientStart.y = e.touches[0].clientY;
        // console.log( `start x:${this.clientStart.x} y:${this.clientStart.y}`)
        this.props.checkStartPoint(this.clientStart.x, this.clientStart.y) //send to store
    }
    
    @action end = (e) => {
        //e.preventDefault();
        this.clientEnd.x = e.changedTouches[0].clientX;
        this.clientEnd.y = e.changedTouches[0].clientY;
        console.log( `end x:${this.clientEnd.x} y:${this.clientEnd.y}`);
        this.props.managePlay(this.clientEnd.x, this.clientEnd.y)
        //sending shot's (x,y) to the store
    }
    

    
    render() {
        //console.log( `Clientend x:${this.clientEnd.x} y:${this.clientEnd.y}`);
        var left = this.clientEnd.x + 'px';
        var top = this.clientEnd.y + 'px';
        return (
            <FontAwesomeIcon 
            onTouchStart={this.start} 
            // onTouchMove={this.move}  
            onTouchEnd={this.end}  
            className="plane" icon="paper-plane" 
            style={{position: 'absolute', left, top}}
            />
            )
        }
    }
    
    export default Plane;