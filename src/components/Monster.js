import React from 'react';
import { connect } from 'react-redux';
import './Monster.css';

const Monster = ({ props, isExpanded }) => {
  console.log(props);

  return(
    isExpanded ?
      <div className='expandedMonster'>
        <label>:</label><span></span>
      </div>
      :
      <div className='closedMonster'>
        <span className='closedName'>{props.name}</span>
        <span className='closedType'>{props.type}</span>
        <span className='closedSpecies'>{props.species}</span>
      </div>
  );
};

const mapStateToProps = (state) => {
  return({
    isExpanded: state.isExpanded
  })
}

export default connect(mapStateToProps)(Monster);