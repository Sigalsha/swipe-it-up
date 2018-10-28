import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class ScoreTable extends Component {
  render() {
    let shots = this.props.store.shots;
    if(!shots){
      return;
    }
    return (
      <div className="score-table" >ScoreTable
      <div className="score-table-headline">
        <div className="score-table-headline-item">Place</div>
        <div className="score-table-headline-item">Name</div>
        <div className="score-table-headline-item">Score</div>
      </div>
      {shots.map( (s, index) => {
        return (<div className="score-table-record" key={s.userName+index}>
        <div className="score-table-item">{index+1}</div>
        <div className="score-table-item">{s.userName}</div>
        <div className="score-table-item">{s.score}</div>
          </div>)
        })}
        </div>)
      }
    }
    export default ScoreTable;