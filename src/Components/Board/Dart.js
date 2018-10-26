import React, { Component } from 'react';

class Dart extends Component {
    state = { x:0, y:0}
    
    go =(event)=>{
        let x = event.touches[0].clientX;
        let y = event.touches[0].clientY;
        let sum = y - x;
        console.log("x:" + x)
        console.log("y:" + y)
        console.log("swipe length:" + sum)
        this.setState({x:x,y:y});
    }
    
    render() {
        return (
            <div className="touch" onTouchMove={this.go} style={{top:this.state.y*1.1+'px', left:this.state.x*1.1+'px'}}>Hello</div>
            )
        }
    }
    
    export default Dart;