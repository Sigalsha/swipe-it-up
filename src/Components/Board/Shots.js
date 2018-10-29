import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Shots extends Component {
  render() {
    return (
      <div clasName="shots">
      {this.props.store.shots.map(shot => {
        return (
          <div className='shot' 
          style={{position: 'absolute', top:shot.y, left:shot.x, backgroundColor:'red'}}>{shot.userName}</div>          
          )
        })}
        </div>
        )
      }
      
    }  
    export default Shots;