import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Shot extends Component {
  
  render() {
    console.log('render of shot');
    let left = this.props.store.getShotX + 'px';
    let top = this.props.store.getShotY + 'px';
    console.log("top"+top);
    console.log("left"+left);
    return (
      <div className="shot" style={{position: 'absolute', top, left, backgroundColor:this.background}}>
      {this.props.store.userName} 
      </div>
      );
    }
  }
export default Shot;